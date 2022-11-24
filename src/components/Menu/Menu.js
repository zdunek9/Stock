import React from "react";
import { Wrapper, Name, ItemList } from "./Menu.style";
import other from "../Images/Icons/categories.png";
import laptop from "../Images/Icons/laptop.png";
import monitor from "../Images/Icons/monitor.png";
import printer from "../Images/Icons/printer.png";
import receipt from "../Images/Icons/receipt.png";
import telephone from "../Images/Icons/telephone.png";
import cable from "../Images/Icons/usb-c-cable.png";



function Menu() {
  return (
    <Wrapper>
      <Name>
        <h1>Stock</h1>
      </Name>
      <ItemList>
        <li>
        <img src={laptop} alt="Other" /><p>Laptops</p>
        </li>
        <li>
        <img src={monitor} alt="Other" />  <p>Monitors</p>
        </li>
        <li>
        <img src={telephone} alt="Other" /> <p>Phones</p>
        </li>
        <li>
        <img src={cable} alt="Other" /> <p>Cables</p>
        </li>
        <li>
        <img src={printer} alt="Other" /> <p>Lexmark printers</p>
        </li>
        <li>
        <img src={receipt} alt="Other" /> <p>Zebra printers</p>
        </li>
        <li>
          <img src={other} alt="Other" /> <p>Other</p>
        </li>
      </ItemList>
    </Wrapper>
  );
}

export default Menu;
