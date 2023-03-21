import React from "react";
import { ReactComponent as Countires } from "../assets/countires.svg";
import { ReactComponent as GlobleNode } from "../assets/globleNodes.svg";
import { ReactComponent as HealthCare } from "../assets/HealthCare.svg";

export const ModulesLunchComponent = () => {
  return (
    <>
      <div className="container meetUp-container">
        <h1>
          Meet The First Two Launch Modules.
          <br /> <span>Available 6-1-2023:</span>
        </h1>
        <p>
          R-DEE Connect empowers the industry. <br /> R-DEE Go enfranchises
          patients.
        </p>
      </div>
      <div className="banner">BLAZING FORWARD. BLAZING FAST. REAL TIME</div>
      <div className="card-box container">
        <div className="countries-box">
          <div className="icon">
            <Countires />
          </div>
          <p>66 Countries</p>
        </div>
        <div className="countries-box">
          <div className="icon">
            <GlobleNode />
          </div>
          <p>5000 Global Nodes</p>
        </div>
        <div className="countries-box">
          <div className="icon">
            <HealthCare />
          </div>
          <p>
            1800 Terabytes of Healthcare <br /> Data Secured
          </p>
        </div>
      </div>
      <div className="container health-care-info">
        <p>
          Healthcare is about more than just medical treatment. It is about
          ensuring data integrity and saving time. This helps save lives.
        </p>
        <h3>R-DEE Connect Transforms An Industry into a Network</h3>
        <p>
          Healthcare workflow reimagined. Handle sensitive healthcare
          communication and data with peace of mind and ease.
        </p>
      </div>
    </>
  );
};
