import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  margin-right: 20px;
  background-color: #e1e6e9;
  user-select: none;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  }
  img {
    height: 23px;
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
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0;
  align-items: center;
  padding: 20px 30px;
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
`;
