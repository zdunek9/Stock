import React, { useEffect, useState } from "react";
import { InputFieldWrapp } from "./SearchBar.style";
import bell from "../../Images/Icons/bell.png";
import { Autocomplete, TextField } from "@mui/material";
import { useQuery } from "react-query";
import { getSingleDataFromAPI } from "../../../api/axios";
import LoadingAnimationSmall from "../../Animation/LoadingAnimationSmall";
import Error from "../../Error/Error";

function SearchBar() {
  const [value, setValue] = useState("");

  const { error, data, isFetching, isLoading, refetch } = useQuery(
    "AllCategory",
    () => getSingleDataFromAPI(value),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    refetch();
  }, [value]);
  if (isFetching) return <LoadingAnimationSmall />;
  if (isLoading) return <LoadingAnimationSmall />;
  if (error) return <Error message={error} />;
  return (
    <InputFieldWrapp>
      <Autocomplete
        disablePortal
        freeSolo
        id="combo-box-demo"
        options={data.products}
        getOptionLabel={(option) => option.title}
        // value={value}
        onChange={(newValue) => setValue(newValue)}
        sx={{ width: 400 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="
        not working yet..."
          />
        )}
      />
      <img src={bell} alt="bell" />
    </InputFieldWrapp>
  );
}

export default SearchBar;
