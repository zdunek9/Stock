import React, { useState } from "react";
import { Wrapper, Name, ItemList, ListItem } from "./Menu.style";
import { FiChevronLeft } from "react-icons/fi";

const menuCategory = [
  "all",
  "laptop",
  "monitor",
  "lexmark",
  "zebra",
  "cable",
  "telephone",
  "other",
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
          <ListItem onClick={() => selectCategory(item)} key={item.id}>
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
