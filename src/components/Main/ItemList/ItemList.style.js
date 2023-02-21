import styled from "styled-components";

export const Wrapper = styled.ul`
  margin-right: 20px;
  overflow-x: auto;
  margin-bottom: 20px;
  word-wrap: break-word;
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
      width: 150px;
      font-size: 0.8rem;
      margin: 10px;
    }
  }
  @media (max-width: 700px) {
    p {
      font-size: 0.6rem;
      margin: 4px;
    }
    p:nth-child(1) {
      width: 60px;
    }
    p:nth-child(3) {
      width: 45px;
    }
    p:nth-child(4) {
      width: 40px;
    }
  }
`;
