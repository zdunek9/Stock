import styled from "styled-components";

export const Wrapper = styled.div`
  width: 355px;
  height: 100%;
  margin-right: 20px;
  background-color: var(--gray1);
  user-select: none;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 100px;
    margin-right: 10px;
  }
`;
export const ItemList = styled.ul`
  flex-grow: 1;
  margin: 30px 0;

  div {
    display: flex;
    align-items: center;
  }
  p {
    margin-left: 10px;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
  img {
    height: 23px;
  }
  @media (max-width: 1000px) {
    margin: 10px 0;
    margin-top: 20vh;
    .selectedCategory {
      background-color: white;
    }
  }
  @media (max-height: 600px) {
    margin-top: unset;
  }
`;

export const Name = styled.div`
  height: 100px;
  line-height: 100px;
  border-bottom: 2px solid rgb(179, 179, 179);
  h1 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0 40px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0;
  align-items: center;
  padding: 20px;
  cursor: pointer;

  svg {
    display: ${(props) =>
      props.singleCategory === props.item ? "block" : "none"};
    font-size: 1.3rem;
  }
  .selectedCategory {
    font-weight: 700;
    font-size: 1rem;
  }
  @media (max-width: 1000px) {
    justify-content: center;

    svg {
      display: none;
    }

    p {
      display: none;
    }
  }
  @media (max-height: 750px) {
    padding: 12px 30px;
  }
`;

export const LogoutButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  align-items: center;
  padding: 30px;
  border-top: 2px solid rgb(179, 179, 179);
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
  }
  p {
    margin-left: 10px;
    font-weight: 500;
    font-size: 0.9rem;
  }
  img {
    height: 23px;
  }
  @media (max-width: 1000px) {
    p {
      display: none;
    }
  }
`;
