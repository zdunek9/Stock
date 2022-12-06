import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-bottom: 10px;
    font-size: 1.1rem;
  }
  p:nth-child(3) {
    margin-bottom: 20px;
    font-size: 1rem;
  }
  button {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background: #00bcd4;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background: #0095a8;
    }
    &:first-child {
      margin-right: 15px;
    }
  }
`;
