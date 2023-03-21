import React from "react";
import phoneImage from "../assets/iphone131.png";
import circleImage from "../assets/Ellipse45.png";
import { ReactComponent as EasyToUse } from "../assets/easyToUse.svg";

export const TechnologyID = () => {
  return (
    <section
      className="container tech-box"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <section>
        <div className="data-forever">
          <div className="date-forever-box">
            <div className="date-forever-border tech-box__background">
              <div className="biometric-icon">
                <EasyToUse />
              </div>
              <h3>Simple To Use</h3>
              <p>
                Built to be used easily by all possible 2 billion-plus global
                users with access to healthcare who have the right to control
                their health identity and records.
              </p>
            </div>
            <div className="date-forever-border tech-box__background">
              <div className="biometric-icon">
                <EasyToUse />
              </div>
              <h3>Unparalleled ID Technology</h3>
              <p>
                Built-in KYC and a biometric techno- logy that positively
                Identifies users while eliminating inefficient usernames and
                passwords.
              </p>
            </div>
          </div>
          <div className="date-forever-border tech-box__background tech-box__background2">
            <div className="biometric-icon">
              <EasyToUse />
            </div>
            <h3>Permanent Health Record.</h3>
            <p>
              Next-gen distributed network provides redundancy and backup to all
              <br />
              stored health records.
            </p>
          </div>
        </div>
      </section>
      <section className="circle-bg-image">
        <img
          style={{ position: "relative" }}
          src={circleImage}
          alt=""
          className="responsive-image"
        />
        <img
          src={phoneImage}
          alt=""
          style={{
            position: "absolute",
            left: "52%",
            top: "275px",
            transform: "translate(-50%,-50%)",
          }}
          className="responsive__mobile-image"
        />
      </section>
    </section>
  );
};
