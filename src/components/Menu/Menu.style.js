import styled from "styled-components";

export const Wrapper = styled.div`
  width: 280px;
  height: 100%;
  margin-right: 20px;
  background-color: #e1e6e9;
`;
export const ItemList = styled.ul`
  margin: 30px 0;
  li {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 20px 40px;
    cursor: pointer;
    p {
        margin-left: 10px;
      font-weight: 500;
      font-size: 0.9rem;
    }
    img{
        height: 20px;
    }
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
