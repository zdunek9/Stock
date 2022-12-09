import React, { useReducer } from "react";
import { Wrapper } from "./Transfer.style";
import checkmark from "../../../Images/Icons/checkmark.png";
import SelectionField from "../SelectionField/SelectionField";
import ConfirmAnimation from "../../../Animation/Confirm/ConfirmAnimation";
import { reducer } from "./TransferReducer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: 0.2,
  },
};

const initialState = {
  selectSite: "",
  selectedCategory: "",
  selectedType: "",
  numberOfItems: "",
  filtredArray: [],
  success: false,
};

function Transfer({ list, categories, siteList }) {
  const [state, dispatchReducer] = useReducer(reducer, initialState);
  const clearFields = () => {
    dispatchReducer({ type: "setSelectedCategory", payload: "" });
    dispatchReducer({ type: "setSelectedType", payload: "" });
    dispatchReducer({ type: "setNumberOfItems", payload: "" });
    dispatchReducer({ type: "setShowAllItemsAvailable", payload: "" });
  };

  const handleSiteChange = (event) => {
    if (event.target.value === "---") {
      clearFields();
      dispatchReducer({ type: "setSelectedSite", payload: "" });
      return;
    }
    dispatchReducer({ type: "setSelectedSite", payload: event.target.value });
  };
  const handleCategoryChange = (event) => {
    clearFields();
    if (event.target.value !== "---") {
      dispatchReducer({
        type: "setSelectedCategory",
        payload: event.target.value,
      });
      const newUserList = list.filter(
        (item) => item.Category === event.target.value
      );
      const toArray = newUserList.map((element) => element.Name);
      dispatchReducer({ type: "setFiltredArray", payload: toArray });
    }
  };
  const handleTypeChange = (event) => {
    if (event.target.value === "---") {
      clearFields();
      return;
    }
    dispatchReducer({ type: "setSelectedType", payload: event.target.value });
    const findItem = list.find((item) => item.Name === event.target.value);
    dispatchReducer({
      type: "setShowAllItemsAvailable",
      payload: findItem.Quantity,
    });
  };
  const handleQuantity = (event) => {
    dispatchReducer({ type: "setNumberOfItems", payload: event.target.value });
  };

  const addItem = (event) => {
    event.preventDefault();
    dispatchReducer({ type: "setSuccess", payload: true });
    setTimeout(() => {
      dispatchReducer({ type: "setSuccess", payload: false });
      clearFields();
    }, 1700);
  };
  return (
    <Wrapper
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <form onSubmit={addItem}>
        <SelectionField
          labelTekst={"Select Site"}
          optionList={siteList}
          changeHandler={handleSiteChange}
          selectedField={state.selectSite}
        />
        {state.selectSite && (
          <SelectionField
            labelTekst={"Select category"}
            optionList={categories}
            changeHandler={handleCategoryChange}
            selectedField={state.selectedCategory}
          />
        )}
        {state.selectedCategory && (
          <SelectionField
            labelTekst={"Type"}
            optionList={state.filtredArray}
            changeHandler={handleTypeChange}
            selectedField={state.selectedType}
          />
        )}
        {state.showAllItemsAvailable && (
          <p>Available items: {state.showAllItemsAvailable}</p>
        )}
        {state.selectedType && (
          <motion.div variants={containerVariants}>
            <label>
              Quantity:
              {state.numberOfItems && <img src={checkmark} alt="ok" />}
            </label>
            <input
              type="number"
              value={state.numberOfItems}
              min="1"
              max="999"
              onChange={handleQuantity}
            />
          </motion.div>
        )}
        {state.numberOfItems && (
          <motion.button variants={containerVariants}>Submit</motion.button>
        )}
        {state.success && <ConfirmAnimation />}
      </form>
    </Wrapper>
  );
}

export default Transfer;