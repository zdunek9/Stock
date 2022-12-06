import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #333, #666);
  img {
    height: 70px;
    margin-bottom: 20px;
  }
`;
export const WelcomeText = styled.div`
  /* position: relative; */
  padding: 30px;
  background: #fff;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`;
