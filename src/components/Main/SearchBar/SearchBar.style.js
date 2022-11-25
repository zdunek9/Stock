import styled from "styled-components";

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