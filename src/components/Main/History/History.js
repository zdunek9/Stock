import React, { useState } from "react";
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
  const [historyList, setHistoryList] = useState(History_List);
  const [dateSortOrder, setDateSortOrder] = useState(false);
  const [quantitySortOrder, setQuantitySortOrder] = useState(false);
  const [nameSortOrder, setNameSortOrder] = useState(false);
  const [userSortOrder, setUserSortOrder] = useState(false);
  const [commentSortOrder, setCommentSortOrder] = useState(false);

  const sortDateFunction = () => {
    if (dateSortOrder) {
      setHistoryList(
        History_List.sort((a, b) => new Date(a.Date) - new Date(b.Date))
      );
      setDateSortOrder(false);
    } else {
      setHistoryList(
        History_List.sort((a, b) => new Date(b.Date) - new Date(a.Date))
      );
      setDateSortOrder(true);
    }
  };
  const sortQuantityFunction = () => {
    if (quantitySortOrder) {
      setHistoryList(History_List.sort((a, b) => a.Quantity - b.Quantity));
      setQuantitySortOrder(false);
    } else {
      setHistoryList(History_List.sort((a, b) => b.Quantity - a.Quantity));
      setQuantitySortOrder(true);
    }
  };
  const sortNameFunction = () => {
    if (nameSortOrder) {
      setHistoryList(
        History_List.sort((a, b) => {
          if (a.Name < b.Name) {
            return 1;
          }
          if (a.Name > b.Name) {
            return -1;
          }
          return 0;
        })
      );
      setNameSortOrder(false);
    } else {
      setHistoryList(
        History_List.sort((a, b) => {
          if (a.Name < b.Name) {
            return -1;
          }
          if (a.Name > b.Name) {
            return 1;
          }
          return 0;
        })
      );
      setNameSortOrder(true);
    }
  };
  const sortUserFunction = () => {
    if (userSortOrder) {
      setHistoryList(
        History_List.sort((a, b) => {
          if (a.User < b.User) {
            return 1;
          }
          if (a.User > b.User) {
            return -1;
          }
          return 0;
        })
      );
      setUserSortOrder(false);
    } else {
      setHistoryList(
        History_List.sort((a, b) => {
          if (a.User < b.User) {
            return -1;
          }
          if (a.User > b.User) {
            return 1;
          }
          return 0;
        })
      );
      setUserSortOrder(true);
    }
  };
  const sortCommentFunction = () => {
    if (commentSortOrder) {
      setHistoryList(
        History_List.sort((a, b) => {
          if (a.Comment < b.Comment) {
            return 1;
          }
          if (a.Comment > b.Comment) {
            return -1;
          }
          return 0;
        })
      );
      setCommentSortOrder(false);
    } else {
      setHistoryList(
        History_List.sort((a, b) => {
          if (a.Comment < b.Comment) {
            return -1;
          }
          if (a.Comment > b.Comment) {
            return 1;
          }
          return 0;
        })
      );
      setCommentSortOrder(true);
    }
  };
  return (
    <Wrapper>
      <ListTopBar>
        <p onClick={() => sortNameFunction()}>Name</p>
        <p onClick={() => sortQuantityFunction()}>Quantity</p>
        <p onClick={() => sortUserFunction()}>User</p>
        <p onClick={() => sortDateFunction()}>Date</p>
        <p onClick={() => sortCommentFunction()}>Comment</p>
      </ListTopBar>
      {historyList.map((item) => (
        <SingleItem key={item.Name}>
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
