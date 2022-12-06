import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  ErrorMessage,
  Form,
  Label,
  Input,
  Button,
} from "./Login.style";
import { motion, AnimatePresence } from "framer-motion";

function Login({ setIsLoggedIn, setToggle }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const userRef = useRef();
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
    } else if (username === "" || password === "") {
      setError("Username or password cannot be empty");
    } else if (username !== "admin" || password !== "password") {
      setError("Incorrect username or password");
    } else {
      setError("Something went wrong, try again");
    }
  }
  useEffect(() => {
    userRef.current.focus();
  }, []);
  return (
    <Form
      as={motion.form}
      onSubmit={handleSubmit}
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Label>
        Username:
        <Input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          ref={userRef}
        />
      </Label>
      <br />
      <Label>
        Password:
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Label>
      <br />
      <div>
        <Button onClick={() => setToggle(null)}>Back</Button>
        <Button type="submit">Log in</Button>
      </div>
    </Form>
  );
}

export default Login;
