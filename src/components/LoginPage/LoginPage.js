import React, { useEffect, useState } from "react";
import { Container, WelcomeText } from "./LoginPage.styles";
import Login from "./Login";
import Welcome from "./Welcome";
import { motion, AnimatePresence } from "framer-motion";
import Signup from "./Signup";

const LoginPage = ({ setIsLoggedIn }) => {
  const [toggle, setToggle] = useState(null);
  const isMobile = window.innerWidth < 600;
  useEffect(() => {
    setToggle(null);
  }, []);

  let boxVariants = {};
  if (!isMobile) {
    boxVariants = {
      animate:
        toggle === 1
          ? { width: "320px", height: "330px" }
          : toggle === 2
          ? { width: "320px", height: "410px" }
          : { width: "450px", height: "300px" },
    };
  }
  console.log(isMobile)
  return (
    <Container>
      <WelcomeText
        as={motion.div}
        variants={boxVariants}
        animate="animate"
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence initial={false}>
          {!toggle && <Welcome key="Welcome" setToggle={setToggle} />}
          {toggle === 1 && (
            <Login
              key="Login"
              setIsLoggedIn={setIsLoggedIn}
              setToggle={setToggle}
            />
          )}
          {toggle === 2 && (
            <Signup
              key="Signup"
              setIsLoggedIn={setIsLoggedIn}
              setToggle={setToggle}
            />
          )}
        </AnimatePresence>
      </WelcomeText>
    </Container>
  );
};

export default LoginPage;
