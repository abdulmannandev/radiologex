import React from "react";

import "./ModulesLunchComponent.scss";

import Countires from "./Assets/icon-globe.png";
import GlobleNode from "./Assets/Mask group(1).png";
import HealthCare from "./Assets/Mask group (2).png";
import SecImg1 from "./Assets/section-image-11.png";
import SecImg2 from "./Assets/section-image-12.png";

function ModulesLunchComponent() {
  return (
    <>
      <section>
        <div className="banner">BLAZING FORWARD. BLAZING FAST. REAL TIME</div>
      </section>
      <section className="pt-normal pb-normal">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mb-4">
              <div className="countries-box">
                <div className="icon">
                  <img src={Countires} alt="" />
                </div>
                <p>66 Countries</p>
              </div>
            </div>
            <div className="col-md-8 mb-4">
              <div className="countries-box">
                <div className="icon">
                  <img src={GlobleNode} alt="" />
                </div>
                <p>2500 Global Nodes</p>
              </div>
            </div>
            <div className="col-md-8 mb-4">
              <div className="countries-box">
                <div className="icon">
                  <img src={HealthCare} alt="" />
                </div>
                <p>
                  1800 Terabytes of Healthcare <br /> Data Secured
                </p>
              </div>
            </div>
          </div>

          <div className="pt-lg meetUp-container">
            {/* // section header  */}
            <div className="section-head text-center">
              <h2 className="section-heading">
                Introducing the Two Launch Modules.
                <br /> <span className="text-green">Available 7-1-2023:</span>
              </h2>
            </div>
            <br />
            <br />
            <div className="row justify-content-center align-items-center">
              <div className="col-md-10">
                <img className="w-100 img-fluid" src={SecImg1} alt="" />
              </div>
              <div className="col-md-10">
                <div className="text-start mt-4 mt-md-3">
                  <h2 className="fw-bold">
                    R-DEE <span className="text-pink">Connect</span> <br />
                    Empowers The Industry.
                  </h2>
                  <p className="text">
                    One app that connects global healthcare like never before.
                    Communciate within your healthcare oranization or the globe.
                    <br />
                    Produce, optimize, and share healthcare data, all on one
                    screen.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-11 order-2 order-md-1">
                <div className="text-start mt-4 mt-md-3">
                  <h2 className="fw-bold">
                    R-DEE <span className="text-blue-l">Go</span> <br />
                    Enfranchises Patients.
                  </h2>
                  <p className="text">
                    A PHR app unlike any else. Full identity-proofing, builtin
                    authentication and automatic data uploads, gives full
                    custodianship to the patients for the first time. Allows
                    anyone on the globe to control and own their full health
                    records and share it anywhere, at anytime.
                  </p>
                </div>
              </div>
              <div className="col-md-9 order-1 order-md-2">
                <img className="w-100 img-fluid" src={SecImg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ModulesLunchComponent;
