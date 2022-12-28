import styled from "styled-components";
import TransferImport from "../../Images/stockIcons/swap.png";
import GifImport from "../../Images/stockIcons/swap.gif";
import SentImport from "../../Images/stockIcons/import.png";
import GifSentImport from "../../Images/stockIcons/import.gif";

export const Wrapper = styled.div`
  height: 700px;
  position: relative;
  @media (max-width: 900px) {
    position: unset;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media (max-height: 850px) {
    position: unset;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-height: 800px) {
    height: 70%;
  }
`;

export const TransferImage = styled.div`
  height: 60px;
  width: 60px;
  transform: scale(0.73);
  background-size: cover;
  background-image: url(${TransferImport});
  @media (max-width: 900px) {
    height: 40px;
    width: 40px;
  }
  @media (max-height: 850px) {
    height: 40px;
    width: 40px;
  }
`;

export const SentImage = styled.div`
  height: 60px;
  width: 60px;
  transform: scale(0.73);
  background-size: cover;
  background-image: url(${SentImport});
  &:hover {
    transform: scale(1);
    background-image: url(${GifSentImport});
  }
  @media (max-width: 900px) {
    height: 40px;
    width: 40px;
  }
  @media (max-width: 850px) {
    height: 40px;
    width: 40px;
  }
`;
export const SelectType = styled.div`
  position: absolute;
  top: 20px;
  left: 100px;
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #e1e6e9;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
  }
  div:first-child {
    margin-right: 300px;
  }
  div:first-child:hover ${TransferImage} {
    transform: scale(1);
    background-image: url(${GifImport});
  }

  div:nth-child(2):hover ${SentImage} {
    transform: scale(1);
    background-image: url(${GifSentImport});
  }
  p {
    font-size: 1.4rem;
    letter-spacing: 1px;
  }
  @media (max-width: 1100px) {
    div:first-child {
      margin-right: 120px;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    position: unset;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    div:first-child {
      margin-right: 30px;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-height: 850px) {
    width: 100%;
    position: unset;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    div:first-child {
      margin-right: 30px;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 600px) {
    div:first-child {
      margin-right: 10px;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
