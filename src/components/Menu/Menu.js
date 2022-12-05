import React, { useState } from "react";
import { Wrapper, Name, ItemList, ListItem, LogoutButton } from "./Menu.style";
import { FiChevronLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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

function Menu({ changeCategory, setIsLoggedIn }) {
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

            <AnimatePresence>
              {singleCategory === item && (
                <motion.div
                  key={item.id}
                  initial={{ x: 50 }}
                  animate={{ x: 0 }}
                  exit={{ x: 100 }}
                  transition={{ ease: "easeOut", duration: 0.4 }}
                >
                  <FiChevronLeft />
                </motion.div>
              )}
            </AnimatePresence>
          </ListItem>
        ))}
      </ItemList>
      <LogoutButton onClick={() => setIsLoggedIn(false)}>Logout</LogoutButton>
    </Wrapper>
  );
}

export default Menu;
