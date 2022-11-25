import React, { useEffect, useState } from "react";
import {
  Menu,
  Wrapper,
  ImgWrapper,
  ControlButton,
} from "./Main.styles";
import hello from "../Images/Icons/hello.png";
import Add_Remove from "./Add_Remove/Add_Remove";
import ItemList from "./ItemList/ItemList";
import SearchBar from "./SearchBar/SearchBar";

function Main({ list, categories, selectedCategory }) {
  const [openAddRemove, setOpenAddRemove] = useState(false);

  const toggle = () => {
    setOpenAddRemove((prev) => !prev);
  };
  useEffect(() => {
    setOpenAddRemove(false);
  }, [selectedCategory]);
  return (
    <Wrapper>
      <Menu>
        <ImgWrapper>
          <h3>Hello, David</h3>
          <img src={hello} alt="hello icon" />
        </ImgWrapper>
        <SearchBar />
      </Menu>
      <ControlButton onClick={() => toggle()}>
        {openAddRemove ? "Back" : "Add / Remove Item"}
      </ControlButton>
      {!openAddRemove && (
        <ItemList list={list} selectedCategory={selectedCategory} />
      )}
      {openAddRemove && <Add_Remove categories={categories} list={list} />}
    </Wrapper>
  );
}

export default Main;
