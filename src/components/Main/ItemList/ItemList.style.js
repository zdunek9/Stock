import styled from "styled-components";

export const Wrapper = styled.ul`
  height: 750px;
  margin-right: 20px;
  overflow-y: auto;
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
`;

export const ListTopBar = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  p {
    text-align: center;
    width: 150px;
    margin: 15px;
    font-weight: 700;
    font-size: 1.3rem;
    cursor: pointer;
  }
  p:first-child{
    cursor:unset;
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
`;
