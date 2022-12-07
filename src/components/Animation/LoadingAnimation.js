import React from "react";
import styled from "styled-components";
import image from "../Images/Icons/logo.png";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #333, #666);
  img {
    height: 200px;
    width: 200px;
  }
`;

function LoadingAnimation() {
  return (
    <Wrapper>
      <motion.img
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: [0.3, 0.7, 0.7, 0.1],
        }}
        src={image}
        alt="logo"
      />
    </Wrapper>
  );
}

export default LoadingAnimation;
