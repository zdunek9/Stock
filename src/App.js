import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import Main from "./components/Main/Main";

const queryClient = new QueryClient();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInUser = (log) => {
    setIsLoggedIn(log);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {isLoggedIn && <Main setIsLoggedIn={setIsLoggedIn} />}
        {!isLoggedIn && (
          <LoginPage setIsLoggedIn={logInUser} isLoggedIn={isLoggedIn} />
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;
