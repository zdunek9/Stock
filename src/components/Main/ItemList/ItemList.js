import React from "react";
import { ListTopBar, Wrapper } from "./ItemList.style";
import SingleItem from "./SingleItem/SingleItem";
import AllItems from "./AllItems/AllItems";

function ItemList({ selectedCategory }) {

  return (
    <Wrapper>
      <ListTopBar>
        <p>Brand</p>
        <p>Name</p>
        <p>Quantity</p>
        <p>Status</p>
      </ListTopBar>
      {selectedCategory ? (
        <SingleItem selectedCategory={selectedCategory} />
      ) : (
        <AllItems />
      )}
    </Wrapper>
  );
}

export default ItemList;
