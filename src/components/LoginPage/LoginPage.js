import React, { useEffect, useState } from "react";
import { Container, WelcomeText } from "./LoginPage.styles";
import Login from "./Login";
import Welcome from "./Welcome";
import { motion, AnimatePresence } from "framer-motion";

const LoginPage = ({ setIsLoggedIn }) => {
  const [toggle, setToggle] = useState(null);

  useEffect(() => {
    setToggle(null);
  }, []);
  return (
    <Container>
      <WelcomeText>
        <AnimatePresence>
          {!toggle && <Welcome setToggle={setToggle} />}
          {toggle === 1 && (
            <Login
              as={motion.div}
              key="2"

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
