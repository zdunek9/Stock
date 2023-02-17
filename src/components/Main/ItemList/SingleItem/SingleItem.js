import React from "react";
import { SingleItemWrapper, StatusIcon } from "./SingleItem.style";
import outOfStock from "../../../Images/stockIcons/out-of-stock.png";
import warning from "../../../Images/stockIcons/warning.png";
import sent from "../../../Images/stockIcons/sent.png";
import LoadingAnimationSmall from "../../../Animation/LoadingAnimationSmall";
import { useQuery } from "react-query";
import Error from "../../../Error/Error";
import { getCategoryDataFromAPI } from "../../../../api/axios";
import { useEffect } from "react";

function SingleItem({ selectedCategory }) {
  const { error, data, isFetching, refetch } = useQuery(
    "singleCategory",
    () => getCategoryDataFromAPI(selectedCategory),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    refetch();
  }, [selectedCategory]);
  if (isFetching) return <LoadingAnimationSmall />;
  if (error) return <Error message={error} />;
  return data.products.map((item) => (
    <SingleItemWrapper key={item.title}>
      <p>{item.brand}</p>
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
          {parseInt(item.stock) < 20 && item.stock !== "0" && (
            <img src={warning} alt="warning" title="Low stock" />
          )}
          {parseInt(item.stock) >= 20 && (
            <img src={sent} alt="ok" title="No need to order" />
          )}
        </StatusIcon>
      </p>
    </SingleItemWrapper>
  ));
}

export default SingleItem;
