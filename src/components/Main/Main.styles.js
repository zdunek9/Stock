import styled from "styled-components";

export const Wrapper = styled.header`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div`
  height: 100px;
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: 8px;
    height: 20px;
  }
  h3{
    font-size: 1.4rem;
  }
`;
export const ControlButton = styled.button`
  align-self: flex-end;
  margin-bottom: 20px;
  margin-right: 20px;
  border: unset;
  font-size: 1.1rem;
  border-radius: 20px;
  background-color: #e1e6e9;
  cursor: pointer;
  padding: 10px 15px;
  width: 200px;
`;
