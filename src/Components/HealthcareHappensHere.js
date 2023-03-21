import React from "react";
// import userimage from "../assets/Ellipse31.png";
// import userimage1 from "../assets/Ellipse32.png";
import cardImage from "../assets/Group8221.png";
import cardImage2 from "../assets/Group8214.png";
import cardImage3 from "../assets/Group8217.png";
import image from "../assets/Group8209.png";
import lineImage from "../assets/Group8203.png";
// import mobileImage from "../assets/Group8222.png";
import bgImage from "../assets/Maskgroup.png";
import mobileImage from "../assets/mobileImage.png";

export const HealthcareHappensHere = () => {
  return (
    <section className="health-care-box">
      <div className="container">
        <p>
          R-DEE BY RADIOLOGEX <sup>®</sup>
        </p>
        <h1>
          Healthcare Happens Here <sup>TM</sup>
        </h1>
        <p className="web3-network-box">
          The first WEB3 powered network designed from the ground up for global
          healthcare. Communicate,
          <br /> collaborate, and produce on one powerful, ultra-secure platform
          available
        </p>
        <button>Healthcare Professionals</button>
        <button className="patients_btn">Patients</button>
        <section style={{ position: "relative" }}>
          <div className="lines-bg">
            <div className="circle-bg">
              <div className="mobile-bg">
                <div className="image-box" style={{ display: "block" }}>
                  <div>
                    <img src={image} alt="" />
                  </div>
                  <div>
                    <img src={cardImage} alt="" />
                  </div>
                </div>
                <div className="second-image-box">
                  <div>
                    <img src={cardImage2} alt="" />
                  </div>
                  <div>
                    <img src={cardImage3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
