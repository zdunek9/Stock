import React from "react";
import { Wrapper } from "./Confirm_Animation.styles";
function Confirm_Animation() {
  console.log("doing shit");
  return (
    <Wrapper>
      <div className="swal-icon swal-icon--success">
        <span className="swal-icon--success__line swal-icon--success__line--long"></span>
        <span className="swal-icon--success__line swal-icon--success__line--tip"></span>
        <div className="swal-icon--success__ring"></div>
        <div className="swal-icon--success__hide-corners"></div>
      </div>
    </Wrapper>
  );
}

export default Confirm_Animation;
