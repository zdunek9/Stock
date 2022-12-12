import styled from "styled-components";

export const InputFieldWrapp = styled.div`
  width: 400px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  img{
    padding: 10px;
    border: 1px solid #eef1f6;
    border-radius: 50%;
    margin-left: 10px;
    height: 50px;
  }
  @media (max-width: 900px){
    justify-content: center;
    margin: 0 10px;
    width: 90%;
}
`;
