import React from "react";
import { ListTopBar, SingleItem, Wrapper } from "./History.style";

const History_List = [
  {
    Name: "Lenovo 480",
    Quantity: 8,
    User: "jan.kowalski@gmail.com",
    Date: "2022-11-16",
    Comment: "INC5792341",
  },
  {
    Name: "Dect phone",
    Quantity: 2,
    User: "patryk.czarny21@gmail.com",
    Date: "2022-11-17",
    Comment: "INC543256",
  },
  {
    Name: "Dock station",
    Quantity: 1,
    User: "czarek.patryk@gmail.com",
    Date: "2022-10-06",
    Comment: "Special needs",
  },
  {
    Name: "Lenovo 470",
    Quantity: 1,
    User: "jan.kowalski@gmail.com",
    Date: "2022-12-10",
    Comment: "INC57921541",
  },
  {
    Name: "Monitor P21H",
    Quantity: 2,
    User: "jan.klawiatur.external@gmail.com",
    Date: "2022-11-01",
    Comment: "INC57921541",
  },
];

function History() {
  return (
    <Wrapper>
      <ListTopBar>
        <p>Name</p>
        <p>Quantity</p>
        <p>User</p>
        <p>Date</p>
        <p>Comment</p>
      </ListTopBar>
      {History_List.map((item) => (
        <SingleItem>
          <p>{item.Name}</p>
          <p>{item.Quantity}</p>
          <p>{item.User}</p>
          <p>{item.Date}</p>
          <p>{item.Comment}</p>
        </SingleItem>
      ))}
    </Wrapper>
  );
}

export default History;
