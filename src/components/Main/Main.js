import React, { useEffect, useState } from "react";
import {
  Menu,
  Wrapper,
  ImgWrapper,
  ControlButton,
  ButtonWrapper,
} from "./Main.styles";
import hello from "../Images/Icons/hello.png";
import ItemList from "./ItemList/ItemList";
import SearchBar from "./SearchBar/SearchBar";
import History from "./History/History";
import AddRemoveTransfer from "./AddRemoveTransfer/AddRemoveTransfer";

function Main({ selectedCategory, siteList }) {
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
          <h3>Hello, Admin</h3>
          <img src={hello} alt="hello icon" />
        </ImgWrapper>
        {/* <SearchBar /> */}
      </Menu>
      <ButtonWrapper>
        <ControlButton onClick={() => toggle()}>
          {openAddRemove ? "Back" : "Add / Remove Item"}
        </ControlButton>
      </ButtonWrapper>
      {openAddRemove && (
        <AddRemoveTransfer
          siteList={siteList}
        />
      )}
      {selectedCategory !== "history" && !openAddRemove && (
        <ItemList selectedCategory={selectedCategory} />
      )}
      {selectedCategory === "history" && !openAddRemove && <History />}
    </Wrapper>
  );
}

export default Main;
