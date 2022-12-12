import styled from "styled-components";

export const Wrapper = styled.ul`
  height: 750px;
  margin-right: 20px;
  overflow-y: auto;
  @media (max-width: 900px) {
    height: 80%;
  }
  @media (max-height: 800px) {
    height: 70%;
  }
`;

export const SingleItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    text-align: center;
    width: 150px;
    margin: 15px;
    font-weight: 500;
  }

  &:nth-child(odd) {
    background-color: #eef1f6;
  }
  @media (max-width: 900px) {
    p {
      font-size: 0.8rem;
      margin: 10px;
    }
  }
`;

export const ListTopBar = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  user-select: none;
  p {
    text-align: center;
    width: 150px;
    margin: 15px;
    font-weight: 700;
    font-size: 1.3rem;
    cursor: pointer;
  }
  p:first-child {
    cursor: unset;
  }
  @media (max-width: 900px) {
    p {
      font-size: 1.1rem;
      margin: 10px;
    }
  }
`;

export const StatusIcon = styled.span`
  margin: 0;
  padding: 0;
  img {
    height: 30px;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 900px) {
    img {
      height: 25px;
    }
  }
`;
