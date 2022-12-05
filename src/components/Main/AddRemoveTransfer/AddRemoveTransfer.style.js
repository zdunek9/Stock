import styled from "styled-components";
import TransferImport from "../../Images/stockIcons/swap.png";
import GifImport from "../../Images/stockIcons/swap.gif";
import SentImport from "../../Images/stockIcons/import.png";
import GifSentImport from "../../Images/stockIcons/import.gif";

export const Wrapper = styled.div`
  height: 700px;
  position: relative;
`;

export const TransferImage = styled.div`
  height: 60px;
  width: 60px;
  transform: scale(0.73);
  background-size: cover;
  background-image: url(${TransferImport});
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
`;
