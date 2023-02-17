import React, { useState } from "react";
import { InputFieldWrapp } from "./SearchBar.style";
import bell from "../../Images/Icons/bell.png";
import { Autocomplete, TextField } from "@mui/material";

function SearchBar({ list }) {
  const [value, setValue] = useState("");
  const tab = [];
  if (tab.length === 0) {
    // Create new list for search bar and push via props to component
    list.products.forEach((item) => tab.push({ label: item.title }));
  }
  if(value){
    // in future do something with selected value
  }
  return (
    <InputFieldWrapp>
      <Autocomplete
        disablePortal
        freeSolo
        id="combo-box-demo"
        options={tab}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label="Search..." />}
      />
      <img src={bell} alt="bell" />
    </InputFieldWrapp>
  );
}

export default SearchBar;
