import React from "react";
import { ReactComponent as MaskIcon } from "../assets/MaskIcon.svg";
import { ReactComponent as MaskIcon2 } from "../assets/MaskIcon2.svg";
export const CardsComponent = () => {
  return (
    <div className="background-color">
      <div
        className="container responsive-cards"
        style={{ position: "relative", display: "flex" }}
      >
        <div className="card-container">
          <div className="icon">
            <MaskIcon />
          </div>
          <p>
            A full productivity suite for the 70 million (plus)
            healthcare-affiliated professionals and practitioners.
          </p>
        </div>
        <div className="card-container2">
          <div className="icon">
            <MaskIcon2 />
          </div>
          <p>
            An easy-to-use and secure PHR for the 3 billion plus people globally
            who have access to some form of healthcare that empowers them to own
            and maintain their complete health records, enabling the critically
            important ability to access and share on-demand.
          </p>
        </div>
      </div>
    </div>
  );
};
