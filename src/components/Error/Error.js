import React from "react";
import styled from "styled-components";
import Browser from "./../Images/stockIcons/browser.png";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 300px;
    margin: 40px 0;
  }
  p {
    display: inline;
    font-size: 1.5rem;
    color: red;
    border-bottom: 1px solid red;
  }
`;

function Error({ message }) {
  return (
    <Wrapper>
      <img src={Browser} alt="error" />
      <p>
        We have a problem downloading data from the server, please try again
        later.
      </p>
      <p>Details: {message}</p>
    </Wrapper>
  );
}

export default Error;
