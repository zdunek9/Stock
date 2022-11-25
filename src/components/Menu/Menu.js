import React, { useState } from "react";
import { Wrapper, Name, ItemList, ListItem } from "./Menu.style";
// import Other from "../Images/Icons/categories.png";
// import Laptop from "../Images/Icons/laptop.png";
// import Monitor from "../Images/Icons/monitor.png";
// import Lexmark from "../Images/Icons/printer.png";
// import Zebra from "../Images/Icons/receipt.png";
// import Telephone from "../Images/Icons/telephone.png";
// import Cable from "../Images/Icons/usb-c-cable.png";
// import All from "../Images/Icons/all.png";
// import History from "../Images/Icons/history.png";
import { FiChevronLeft } from "react-icons/fi";

const menuCategory = [
  "all",
  "laptops",
  "monitors",
  "lexmarks",
  "zebras",
  "cables",
  "telephones",
  "others",
  "history",
];

function Menu({ changeCategory }) {
  const [singleCategory, setSingleCategory] = useState("All");
  const selectCategory = (category) => {
    setSingleCategory(category);
    changeCategory(category);
  };
  return (
    <Wrapper>
      <Name>
        <h1>Stock</h1>
      </Name>
      <ItemList>
        {menuCategory.map((item) => (
          <ListItem onClick={() => selectCategory(item)}>
            <div>
              <img src={require(`../Images/Icons/${item}.png`)} alt={item} />
              {singleCategory === item ? (
                <p className="selectedCategory">{item}</p>
              ) : (
                <p>{item}</p>
              )}
            </div>
            {singleCategory === item && <FiChevronLeft />}
          </ListItem>
        ))}
      </ItemList>
    </Wrapper>
  );
}

export default Menu;
