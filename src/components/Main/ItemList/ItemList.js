import React, { useEffect, useState } from "react";
import { ListTopBar, SingleItem, Wrapper } from "./ItemList.style";

function ItemList({ list, selectedCategory }) {
  const [currentList, setCurrentList] = useState([list]);
  useEffect(() => {
    if (!selectedCategory || selectedCategory === "all") {
      setCurrentList(list);
    } else {
      const filterArray = list.filter(
        (item) => item.Category === selectedCategory
      );
      setCurrentList(filterArray);
    }
  }, [selectedCategory, list]);
  return (
    <Wrapper>
      <ListTopBar>
        <p>Name</p>
        <p>Quantity</p>
      </ListTopBar>
      {currentList.map((item) => (
        <SingleItem key={item.id}>
          <p>{item.Name}</p>
          <p>{item.Quantity}</p>
        </SingleItem>
      ))}
    </Wrapper>
  );
}

export default ItemList;
