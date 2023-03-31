import React from "react";

import MaskIcon from "./../../assets/MaskIcon.png";
import MaskIcon2 from "./../../assets/MaskIcon2.png";
import bgImage from "./Assets/Vector3.png"

import "./CardsComponent.scss";

function CardsComponent() {
  return (
    <section
      className="cards-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card-container">
              <div className="icon">
                <img src={MaskIcon} alt="" />
              </div>
              <p>
                A full productivity suite for the 70 million plus
                healthcare-affiliated professionals, practitioners, and
                affiliates.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card-container">
              <div className="icon">
                <img src={MaskIcon2} alt="" />
              </div>
              <p>
                An easy-to-use and secure PHR for the 2 billion plus people
                globally who have access to some form of healthcare, one that
                empowers them to own and maintain their complete health records,
                enabling the critically important ability to access and share
                on-demand, anywhere they go, thus helping patients and
                providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsComponent;
