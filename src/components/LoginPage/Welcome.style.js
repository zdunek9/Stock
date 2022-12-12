import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-width: 400px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  img {
    height: 70px;
    margin-bottom: 20px;
  }
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
  @media (max-width: 600px) {
    position: unset;
    min-width: unset;
    img{
      height: 90px;
    }
    p {
      text-align: center;
      font-size: 1.3rem;
    }
    p:nth-child(3) {
    font-size: 0.8rem;
  }
    button {
      &:hover {
        background: unset;
      }
    }
  }
`;
