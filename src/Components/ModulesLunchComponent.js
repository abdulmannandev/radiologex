import React from "react";
import Countires from "../assets/Mask group1.png";
import GlobleNode from "../assets/Mask group(1).png";
import HealthCare from "../assets/Mask group (2).png";

export const ModulesLunchComponent = () => {
  return (
    <>
      <div className="container meetUp-container">
        <h1>
          Introducing the Two Launch Modules.
          <br /> <span>Available 6-1-2023:</span>
        </h1>
        <p className="responsive-text">
          R-DEE {""} <span className="connect-text">Connect</span>
          {""} empowers the industry.
          <br />
        </p>
        <p className="responsive-text">
          R-DEE {""}
          <span className="medilock-text">MediLock</span> {""}enfranchises
          patients.
        </p>
      </div>
      <div className="banner">BLAZING FORWARD. BLAZING FAST. REAL TIME</div>
      <div className="card-box container">
        <div className="countries-box">
          <div className="icon">
            <img src={Countires} alt="" />
          </div>
          <p>66 Countries</p>
        </div>
        <div className="countries-box">
          <div className="icon">
            <img src={GlobleNode} alt="" />
          </div>
          <p>5000 Global Nodes</p>
        </div>
        <div className="countries-box">
          <div className="icon">
            <img src={HealthCare} alt="" />
          </div>
          <p>
            1800 Terabytes of Healthcare <br /> Data Secured
          </p>
        </div>
      </div>
      <div className="container health-care-info">
        <p>
          Healthcare is about more than just medical treatment.
          <br /> It is about ensuring data integrity and saving time.
          <br /> This helps save lives.
        </p>
        <h3 id="healthcare_btn">
          <span>
            R-DEE Connect<sup>TM</sup>
          </span>{" "}
          Transforms An <br /> Industry into a Network
        </h3>
        <p className="healtcare">
          Healthcare workflow reimagined. Handle sensitive healthcare
          communication
          <br /> and data with peace of mind and ease.
        </p>
      </div>
    </>
  );
};
