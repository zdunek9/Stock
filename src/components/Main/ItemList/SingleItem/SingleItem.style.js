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
