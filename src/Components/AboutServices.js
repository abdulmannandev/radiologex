import React from "react";
import { ReactComponent as EasyToUse } from "../assets/easyToUse.svg";
import phoneImage from "../assets/iphone131.png";
import circleImage from "../assets/Ellipse45.png";

export const AboutServices = () => {
  return (
    <>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "150px",
          marginBottom: "150px",
        }}
        className="container responsive__services"
      >
        <section>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <EasyToUse />
            </div>
            <p>Easy To Use</p>
          </div>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <EasyToUse />
            </div>
            <p>Less Clutter</p>
          </div>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <EasyToUse />
            </div>
            <p>Unparalleled ID Technology</p>
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
            className="responsive__mobile-image"
            src={phoneImage}
            alt=""
            style={{
              position: "absolute",
              left: "52%",
              top: "275px",
              transform: "translate(-50%,-50%)",
            }}
          />
        </section>
        <section>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <EasyToUse />
            </div>
            <p>Compliment or Replace</p>
          </div>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <EasyToUse />
            </div>
            <p>Saving Time Saves Lives.</p>
          </div>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <EasyToUse />
            </div>
            <p>Seamless integration with any health IT platforms.</p>
          </div>
        </section>
      </section>
      <div className="container kyc-biometric-box">
        <div className="biometric-box">
          <div className="biometric-box-icon">
            <EasyToUse />
          </div>
          <p>
            Built-in KYC and a biometric technology that positively Identifies
            users while eliminating inefficient usernames and passwords
          </p>
        </div>
        <div className="biometric-box">
          <div className="biometric-box-icon">
            <EasyToUse />
          </div>
          <p>
            Built-in KYC and a biometric technology that positively Identifies
            users while eliminating inefficient usernames and passwords
          </p>
        </div>
      </div>
    </>
  );
};
