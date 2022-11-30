import React, { useReducer } from "react";
import { Wrapper } from "./AddRemove.styles";
import ConfirmAnimation from "../../../Animation/Confirm/ConfirmAnimation";
import checkmark from "../../../Images/Icons/checkmark.png";
import { reducer } from "./AddRemoveReducer";
import SelectionField from "../SelectionField/SelectionField";

const initialState = {
  selectedTypeRequest: "Add",
  selectedCategory: "",
  selectedType: "",
  numberOfItems: "",
  filtredArray: [],
  success: false,
  showAllItemsAvailable: "",
};

function AddRemove({ categories, list }) {
  const [state, dispatchReducer] = useReducer(reducer, initialState);

  const clearFields = () => {
    dispatchReducer({ type: "setSelectedCategory", payload: "" });
    dispatchReducer({ type: "setSelectedType", payload: "" });
    dispatchReducer({ type: "setNumberOfItems", payload: "" });
    dispatchReducer({ type: "setShowAllItemsAvailable", payload: "" });
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
    <Wrapper>
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
          <SelectionField
            labelTekst={"Type:"}
            optionList={state.filtredArray}
            changeHandler={handleTypeChange}
            selectedField={state.selectedType}
          />
        )}
        {state.showAllItemsAvailable && (
          <p>Available items: {state.showAllItemsAvailable}</p>
        )}
        {state.selectedType && (
          <>
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
          </>
        )}
        {state.numberOfItems && <button>Submit</button>}
        {state.success && <ConfirmAnimation />}
      </form>
    </Wrapper>
  );
}
export default AddRemove;
