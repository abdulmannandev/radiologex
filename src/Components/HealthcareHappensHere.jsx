import React from "react";
import image from "../assets/Group8222.png";

function HealthcareHappensHere() {
  return (
    <section className="health-care-box">
      <div className="container">
        <section className="margin-box">
          <p>
            R-DEE by Radiologex <sup>®</sup>
          </p>
          <h1>
            Healthcare Happens Here{" "}
            <small>
              <sup>TM</sup>
            </small>
          </h1>
          <p className="web3-network-box">
            The first WEB3 powered network designed from the ground up for
            global healthcare. Communicate,
            <br /> collaborate, and produce on one powerful, ultra-secure
            platform available
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px",
              marginBottom: "9%",
            }}
            className="responsive-btn"
          >
            <a href="#healthcare_btn">
              <button>Healthcare Professionals</button>
            </a>
            <a href="#patients">
              <button className="patients_btn">Patients</button>
            </a>
          </div>
        </section>
        <section>
          <div className="mobile-bg">
            <img src={image} className="mobile-bg__image" alt="" />
            <div className="image-box">
              <div className="user-box-image"></div>
              <div className="simplyfiy-product-box-image"></div>
              <div className="healtcare-box-image"></div>
              <div className="user-time-box-image"></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default HealthcareHappensHere;
