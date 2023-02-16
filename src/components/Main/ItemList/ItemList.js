import React, { useEffect, useState } from "react";
import { ListTopBar, SingleItem, StatusIcon, Wrapper } from "./ItemList.style";
import outOfStock from "../../Images/stockIcons/out-of-stock.png";
import warning from "../../Images/stockIcons/warning.png";
import sent from "../../Images/stockIcons/sent.png";
import { useQuery } from "react-query";
import Error from "../../Error/Error";
import LoadingAnimationSmall from "../../Animation/LoadingAnimationSmall";
import { getAllDataFromAPI, getCategoryDataFromAPI } from "../../../api/axios";

function ItemList({ list, selectedCategory }) {
  // const [numbers, setNumbers] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");

  const { isLoading, isError, error, data, refetch } = useQuery(
    "singleCategory",
    () =>
      selectedCategory
        ? getCategoryDataFromAPI(selectedCategory)
        : getAllDataFromAPI(),
    {
      keepPreviousData: true,
    }
  );
  useEffect(() => {
    refetch();
  }, [selectedCategory]);
  if (isLoading) return <LoadingAnimationSmall />;
  if (isError) return <Error message={error} />;

  const sortNumbers = () => {
    if (sortOrder === "ascending") {
      // setNumbers(numbers.sort((a, b) => a.Quantity - b.Quantity));
      data.sort((a, b) => a.stock - b.stock);
      setSortOrder("descending");
    } else {
      // setNumbers(numbers.sort((a, b) => b.Quantity - a.Quantity));
      data.sort((a, b) => b.stock - a.stock);
      setSortOrder("ascending");
    }
  };
  return (
    <Wrapper>
      <p>{sortOrder.column}</p>
      <ListTopBar>
        <p>Name</p>
        <p onClick={() => sortNumbers()}>Quantity</p>
        <p onClick={() => sortNumbers()}>Status</p>
      </ListTopBar>
      {data.products.map((item) => (
        <SingleItem key={item.Name}>
          <p>{item.title}</p>
          <p>{item.stock}</p>
          <p>
            <StatusIcon>
              {item.stock === "0" && (
                <>
                  <img
                    src={outOfStock}
                    alt="out of stock"
                    longdesc="Out of stock"
                    title="Out of stock"
                  />
                </>
              )}
              {parseInt(item.stock) < 10 && item.stock !== "0" && (
                <img src={warning} alt="warning" title="Low stock" />
              )}
              {parseInt(item.stock) >= 10 && (
                <img src={sent} alt="ok" title="No need to order" />
              )}
            </StatusIcon>
          </p>
        </SingleItem>
      ))}
    </Wrapper>
  );
}

export default ItemList;
