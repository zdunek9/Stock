import React from "react";
import { InputFieldWrapp } from "./SearchBar.style";
import bell from "../../Images/Icons/bell.png";
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { useQuery } from "react-query";
import { getAllItemsFromAPI } from "../../../api/axios";
import LoadingAnimationSmall from "../../Animation/LoadingAnimationSmall";
import Error from "../../Error/Error";

const MAX_RESULTS = 10;

function SearchBar() {
  const [inputValue, setInputValue] = React.useState("");
  const { error, data, isFetching, isLoading, refetch } = useQuery(
    "AllCategory",
    () => getAllItemsFromAPI(),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
  const filterOptions = createFilterOptions({
    limit: MAX_RESULTS,
  });

  if (isFetching) return <LoadingAnimationSmall />;
  if (isLoading) return <LoadingAnimationSmall />;
  if (error) return <Error message={error.message} />;
  return (
    <InputFieldWrapp>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        filterOptions={filterOptions}
        options={data.products}
        getOptionLabel={(option) => option.title}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        sx={{ width: 400 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="
            Search by name..."
          />
        )}
      />
      <img src={bell} alt="bell" />
    </InputFieldWrapp>
  );
}

export default SearchBar;
