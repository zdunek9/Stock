import styled from "styled-components";

export const Wrapper = styled.ul`
  height: 750px;
  margin-right: 20px;
  overflow-y: auto;
  @media (max-width: 1000px) {
    height: 80%;
  }
  @media (max-height: 800px) {
    height: 70%;
  }
`;



export const ListTopBar = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  user-select: none;
  p {
    text-align: center;
    width: 200px;
    margin: 15px;
    font-weight: 700;
    font-size: 1.3rem;
    cursor: pointer;
  }
  p:nth-child(2) {
    flex-grow: 1;
  }
  p:first-child {
    cursor: unset;
  }
  @media (max-width: 1000px) {
    p {
      font-size: 1.1rem;
      margin: 10px;
    }
  }
`;


