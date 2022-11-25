import React, { useEffect, useState } from "react";
import { Menu, Wrapper, ImgWrapper, ControlButton } from "./Main.styles";
import hello from "../Images/Icons/hello.png";
import Add_Remove from "./Add_Remove/Add_Remove";
import ItemList from "./ItemList/ItemList";
import SearchBar from "./SearchBar/SearchBar";
import History from "./History/History";

function Main({ list, categories, selectedCategory }) {
  const [openAddRemove, setOpenAddRemove] = useState(1);

  const toggle = () => {
    if (openAddRemove === 1 || openAddRemove === 3) {
      setOpenAddRemove(2);
    }else{
      setOpenAddRemove(3)
    }
  };
  useEffect(() => {
    if (selectedCategory === "history") {
      setOpenAddRemove(3);
    } else {
      setOpenAddRemove(1);
    }
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
      <ControlButton onClick={() => toggle()}>
        {openAddRemove === 2 ? "Back" : "Add / Remove Item"}
      </ControlButton>


      {openAddRemove === 1 && (
        <ItemList list={list} selectedCategory={selectedCategory} />
      )}
      {openAddRemove === 2 && (
        <Add_Remove categories={categories} list={list} />
      )}
      {openAddRemove === 3 && <History />}
    </Wrapper>
  );
}

export default Main;
