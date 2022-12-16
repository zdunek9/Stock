import React, { useRef, useState, useEffect } from "react";
import { ErrorMessage, Form, Label, Input, Button } from "./Login.style";
import { motion, useIsPresent } from "framer-motion";

const variants = {
  initial: {
    x: 500,
  },
  animate: {
    x: 0,
  },
  exit: {
    x: 500,
  },
};

function Login({ setIsLoggedIn, setToggle }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const userRef = useRef();
  const isPresent = useIsPresent();

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
    setTimeout(() => userRef.current.focus(), 500);
  }, []);
  return (
    <Form
      as={motion.form}
      onSubmit={(e) => handleSubmit(e)}
      variants={variants}
      animate="animate"
      initial="initial"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {error && isPresent && <ErrorMessage>{error}</ErrorMessage>}

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
        <Button type="submit">Log in</Button>
        <Button type="button" onClick={() => setToggle(null)}>
          Back
        </Button>
      </div>
    </Form>
  );
}

export default Login;
