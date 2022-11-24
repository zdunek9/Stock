import styled from "styled-components";

export const Wrapper = styled.ul`
  height: 100%;
  margin-right: 20px;
  overflow-y: scroll;
`;

export const SingleItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eef1f6;
  p {
    width: 150px;
    margin: 20px;
    font-weight: 500;
  }
  &:nth-child(odd) {
    background-color: #eef1f6;
  }
`;

export const ListTopBar = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  p {
    width: 150px;
    margin: 20px;
    font-weight: 700;
    font-size: 1.3rem;
  }
`;
