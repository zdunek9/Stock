import React, { useState } from "react";
import { useQuery } from "react-query";
import AddRemove from "./AddRemove/AddRemove";
import {
  SelectType,
  SentImage,
  TransferImage,
  Wrapper,
} from "./AddRemoveTransfer.style";
import Transfer from "./Transfer/Transfer";
import { getAllCategoryDataFromAPI } from "../../../api/axios";
import LoadingAnimationSmall from "../../Animation/LoadingAnimationSmall";
import Error from "../../Error/Error";

function AddRemoveTransfer({ siteList }) {
  const [toggle, setToggle] = useState(true);
  const { isLoading, isError, error, data } = useQuery(
    "category",
    () => getAllCategoryDataFromAPI(),
    {
      keepPreviousData: true,
    }
  );
  if (isLoading) return <LoadingAnimationSmall />;
  if (isError) return <Error message={error} />;

  return (
    <Wrapper>
      <SelectType>
        <div onClick={() => setToggle(true)}>
          <p>Transfer</p>
          <TransferImage />
        </div>
        <div onClick={() => setToggle(false)}>
          <p>Add/Remove</p>
          <SentImage />
        </div>
      </SelectType>
      {toggle && <Transfer categories={data} siteList={siteList} />}
      {!toggle && <AddRemove categories={data} />}
    </Wrapper>
  );
}

export default AddRemoveTransfer;
