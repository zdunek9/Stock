import React, { useState } from "react";
import AddRemove from "./AddRemove/AddRemove";
import {
  SelectType,
  SentImage,
  TransferImage,
  Wrapper,
} from "./AddRemoveTransfer.style";
import Transfer from "./Transfer/Transfer";

function AddRemoveTransfer({ categories, list, siteList }) {
  const [toggle, setToggle] = useState(true);
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
      {toggle && (
        <Transfer
          list={list}
          categories={categories}
          siteList={siteList}
        />
      )}
      {!toggle && <AddRemove categories={categories} list={list} />}
    </Wrapper>
  );
}

export default AddRemoveTransfer;
