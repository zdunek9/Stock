import React from "react";
import { ListTopBar, SingleItem, Wrapper } from "./ItemList.style";

function ItemList({ list }) {
  return (
    <Wrapper>
      <ListTopBar>
        <p>Name</p>
        <p>Quantity</p>
      </ListTopBar>
      {list.map((item) => (
        <SingleItem>
          <p>{item.Name}</p>
          <p>{item.Quantity}</p>
        </SingleItem>
      ))}
    </Wrapper>
  );
}

export default ItemList;
