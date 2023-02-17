import React, { useEffect } from "react";
import checkmark from "../../../Images/Icons/checkmark.png";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { getCategoryDataFromAPI } from "../../../../api/axios";

function ShowItemsField({
  labelTekst,
  selectedCategory,
  changeHandler,
  selectedField,
}) {
  const { isFetching, isError, error, data, refetch } = useQuery(
    "categoryType",
    () => getCategoryDataFromAPI(selectedCategory),
    {
      keepPreviousData: true,
    }
  );
  useEffect(() => {
    refetch();
  }, [selectedCategory]);
  if (isFetching) return <p>loading</p>;
  if (isError) return <p>Error : {error}</p>;
  const content = data.products.map((item) => item.title);
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
        {content.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </motion.div>
  );
}

export default ShowItemsField;
