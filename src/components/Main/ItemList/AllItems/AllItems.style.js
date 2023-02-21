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

  &:nth-child(odd) {
    background-color: #eef1f6;
  }
  p:nth-child(2) {
    flex-grow: 1;
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
  svg {
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    align-content: center;
  }
  @media (max-width: 600px) {
    justify-content: space-between;
    margin-right: 0px;
    margin-top: 20px;
    button {
      font-size: 14px;
    }
  }
`;
