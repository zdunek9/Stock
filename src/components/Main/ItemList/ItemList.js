import React, { useEffect, useState } from "react";
import { ListTopBar, SingleItem, StatusIcon, Wrapper } from "./ItemList.style";
import outOfStock from "../../Images/stockIcons/out-of-stock.png";
import warning from "../../Images/stockIcons/warning.png";
import sent from "../../Images/stockIcons/sent.png";

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
        <p>Status</p>
      </ListTopBar>
      {currentList.map((item) => (
        <SingleItem key={item.id}>
          <p>{item.Name}</p>
          <p>{item.Quantity}</p>
          <p>
            <StatusIcon>
              {item.Quantity === "0" && (
                <>
                <img src={outOfStock} alt="out of stock" longdesc="Out of stock" title="Out of stock" />
                </>
              )}
              {(parseInt(item.Quantity) < 10 && item.Quantity !== '0' )  && (
                <img src={warning} alt="warning" title="Low stock" />
              )}
              {parseInt(item.Quantity) >= 10 && <img src={sent} alt="ok"  title="No need to order"/>}
            </StatusIcon>
          </p>
        </SingleItem>
      ))}
    </Wrapper>
  );
}

export default ItemList;
