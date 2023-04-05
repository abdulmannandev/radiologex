import React from "react";

import HeroImage from "./Assets/hero-img.png";
import HeroMobileImage from "./Assets/hero-mobile.png";

import "./HeroAreaHome.scss";

function HealthcareHappensHere() {
  return (
    <section className="pt-lg home-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-24">
            <h4 className="text-green fw-light">
              R-DEE by Radiologex <sup>®</sup>
            </h4>
            <h2 className="hero-heading mb-4">
              Healthcare Happens Here
              <sup>TM</sup>
            </h2>
            <div className="hero-inner">
              <p className="text text-white w-100 w-md-50 mb-4">
                The first WEB3 powered network designed from the ground up for
                global healthcare. Communicate, collaborate, and produce on one
                powerful, ultra-secure platform available
              </p>
            </div>

            <div className="d-flex gap-3 flex-wrap justify-content-center mb-5">
              <a className="btn btn-secondary mb-3" href="#pricing">
                Healthcare Professionals
              </a>
              <a className="btn btn-green text-white mb-3" href="#price-plan-patients">
                Patients
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="hero-image">
          <img
            src={HeroMobileImage}
            className="img-fluid w-100 desktop"
            alt=""
          />
          <img
            src={HeroImage}
            className="img-fluid w-100 mobile"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HealthcareHappensHere;
