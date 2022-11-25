import React from "react";
import { InputField, InputFieldWrapp } from "./SearchBar.style";
import search from "../../Images/Icons/search-interface-symbol.png";
import bell from "../../Images/Icons/bell.png";

function SearchBar() {
  return (
    <InputFieldWrapp>
      <InputField>
        <img src={search} alt="search icon" />
        <input type="text" placeholder="Search here..." />
      </InputField>
      <img src={bell} alt="bell" />
    </InputFieldWrapp>
  );
}

export default SearchBar;
