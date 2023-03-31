import React from "react";

import HeroImage from "./Assets/hero-img.png";
import HeroMobileImage from "./Assets/hero-mobile.png";

import "./HeroAreaHome.scss";

function HealthcareHappensHere() {
  return (
    <section className="health-care-box">
      <div className="container">
        <section className="margin-box">
          <p>
            R-DEE by Radiologex <sup>®</sup>
          </p>
          <h1>
            Healthcare Happens Here
            <sup>TM</sup>
          </h1>
          <p className="web3-network-box">
            The first WEB3 powered network designed from the ground up for
            global healthcare. Communicate,
            <br /> collaborate, and produce on one powerful, ultra-secure
            platform available
          </p>

          <div 
            className="d-flex flex-wrap justify-content-center mb-5"
          >
            <a className="btn" href="#healthcare_btn">
              Healthcare Professionals
            </a>
            <a className="btn patients_btn" href="#patients">
              Patients
            </a>
          </div>
        </section>
        <section>
          <div className="hero-image">
            <img
              src={HeroMobileImage}
              className="img-fluid w-100 hero-image__image desktop"
              alt=""
            />
            <img
              src={HeroImage}
              className="img-fluid w-100 hero-image__image mobile"
              alt=""
            />
          </div>
        </section>
      </div>
    </section>
  );
}

export default HealthcareHappensHere;
