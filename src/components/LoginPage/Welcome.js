import React from "react";
import { Wrapper } from "./Welcome.style";
import logo from "../Images/Icons/logo.png";
import { motion, AnimatePresence } from "framer-motion";

function Welcome({ setToggle }) {
  return (
    <Wrapper
      as={motion.div}
      initial={{ x: 300}}
      animate={{ x: 0}}
      exit={{ x: -300}}
      transition={{ ease: "easeOut", duration: 2 }}
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
