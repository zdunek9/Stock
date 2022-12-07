import React from "react";
import { Wrapper } from "./Welcome.style";
import logo from "../Images/Icons/logo.png";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
  },
  animate: {
    x: 0,
  },
  exit: {
    x: -500,
  },
};

function Welcome({ setToggle }) {
  return (
    <Wrapper
      as={motion.div}
      variants={variants}
      animate="animate"
      initial="initial"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <img src={logo} alt="logo" />
      <p>Welcome to stockApp</p>
      <p>Log in with your stockApp account to continue </p>
      <div>
        <button onClick={() => setToggle(1)}>Log in</button>
        <button onClick={() => setToggle(2)}>Sign up</button>
      </div>
    </Wrapper>
  );
}

export default Welcome;
