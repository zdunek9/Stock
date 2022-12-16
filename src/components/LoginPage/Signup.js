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
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [flee, setflee] = useState(false);
  const [position, setPosition] = useState(-100);
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
    if (username !== "" && passwordMatch) {
      setIsLoggedIn(true);
    }
  }

  const fleeButton = () => {
    if (username !== "" && passwordMatch) {
      setflee(false);
      setPosition(0);
      setError("");
      setPasswordMatch(true);
      return;
    } else if (username === "") {
      setError("Username cannot be empty");
    } else if (password === "" || confirmPassword === "") {
      setError("Password cannot be empty");
    } else if (
      !passwordMatch &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      setError("Password do not match");
    }
    setflee(true);
    setPosition((prev) => (prev >= 50 ? -40 : 50));
  };
  useEffect(() => {
    if (passwordMatch) {
      setflee(false);
      setPosition(0);
    }
  }, [passwordMatch]);
  useEffect(() => {
    if (password === confirmPassword && username !== "" && password !== "") {
      setPasswordMatch(true);
      setError("");
    } else {
      setPasswordMatch(false);
    }
    setflee(false);
    setPosition(0);
  }, [confirmPassword, password, username]);

  useEffect(() => {
    setTimeout(() => userRef.current.focus(), 500);
  }, []);

  return (
    <Form
      as={motion.form}
      variants={variants}
      animate="animate"
      onSubmit={(e) => handleSubmit(e)}
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
        <Button
          style={
            passwordMatch
              ? { backgroundColor: "#00bcd4", marginRight: "15px" }
              : { backgroundColor: "#008799", marginRight: "15px" }
          }
          randomPosition={flee ? position : 0}
          onMouseOver={() => fleeButton()}
          type="submit"
        >
          Sign up
        </Button>
        <Button type="button" onClick={() => setToggle(null)}>
          Back
        </Button>
      </div>
    </Form>
  );
}

export default Signup;
