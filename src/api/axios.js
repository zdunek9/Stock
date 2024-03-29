import axios from "axios";

export const getAllDataFromAPI = async (skip = 1) => {
  const setPage = (skip - 1) * 10;
  const response = await axios.get(
    `https://dummyjson.com/products/?limit=10&skip=${setPage}`
  );
  return response.data;
};

export const getAllItemsFromAPI = async () => {
  const response = await axios.get(`https://dummyjson.com/products/?limit=0`);
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

export const getSingleDataFromAPI = async (phrase) => {
  const response = await axios.get(
    `https://dummyjson.com/products/search?q=${phrase}`
  );
  return response.data;
};
