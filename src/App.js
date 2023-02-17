import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import LoadingAnimation from "./components/Animation/LoadingAnimation";
import LoginPage from "./components/LoginPage/LoginPage";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

const menuCategory = [
  "all",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "smartphones",
  "other",
  "history",
];
const siteList = ["Lodz", "Gdansk", "Barcelona", "Werona", "Porto"];
const queryClient = new QueryClient();

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAnimationState, setShowAnimationState] = useState(false);
  const changeCategory = (cat) => {
    setSelectedCategory(cat);
  };

  const showAnimation = (log) => {
    const changeState = () => {
      setIsLoggedIn(log);
      setShowAnimationState(false);
    };
    if (log) {
      setTimeout(() => changeState(), 2000);
    } else {
      setTimeout(() => changeState(), 1000);
    }
    setShowAnimationState(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {showAnimationState && <LoadingAnimation />}
        {isLoggedIn && !showAnimationState && (
          <>
            <Menu
              menuCategory={menuCategory}
              changeCategory={changeCategory}
              setIsLoggedIn={showAnimation}
            />
            <Main selectedCategory={selectedCategory} siteList={siteList} />
          </>
        )}
        {!isLoggedIn && !showAnimationState && (
          <LoginPage setIsLoggedIn={showAnimation} isLoggedIn={isLoggedIn} />
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;
