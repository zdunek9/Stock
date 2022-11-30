import React from "react";
import AddRemove from "./AddRemove/AddRemove";
import {
  SelectType,
  SentImage,
  TransferImage,
  Wrapper,
} from "./AddRemoveTransfer.style";
import Transfer from "./Transfer/Transfer";
import TransferImageImport from "../../Images/stockIcons/swap.png";

function AddRemoveTransfer({ categories, list, siteList }) {
  return (
    <Wrapper>
      <SelectType>
        <div>
          <p>Transfer</p>
          <TransferImage />
        </div>
        <div>
          <p>Add/Remove</p>
          <SentImage />
        </div>
      </SelectType>
      {/* <Transfer list={list} categories={categories} siteList={siteList} /> */}
      <AddRemove categories={categories} list={list} />
    </Wrapper>
  );
}

export default AddRemoveTransfer;
