import styled from "styled-components";

export const Wrapper = styled.header`
  height: 100%;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 1.3rem;
  }
  select,
  input,
  button {
    width: 200px;
    padding: 3px;
    font-size: 1.1rem;
    margin: 10px;
  }
  input {
    text-align: right;
    scroll-behavior: unset;
    padding-right: 10px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
