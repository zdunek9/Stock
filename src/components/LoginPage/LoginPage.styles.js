import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #666666, #999999);
  @media(max-width:600px){
  }
`;
export const WelcomeText = styled.div`
  position: relative;
  width: 450px;
  height: 300px;
  background: #fff;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  @media (max-width:600px){
  width: 100%;
  height: 375px;
  }
`;
