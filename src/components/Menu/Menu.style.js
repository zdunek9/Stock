import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  margin-right: 20px;
  background-color: #e1e6e9;
  user-select: none;
`;
export const ItemList = styled.ul`
  margin: 30px 0;
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
  align-items: center;
  margin: 0;
  div{
    display: flex;
    align-items: center;
  }
  padding: 20px 30px;
  cursor: pointer;
  p {
    margin-left: 10px;
    font-weight: 500;
    font-size: 0.9rem;
  }
  img {
    height: 23px;
  }
  svg {
    display: ${(props) =>
      props.singleCategory === props.item ? "block" : "none"};
    font-size: 1.3rem;
  }
  .selectedCategory{
    font-weight: 700;
    font-size: 1rem;
  }
`;
