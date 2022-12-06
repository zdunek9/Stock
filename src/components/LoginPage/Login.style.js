import styled from "styled-components";

export const ErrorMessage = styled.div`
  position: absolute;
  color: red;
  top: 15px;
  left: 10%;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  margin: 10px;
  div {
    text-align: right;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding: 8px 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  background: transparent;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background: #00bcd4;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #0095a8;
  }
  &:first-child {
    margin-right: 15px;
  }
`;
