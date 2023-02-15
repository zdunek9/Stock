import React from "react";
import styled from "styled-components";
import image from "../Images/Icons/logo.png";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    height: 100px;
    width: 100px;
  }
`;

function LoadingAnimationSmall() {
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

export default LoadingAnimationSmall;
