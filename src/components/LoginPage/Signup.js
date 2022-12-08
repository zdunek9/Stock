import React, { useRef, useState, useEffect } from "react";
import { ErrorMessage, Form, Label, Input, Button } from "./Signup.style";
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
function Signup({ setIsLoggedIn, setToggle }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(false);
  const userRef = useRef();
  const isPresent = useIsPresent();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handlePasswordChangeConfirm(event) {
    setConfirmPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    //It may not be the best verification, but that's not the point here
    
    if (password !== confirmPassword) {
      setError("Password do not match");
      setPassword("");
      setConfirmPassword("");
      return;
    } else if (username === "" || password === "") {
      setError("Username or password cannot be empty");
      return;
    }
    setIsLoggedIn(true);
  }
  useEffect(() => {
    setTimeout(() => userRef.current.focus(), 500);
  }, []);
  return (
    <Form
      as={motion.form}
      onSubmit={handleSubmit}
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
      <Label>
        Confirm password:
        <Input
          type="password"
          value={confirmPassword}
          onChange={handlePasswordChangeConfirm}
        />
      </Label>
      <br />
      <div>
        <Button onClick={() => setToggle(null)}>Back</Button>
        <Button type="submit">Sign up</Button>
      </div>
    </Form>
  );
}

export default Signup;
