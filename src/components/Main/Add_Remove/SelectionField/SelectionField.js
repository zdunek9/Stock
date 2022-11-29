import React from "react";
import checkmark from "../../../Images/Icons/checkmark.png";

function SelectionField({
  labelTekst,
  optionList,
  changeHandler,
  selectedField,
}) {
  return (
    <>
      <label>
        {labelTekst}
        {selectedField && <img src={checkmark} alt="ok" />}
      </label>
      <select value={selectedField} onChange={changeHandler}>
        <option value="---">---</option>
        {optionList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectionField;
