import axios from "axios";

export const getAllDataFromAPI = async (skip = 0) => {
  const response = await axios.get(
    `https://dummyjson.com/products/?limit=10&skip=${skip}`
  );
  return response.data;
};

export const getCategoryDataFromAPI = async (category) => {
  const response = await axios.get(
    `https://dummyjson.com/products/category/${category}`
  );
  return response.data;
};

export const getAllCategoryDataFromAPI = async () => {
  const response = await axios.get("https://dummyjson.com/products/categories");
  return response.data;
};
