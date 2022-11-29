import React, { useEffect, useState } from "react";
import {
  Menu,
  Wrapper,
  ImgWrapper,
  ControlButton,
  ButtonWrapper,
} from "./Main.styles";
import hello from "../Images/Icons/hello.png";
import Add_Remove from "./Add_Remove/Add_Remove";
import ItemList from "./ItemList/ItemList";
import SearchBar from "./SearchBar/SearchBar";
import History from "./History/History";

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
        <SearchBar list={list} />
      </Menu>
      <ButtonWrapper>
        <ControlButton onClick={() => toggle()}>
          {openAddRemove ? "Back" : "Add / Remove Item"}
        </ControlButton>
      </ButtonWrapper>
      {openAddRemove ? (
        <Add_Remove categories={categories} list={list} />
      ) : (
        <>
          {selectedCategory !== "history" && (
            <ItemList list={list} selectedCategory={selectedCategory} />
          )}
          {selectedCategory === "history" && <History />}
        </>
      )}
    </Wrapper>
  );
}

export default Main;
