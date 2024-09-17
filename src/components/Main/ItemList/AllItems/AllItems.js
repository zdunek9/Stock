import React from "react";
import {
  SingleItemWrapper,
  StatusIcon,
  PaginationWrapper,
} from "./AllItems.style";
import outOfStock from "../../../Images/stockIcons/out-of-stock.png";
import warning from "../../../Images/stockIcons/warning.png";
import sent from "../../../Images/stockIcons/sent.png";
import LoadingAnimationSmall from "../../../Animation/LoadingAnimationSmall";
import { useQuery } from "react-query";
import Error from "../../../Error/Error";
import { GrNext, GrPrevious } from "react-icons/gr";
import { getAllDataFromAPI } from "../../../../api/axios";
import { useState, useEffect } from "react";
import PageButton from "./../PageButton/PageButton";

function AllItems() {
  const [page, setPage] = useState(1);

  const { error, data, isFetching, isPreviousData, refetch } = useQuery(
    "AllCategoryShow",
    () => getAllDataFromAPI(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    refetch();
  }, [page]);

  if (isFetching) return <LoadingAnimationSmall />;
  if (error) return <Error message={error.message} />;

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);
  // const pagesArray = Array(data.total / 10)
  //   .fill()
  //   .map((_, index) => index + 1); old one 
  const pagesArray = Array(Math.ceil(data.total / 10))
  .fill()
  .map((_, index) => index + 1);

  return (
    <>
      {data.products.map((item) => (
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
      ))}
      <PaginationWrapper>
        <button onClick={prevPage} disabled={isPreviousData || page === 1}>
          {!(isPreviousData || page === 1) && <GrPrevious />}
          Prev
        </button>
        {pagesArray.map((pg) => (
          <PageButton
            key={pg}
            page={page}
            setPage={setPage}
            pg={pg}
            isPreviousData={isPreviousData}
          >
            {pg}
          </PageButton>
        ))}
        <button
          onClick={nextPage}
          disabled={isPreviousData || page === data.total / 10}
        >
          Next
          {!(isPreviousData || page === data.total / 10) && <GrNext />}
        </button>
      </PaginationWrapper>
    </>
  );
}

export default AllItems;
