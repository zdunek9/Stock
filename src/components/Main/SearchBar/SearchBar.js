import React from "react";
import { InputFieldWrapp } from "./SearchBar.style";
import bell from "../../Images/Icons/bell.png";
import { Autocomplete, TextField } from "@mui/material";

function SearchBar({ list }) {
  const tab = [];
  if (tab.length === 0) {
    // Create new list for search bar and push via props to component
    list.forEach((item) => tab.push({ label: item.Name }));
  }
  return (
    <InputFieldWrapp>
      <Autocomplete
        disablePortal
        freeSolo
        id="combo-box-demo"
        options={tab}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label="Search..." />}
      />
      <img src={bell} alt="bell" />
    </InputFieldWrapp>
  );
}

export default SearchBar;
