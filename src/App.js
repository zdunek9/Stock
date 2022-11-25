import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

const list = [
  {
    Name: "Lenovo 480s",
    Quantity: "1",
    Category: "laptops",
  },
  {
    Name: "Lenovo 470s",
    Quantity: "3",
    Category: "laptops",
  },
  {
    Name: "Lenovo 460s",
    Quantity: "8",
    Category: "laptops",
  },
  {
    Name: "Dell P23",
    Quantity: "13",
    Category: "monitors",
  },
  {
    Name: "Lenovo H16",
    Quantity: "11",
    Category: "monitors",
  },
  {
    Name: "Iphone 13s",
    Quantity: "5",
    Category: "telephones",
  },
  {
    Name: "Iphone 13",
    Quantity: "1",
    Category: "telephones",
  },
  {
    Name: "Iphone 11",
    Quantity: "0",
    Category: "telephones",
  },
  {
    Name: "Lan pink 3m",
    Quantity: "39",
    Category: "cables",
  },
  {
    Name: "Lan pink 1m",
    Quantity: "39",
    Category: "cables",
  },
  {
    Name: "Lan red 1m",
    Quantity: "39",
    Category: "cables",
  },
  {
    Name: "Lan blue 1m",
    Quantity: "39",
    Category: "cables",
  },
  {
    Name: "Lan pink 5m",
    Quantity: "39",
    Category: "cables",
  },
  {
    Name: "Lexmark 823m",
    Quantity: "3",
    Category: "lexmarks",
  },
  {
    Name: "Lexmark 811m",
    Quantity: "4",
    Category: "lexmarks",
  },
  {
    Name: "Lexmark 611",
    Quantity: "11",
    Category: "lexmarks",
  },
  {
    Name: "Zebra gk490",
    Quantity: "10",
    Category: "zebras",
  },
  {
    Name: "Zebra zd620 lan",
    Quantity: "10",
    Category: "zebras",
  },
  {
    Name: "Zebra gx480",
    Quantity: "3",
    Category: "zebra",
  },
  {
    Name: "Zebra zd620 wifi ",
    Quantity: "10",
    Category: "zebra",
  },
  {
    Name: "Dect phones",
    Quantity: "25",
    Category: "others",
  },
  {
    Name: "Bateries 480s",
    Quantity: "11",
    Category: "others",
  },
  {
    Name: "Dock stations",
    Quantity: "74",
    Category: "others",
  },
];

const categories = [
  "laptops",
  "monitors",
  "telephones",
  "cables",
  "lexmark",
  "zebra",
  "other",
];
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const changeCategory = (cat) => {
    setSelectedCategory(cat);
  };
  return (
    <div className="App">
      <Menu categories={categories} changeCategory={changeCategory} />
      <Main
        list={list}
        categories={categories}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
