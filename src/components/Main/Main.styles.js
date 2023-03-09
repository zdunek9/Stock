import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: auto;
`;
export const PartingWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const MenuSection = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    justify-content: flex-end;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: 8px;
    height: 20px;
  }
  h3 {
    font-size: 1.4rem;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
export const ControlButton = styled.button`
  margin-bottom: 20px;
  margin-right: 20px;
  border: unset;
  font-size: 1.1rem;
  border-radius: 20px;
  background-color: #e1e6e9;
  cursor: pointer;
  user-select: none;
  padding: 10px 15px;
  width: 220px;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
  @media (max-width: 900px) {
    text-align: center;
  }
`;
