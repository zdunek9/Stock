import React, { useState } from "react";
import { Wrapper } from "./Add_Remove.styles";
import Confirm_Animation from "../../Animation/Confirm/Confirm_Animation";

function Add_Remove({ categories, list }) {
  const [selectedTypeRequest, setselectedTypeRequest] = useState("Add");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [numberOfItems, setNumberOfItems] = useState("");
  const [filtredArray, setFiltredArray] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleCategoryChange = (event) => {
    if (event.target.value === "---") {
      setSelectedCategory("");
      setSelectedType("");
      setNumberOfItems("");
      return;
    }
    setSelectedCategory(event.target.value);
    const newUserList = list.filter(
      (item) => item.Category === event.target.value
    );
    setFiltredArray(newUserList);
  };

  const handleTypeChange = (event) => {
    if (event.target.value === "---") {
      setSelectedType("");
      setNumberOfItems("");
      return;
    }
    setSelectedType(event.target.value);
  };
  const handleQuantity = (event) => {
    setNumberOfItems(event.target.value);
  };
  const handleTypeRequestChange = (event) => {
    setselectedTypeRequest(event.target.value);
  };
  const addItem = (event) => {
    event.preventDefault();
    setSuccess(true);
    console.log(selectedTypeRequest, selectedType, numberOfItems);
  };
  return (
    <Wrapper>
      <form onSubmit={addItem}>
        <label>Select request type: </label>
        <select value={selectedTypeRequest} onChange={handleTypeRequestChange}>
          <option value="Add">Add</option>
          <option value="Remove">Remove</option>
        </select>

        <label>Select category: </label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="---">---</option>
          {categories.map((item) => (
            <option key={item.Name} value={item}>
              {item}
            </option>
          ))}
        </select>

        {selectedCategory && (
          <>
            <label>Type:</label>
            <select value={selectedType} onChange={handleTypeChange}>
            <option value="---">---</option>
              {filtredArray.map((item) => (
                <option key={item.Name} value={item.Name}>
                  {item.Name}
                </option>
              ))}
            </select>
          </>
        )}
        {selectedType && (
          <>
            <label>Quantity: </label>
            <input
              type="number"
              value={numberOfItems}
              min="0"
              max="999"
              onChange={handleQuantity}
            />
          </>
        )}
        {numberOfItems && <button>Submit</button>}
      </form>
      {success && <Confirm_Animation />}
    </Wrapper>
  );
}

export default Add_Remove;
