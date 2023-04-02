import React from "react";

import "./ModulesLunchComponent.scss";

import Countires from "./Assets/icon-globe.png";
import GlobleNode from "./Assets/Mask group(1).png";
import HealthCare from "./Assets/Mask group (2).png";

function ModulesLunchComponent() {
  return (
    <>
      <div className="banner">BLAZING FORWARD. BLAZING FAST. REAL TIME</div>
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
              <p>5000 Global Nodes</p>
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

        <div className="meetUp-container">
          {/* // section header  */}
          <div className="section-head text-center">
            <h2 className="section-heading">
              Introducing the Two Launch Modules.
              <br /> <span className="text-green">Available 7-1-2023:</span>
            </h2>
          </div>
          <p className="responsive-text">
            R-DEE {""} <span className="connect-text">Connect</span>
            {""} empowers the industry.
            <br />
          </p>
          <p className="responsive-text">
            R-DEE {""}
            <span className="medilock-text">Go</span> {""}enfranchises patients.
          </p>
        </div>
      </div>
    </>
  );
}
export default ModulesLunchComponent;
