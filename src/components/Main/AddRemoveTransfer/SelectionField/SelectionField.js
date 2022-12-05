import React from "react";
import checkmark from "../../../Images/Icons/checkmark.png";
import { motion } from "framer-motion";

function SelectionField({
  labelTekst,
  optionList,
  changeHandler,
  selectedField,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <label>
        {labelTekst}
        {selectedField && selectedField !== "---" && (
          <img src={checkmark} alt="ok" />
        )}
      </label>
      <select value={selectedField} onChange={changeHandler}>
        <option value="---">---</option>
        {optionList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </motion.div>
  );
}

export default SelectionField;
