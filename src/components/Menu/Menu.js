import React, { useState } from "react";
import { Wrapper, Name, ItemList, ListItem, LogoutButton } from "./Menu.style";
import { FiChevronLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logout from "../Images/Icons/logout.png";

function Menu({ changeCategory, setIsLoggedIn, menuCategory }) {
  const [singleCategory, setSingleCategory] = useState("All");
  const selectCategory = (category) => {
    if (category === "all") {
      setSingleCategory(category);
      changeCategory("");
      return;
    }
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
          <ListItem
            key={item}
            onClick={() => selectCategory(item)}
            className={`${singleCategory === item ? "selectedCategory" : ""}`}
          >
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
      <LogoutButton onClick={() => setIsLoggedIn(false)}>
        <div>
          <img src={logout} alt="logout" />
          <p>Logout</p>
        </div>
      </LogoutButton>
    </Wrapper>
  );
}

export default Menu;
