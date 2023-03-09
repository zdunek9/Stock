import React, { useReducer } from "react";
import { Wrapper } from "./AddRemove.styles";
import ConfirmAnimation from "../../../Animation/Confirm/ConfirmAnimation";
import checkmark from "../../../Images/Icons/checkmark.png";
import { reducer } from "./AddRemoveReducer";
import SelectionField from "../SelectionField/SelectionField";
import { motion } from "framer-motion";
import ShowItemsField from "../ShowItems/ShowItemsField";

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
  selectedTypeRequest: "Add",
  selectedCategory: "",
  selectedType: "",
  numberOfItems: "",
  filtredArray: [],
  success: false,
};

function AddRemove({ categories }) {
  const [state, dispatchReducer] = useReducer(reducer, initialState);

  const clearFields = () => {
    dispatchReducer({ type: "setSelectedCategory", payload: "" });
    dispatchReducer({ type: "setSelectedType", payload: "" });
    dispatchReducer({ type: "setNumberOfItems", payload: "" });
  };

  const handleCategoryChange = (event) => {
    clearFields();
    if (event.target.value !== "---") {
      dispatchReducer({
        type: "setSelectedCategory",
        payload: event.target.value,
      });
    }
  };

  const handleTypeChange = (event) => {
    if (event.target.value === "---") {
      clearFields();
      return;
    }
    dispatchReducer({ type: "setSelectedType", payload: event.target.value });
  };
  const handleQuantity = (event) => {
    dispatchReducer({ type: "setNumberOfItems", payload: event.target.value });
  };
  const handleTypeRequestChange = (event) => {
    dispatchReducer({
      type: "setselectedTypeRequest",
      payload: event.target.value,
    });
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
      success={state.success}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <form onSubmit={addItem}>
        <label>
          Select request type:
          {state.selectedTypeRequest && <img src={checkmark} alt="ok" />}
        </label>
        <select
          value={state.selectedTypeRequest}
          onChange={handleTypeRequestChange}
        >
          <option value="Add">Add</option>
          <option value="Remove">Remove</option>
        </select>
        <SelectionField
          labelTekst={"Select category:"}
          optionList={categories}
          changeHandler={handleCategoryChange}
          selectedField={state.selectedCategory}
        />
        {state.selectedCategory && (
          <ShowItemsField
            labelTekst={"Type"}
            selectedCategory={state.selectedCategory}
            changeHandler={handleTypeChange}
            selectedField={state.selectedType}
          />
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
      </form>
      {state.success && <ConfirmAnimation />}
    </Wrapper>
  );
}
export default AddRemove;
