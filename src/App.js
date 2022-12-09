import { useState } from "react";
import "./App.css";
import LoadingAnimation from "./components/Animation/LoadingAnimation";
import LoginPage from "./components/LoginPage/LoginPage";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

const list = [
  { id: 1, Name: "Lenovo 460s", Quantity: "8", Category: "laptop" },
  { id: 2, Name: "Dell P23", Quantity: "13", Category: "monitor" },
  { id: 3, Name: "Lenovo H16", Quantity: "11", Category: "monitor" },
  { id: 4, Name: "Iphone 13s", Quantity: "5", Category: "telephone" },
  { id: 5, Name: "Iphone 13", Quantity: "1", Category: "telephone" },
  { id: 6, Name: "Iphone 11", Quantity: "0", Category: "telephone" },
  { id: 7, Name: "Lan pink 3m", Quantity: "39", Category: "cable" },
  { id: 8, Name: "Lan pink 1m", Quantity: "30", Category: "cable" },
  { id: 9, Name: "Lan red 1m", Quantity: "25", Category: "cable" },
  { id: 10, Name: "Lan blue 1m", Quantity: "39", Category: "cable" },
  { id: 11, Name: "Lan pink 5m", Quantity: "60", Category: "cable" },
  { id: 12, Name: "Lexmark 823m", Quantity: "3", Category: "lexmark" },
  { id: 13, Name: "Lexmark 811m", Quantity: "4", Category: "lexmark" },
  { id: 14, Name: "Lexmark 611", Quantity: "11", Category: "lexmark" },
  { id: 15, Name: "Zebra gk490", Quantity: "15", Category: "zebra" },
  { id: 16, Name: "Zebra zd620 lan", Quantity: "2", Category: "zebra" },
  { id: 17, Name: "Zebra gx480", Quantity: "3", Category: "zebra" },
  { id: 18, Name: "Zebra zd620 wifi ", Quantity: "10", Category: "zebra" },
  { id: 19, Name: "Dect phones", Quantity: "25", Category: "other" },
  { id: 20, Name: "Bateries 480s", Quantity: "11", Category: "other" },
  { id: 21, Name: "Dock stations", Quantity: "74", Category: "other" },
  { id: 22, Name: "Lenovo 480s", Quantity: "1", Category: "laptop" },
  { id: 23, Name: "Lenovo 470s", Quantity: "3", Category: "laptop" },
];

const categories = [
  "laptop",
  "monitor",
  "telephone",
  "cable",
  "lexmark",
  "zebra",
  "other",
];

const siteList = ["Lodz", "Gdansk", "Barcelona", "Werona", "Porto"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAnimationState, setShowAnimationState] = useState(false); // used for imitate fetching data
  const changeCategory = (cat) => {
    setSelectedCategory(cat);
  };

  const showAnimation = (log) => {
    const changeState = () => {
      setIsLoggedIn(log);
      setShowAnimationState(false);
    };
    if(log){
      setTimeout(() => changeState(), 2000);
    }else{
      setTimeout(() => changeState(), 1000);

    }
    setShowAnimationState(true);
  };

  return (
    <div className="App">
      {showAnimationState && <LoadingAnimation />}
      {isLoggedIn && !showAnimationState && (
        <>
          <Menu
            categories={categories}
            changeCategory={changeCategory}
            setIsLoggedIn={showAnimation}
          />
          <Main
            list={list}
            categories={categories}
            selectedCategory={selectedCategory}
            siteList={siteList}
          />
        </>
      )}
        {!isLoggedIn && !showAnimationState && (
          <LoginPage
            setIsLoggedIn={showAnimation}
            isLoggedIn={isLoggedIn}
          />
        )}
    </div>
  );
}

export default App;
