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

export const InputFieldWrapp = styled.div`
  width: 500px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  img:nth-child(2) {
    padding: 10px;
    border: 1px solid #eef1f6;
    border-radius: 50%;
    margin-left: 10px;
    height: 50px;
  }
  img:nth-child(1) {
    height: 17px;
  }
`;
export const InputField = styled.div`
  background-color: #eef1f6;
  border-radius: 15px;
  padding: 2px 15px;
  width: 450px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 8px;
    background-color: unset;
    border: unset;
    font-size: 1.2rem;
  }

`;
export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: 8px;
    height: 20px;
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
