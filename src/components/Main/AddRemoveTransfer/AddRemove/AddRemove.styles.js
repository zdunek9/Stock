import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 160px;
  left: 575px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  p {
    margin-left: 15px;
    font-style: italic;
    color: #465e86;
  }
  img {
    height: 22px;
    padding: 0;
    margin-left: 5px;
  }
  form {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
  }
  label {
    display: flex;
    align-items: center;
    align-content: center;
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
  button {
    padding: 8px 0;
    border: unset;
    border-radius: 10px;
    background-color: #e1e6e9;
    cursor: pointer;
  }
  button:hover {
    background-color: #d3dade;
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
  @media (max-width: 1100px) {
    left: 400px;
  }

  @media (max-width: 900px) {
    position: unset;
    label {
      font-size: 0.9rem;
    }
    form {
      display: ${(prop) => (prop.success ? "none" : "unset")};
    }
    select,
    input,
    button {
      font-size: 0.9rem;
      margin: 10px;
    }
  }
  @media (max-height: 850px) {
    position: unset;
    label {
      font-size: 0.9rem;
    }
    form {
      display: ${(prop) => (prop.success ? "none" : "unset")};
    }
    select,
    input,
    button {
      font-size: 0.9rem;
      margin: 10px;
    }
  }
  @media (max-width: 600px) {
    select,
    input,
    button {
      width: 50vw;
    }
  }
`;
