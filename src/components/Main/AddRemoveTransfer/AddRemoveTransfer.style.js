import styled from "styled-components";
import TransferImport from "../../Images/stockIcons/swap.png";
import GifImport from "../../Images/stockIcons/swap.gif";
import SentImport from "../../Images/stockIcons/import.png";
import GifSentImport from "../../Images/stockIcons/import.gif";

export const Wrapper = styled.div`
  border: 1px solid black;
  height: 600px;
  position: relative;
`;

export const SelectType = styled.div`
  position: absolute;
  top: 50px;
  left: 150px;
  width: 250px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  div{
    display: flex;
    align-items: center;
  }
  p {
    font-size: 1.4rem;
  }
  &::before {
    content: "";
    position: absolute;
    color: white;
    border: 2px solid white;
    top: 0;
    z-index: 1;
    right: -3px;
    height:97%;
  }
`;

export const TransferImage = styled.div`
  height: 60px;
  width: 60px;
  transform: scale(0.7);
  background-size: cover;
  background-image: url(${TransferImport});
  &:hover {
    transform: scale(1);
    background-image: url(${GifImport});
  }
`;

export const SentImage = styled.div`
  height: 60px;
  width: 60px;
  transform: scale(0.7);
  background-size: cover;
  background-image: url(${SentImport});
  &:hover {
    transform: scale(1);
    background-image: url(${GifSentImport});
  }
`;
