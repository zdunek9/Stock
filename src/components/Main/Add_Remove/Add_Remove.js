import React, { useState } from "react";
import { Wrapper } from "./Add_Remove.styles";
import Confirm_Animation from "../../Animation/Confirm/Confirm_Animation";
import checkmark from "../../Images/Icons/checkmark.png";

function Add_Remove({ categories, list }) {
  const [selectedTypeRequest, setselectedTypeRequest] = useState("Add");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [numberOfItems, setNumberOfItems] = useState("");
  const [filtredArray, setFiltredArray] = useState([]);
  const [success, setSuccess] = useState(false);
  const [showAllItemsAvailable, setShowAllItemsAvailable] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory("");
    setSelectedType("");
    setNumberOfItems("");
    setShowAllItemsAvailable("");
    if (event.target.value !== "---") {
      setSelectedCategory(event.target.value);
      const newUserList = list.filter(
        (item) => item.Category === event.target.value
      );
      setFiltredArray(newUserList);
    }
  };

  const handleTypeChange = (event) => {
    if (event.target.value === "---") {
      setShowAllItemsAvailable("");
      setSelectedType("");
      setNumberOfItems("");
      return;
    }
    setSelectedType(event.target.value);
    const findItem = list.find((item) => item.Name === event.target.value);
    setShowAllItemsAvailable(findItem.Quantity);
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
    setTimeout(() => {
      setSuccess(false);
      setSelectedCategory("");
      setSelectedType("");
      setNumberOfItems("");
    }, 1700);
    console.log(selectedTypeRequest, selectedType, numberOfItems);
  };
  return (
    <Wrapper>
      <form onSubmit={addItem}>
        <label>
          Select request type:
          {selectedTypeRequest && <img src={checkmark} alt="ok" />}
        </label>
        <select value={selectedTypeRequest} onChange={handleTypeRequestChange}>
          <option value="Add">Add</option>
          <option value="Remove">Remove</option>
        </select>

        <label>
          Select category:
          {selectedCategory && <img src={checkmark} alt="ok" />}
        </label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="---">---</option>
          {categories.map((item) => (
            <option key={item.Name} value={item}>
              {item}
            </option>
          ))}
        </select>

        {selectedCategory && (
          <div>
            <div>
              <label>
                Type: {selectedType && <img src={checkmark} alt="ok" />}
              </label>
              <select value={selectedType} onChange={handleTypeChange}>
                <option value="---">---</option>
                {filtredArray.map((item) => (
                  <option key={item.Name} value={item.Name}>
                    {item.Name}
                  </option>
                ))}
              </select>
            </div>
            {showAllItemsAvailable && (
              <p>Available items: {showAllItemsAvailable}</p>
            )}
          </div>
        )}
        {selectedType && (
          <>
            <label>
              Quantity: {numberOfItems && <img src={checkmark} alt="ok" />}
            </label>
            <input
              type="number"
              value={numberOfItems}
              min="1"
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
