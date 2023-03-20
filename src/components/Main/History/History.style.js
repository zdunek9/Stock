import styled from "styled-components";

export const Wrapper = styled.ul`
  margin-right: 20px;
  height: 80vh;
  @media (max-width: 900px) {
    margin-right: 10px;
  }
`;

export const SingleItem = styled.li`
  border-bottom: 1px solid #eef1f6;
  display: grid;
  text-align: center;
  grid-template-columns: 15% 14% 34% 17% 20%;
  p {
    margin: 20px 10px;
    font-weight: 500;
  }

  &:nth-child(odd) {
    background-color: #eef1f6;
  }


  @media (max-width: 1000px) {
    grid-template-columns: 15% 20% 28% 17% 20%;
    p {
      overflow: hidden;
      font-size: 0.8rem;
      margin: 10px 5px;
    }
  }
  @media (max-width: 700px) {
    p {
      font-size: 0.6rem;
      margin: 4px;
    }
  }
`;

export const ListTopBar = styled.li`
  display: grid;
  text-align: center;
  grid-template-columns: 15% 14% 34% 17% 20%;
  border-bottom: 2px solid black;
  p {
    cursor: pointer;
    margin: 20px 10px;
    font-weight: 700;
    font-size: 1.3rem;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 15% 20% 28% 17% 20%;
    p {
      margin: 10px 5px;
      font-size: 0.8rem;
      overflow: hidden;
    }
  }
  @media (max-width: 700px) {
    p {
      font-size: 0.6rem;
      margin: 4px;
    }
  }
`;
