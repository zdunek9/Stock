import React from "react";
import {
  Menu,
  Wrapper,
  ImgWrapper,
  InputFieldWrapp,
  InputField,
  ControlButton,
} from "./Main.styles";
import hello from "../Images/Icons/hello.png";
import search from "../Images/Icons/search-interface-symbol.png";
import bell from "../Images/Icons/bell.png";
import Add_Remove from "./Add_Remove/Add_Remove";
import ItemList from "./ItemList/ItemList";

function Main({ list, categories }) {
  return (
    <Wrapper>
      <Menu>
        <ImgWrapper>
          <h3>Hello, David</h3>
          <img src={hello} alt="hello icon" />
        </ImgWrapper>
        <InputFieldWrapp>
          <InputField>
            <img src={search} alt="search icon" />
            <input type="text" placeholder="Search here..." />
          </InputField>
          <img src={bell} alt="bell" />
        </InputFieldWrapp>
      </Menu>
      <ControlButton>Add / Remove Item</ControlButton>
      {/* <ItemList list={list} /> */}
      <Add_Remove categories={categories} list={list} />
    </Wrapper>
  );
}

export default Main;
