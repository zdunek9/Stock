import "./App.css";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

const list = [
  {
    Name: "Lenovo 480s",
    Quantity: "1",
    Category: "Laptops",
  },
  {
    Name: "Lenovo 470s",
    Quantity: "3",
    Category: "Laptops",
  },
  {
    Name: "Lenovo 460s",
    Quantity: "8",
    Category: "Laptops",
  },
  {
    Name: "Dell P23",
    Quantity: "13",
    Category: "Monitors",
  },
  {
    Name: "Lenovo H16",
    Quantity: "11",
    Category: "Monitors",
  },
  {
    Name: "Iphone 13s",
    Quantity: "5",
    Category: "Phones",
  },
  {
    Name: "Iphone 13",
    Quantity: "1",
    Category: "Phones",
  },
  {
    Name: "Iphone 11",
    Quantity: "0",
    Category: "Phones",
  },
  {
    Name: "Lan pink 3m",
    Quantity: "39",
    Category: "Cables",
  },
  {
    Name: "Lan pink 1m",
    Quantity: "39",
    Category: "Cables",
  },
  {
    Name: "Lan red 1m",
    Quantity: "39",
    Category: "Cables",
  },
  {
    Name: "Lan blue 1m",
    Quantity: "39",
    Category: "Cables",
  },
  {
    Name: "Lan pink 5m",
    Quantity: "39",
    Category: "Cables",
  },
  {
    Name: "Lexmark 823m",
    Quantity: "3",
    Category: "Lexmark printers",
  },
  {
    Name: "Lexmark 811m",
    Quantity: "4",
    Category: "Lexmark printers",
  },
  {
    Name: "Lexmark 611",
    Quantity: "11",
    Category: "Lexmark printers",
  },
  {
    Name: "Zebra gk490",
    Quantity: "10",
    Category: "Zebra printers",
  },
  {
    Name: "Zebra zd620 lan",
    Quantity: "10",
    Category: "Zebra printers",
  },
  {
    Name: "Zebra gx480",
    Quantity: "3",
    Category: "Zebra printers",
  },
  {
    Name: "Zebra zd620 wifi ",
    Quantity: "10",
    Category: "Zebra printers",
  },
  {
    Name: "Dect phones",
    Quantity: "25",
    Category: "Other",
  },
  {
    Name: "Bateries 480s",
    Quantity: "11",
    Category: "Other",
  },
  {
    Name: "Dock stations",
    Quantity: "74",
    Category: "Other",
  },
];

const categories = ["Laptops", "Monitors","Phones", "Cables","Lexmark printers", "Zebra printers", "Other"]
function App() {
  return (
    <div className="App">
      <Menu />
      <Main list={list} categories={categories} />
    </div>
  );
}

export default App;
