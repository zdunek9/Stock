import styled from "styled-components";

export const SingleItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    text-align: center;
    width: 200px;
    margin: 15px;
    font-weight: 500;
  }
  p:nth-child(2) {
    flex-grow: 1;
  }
  &:nth-child(odd) {
    background-color: #eef1f6;
  }
  @media (max-width: 1000px) {
    p {
      font-size: 0.8rem;
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
  @media (max-width: 1000px) {
    img {
      height: 25px;
    }
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  margin-top: 20px;
  button {
    cursor: pointer;
    background-color: unset;
    border: unset;
    margin: 0 3px;
    font-size: 17px;
    display: flex;
    align-items: center;
  }
  svg{
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    align-content: center;
  }
`;
