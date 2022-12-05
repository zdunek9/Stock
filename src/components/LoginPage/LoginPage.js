import React, { useState } from "react";
import {
  Container,
  ErrorMessage,
  Form,
  Label,
  Input,
  Button,
  LoginForm,
  RegisterForm,
} from "./LoginPage.styles";

const LoginPage = ({ setIsLoggedIn, isLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Here, you would typically authenticate the user by sending the
    // username and password to a server and checking the response.
    // For the sake of simplicity, we'll just assume that the login
    // was successful if the username is "admin" and the password is
    // "password".
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    }
  }

  if (isLoggedIn) {
    return (
      <p>
        You are logged in as {username}.
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      </p>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
    );
  }
};

export default LoginPage;
