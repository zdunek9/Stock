import React from "react";
import { InputFieldWrapp } from "./SearchBar.style";
import bell from "../../Images/Icons/bell.png";
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
const MAX_RESULTS = 10;

function SearchBar({ data }) {
  const [inputValue, setInputValue] = React.useState("");

  const filterOptions = createFilterOptions({
    limit: MAX_RESULTS,
  });

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
