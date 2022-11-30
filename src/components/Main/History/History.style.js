import styled from "styled-components";

export const Wrapper = styled.ul`
  margin-right: 20px;
  height: 80vh;
`;

export const SingleItem = styled.li`
  border-bottom: 1px solid #eef1f6;
  display: grid;
  grid-template-columns: 17% 12% 34% 14% 23%;
  p {
    margin: 20px 10px;
    font-weight: 500;
  }

  &:nth-child(odd) {
    background-color: #eef1f6;
  }
`;

export const ListTopBar = styled.li`
  display: grid;
  grid-template-columns: 15% 14% 34% 14% 23%;
  border-bottom: 2px solid black;
  p {
    margin: 20px 10px;
    font-weight: 700;
    font-size: 1.3rem;
  }
`;
