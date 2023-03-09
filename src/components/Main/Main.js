import React, { useEffect, useState } from "react";
import {
  MenuSection,
  Wrapper,
  ImgWrapper,
  ControlButton,
  ButtonWrapper,
  PartingWrapper,
} from "./Main.styles";
import hello from "../Images/Icons/hello.png";
import ItemList from "./ItemList/ItemList";
import SearchBar from "./SearchBar/SearchBar";
import History from "./History/History";
import AddRemoveTransfer from "./AddRemoveTransfer/AddRemoveTransfer";
import { useQuery } from "react-query";
import { getAllItemsFromAPI } from "../../api/axios";
import LoadingAnimation from "../Animation/LoadingAnimation";
import Error from "../Error/Error";
import { menuCategory } from "../DummyData/DummyData";
import { siteList } from "../DummyData/DummyData";
import Menu from "../Menu/Menu";

function Main({ setIsLoggedIn }) {
  const [openAddRemove, setOpenAddRemove] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { error, data, isLoading } = useQuery(
    "AllCategory",
    () => getAllItemsFromAPI(),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
  const changeCategory = (cat) => {
    setSelectedCategory(cat);
  };
  const toggle = () => {
    setOpenAddRemove((prev) => !prev);
  };
  useEffect(() => {
    setOpenAddRemove(false);
  }, [selectedCategory]);

  if (isLoading) return <LoadingAnimation />;
  if (error) return <Error message={error.message} />;
  return (
    <PartingWrapper>
      <Menu
        menuCategory={menuCategory}
        changeCategory={changeCategory}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Wrapper>
        <MenuSection>
          <ImgWrapper>
            <h3>Hello, Admin</h3>
            <img src={hello} alt="hello icon" />
          </ImgWrapper>
          <SearchBar data={data} />
        </MenuSection>
        <ButtonWrapper>
          <ControlButton onClick={() => toggle()}>
            {openAddRemove ? "Back" : "Add / Remove Item"}
          </ControlButton>
        </ButtonWrapper>
        {openAddRemove && <AddRemoveTransfer siteList={siteList} />}
        {selectedCategory !== "history" && !openAddRemove && (
          <ItemList selectedCategory={selectedCategory} />
        )}
        {selectedCategory === "history" && !openAddRemove && <History />}
      </Wrapper>
    </PartingWrapper>
  );
}

export default Main;
