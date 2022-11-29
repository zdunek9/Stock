import React, { useReducer } from "react";
import { Wrapper } from "./Add_Remove.styles";
import Confirm_Animation from "../../Animation/Confirm/Confirm_Animation";
import checkmark from "../../Images/Icons/checkmark.png";
import { reducer } from "./Add_RemoveReducer";
import Transfer from "./Transfer/Transfer";

const initialState = {
  selectedTypeRequest: "Add",
  selectedCategory: "",
  selectedType: "",
  numberOfItems: "",
  filtredArray: [],
  success: false,
  showAllItemsAvailable: "",
};

function Add_Remove({ categories, list }) {
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
      dispatchReducer({ type: "setFiltredArray", payload: newUserList });
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
        <label>
          Select category:
          {state.selectedCategory && <img src={checkmark} alt="ok" />}
        </label>
        <select value={state.selectedCategory} onChange={handleCategoryChange}>
          <option value="---">---</option>
          {categories.map((item) => (
            <option key={item.Name} value={item}>
              {item}
            </option>
          ))}
        </select>
        {state.selectedCategory && (
          <div>
            <div>
              <label>
                Type: {state.selectedType && <img src={checkmark} alt="ok" />}
              </label>
              <select value={state.selectedType} onChange={handleTypeChange}>
                <option value="---">---</option>
                {state.filtredArray.map((item) => (
                  <option key={item.Name} value={item.Name}>
                    {item.Name}
                  </option>
                ))}
              </select>
            </div>
            {state.showAllItemsAvailable && (
              <p>Available items: {state.showAllItemsAvailable}</p>
            )}
          </div>
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
        {state.success && <Confirm_Animation />}
      </form>
      <Transfer list={list} categories={categories} />
    </Wrapper>
  );
}
export default Add_Remove;
