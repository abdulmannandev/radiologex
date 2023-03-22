import React from "react";
import EasyToUse from "../assets/Mask group (1).png";
import lessClutter from "../assets/Mask group (7).png";
import technology from "../assets/Mask group (3).png";
import Audit from "../assets/Mask group (4).png";
import Secure from "../assets/Mask group (5).png";
import Seamless from "../assets/Mask group (7).png";
import Healthcare from "../assets/image 50.png";
import tools from "../assets/doctor.png";
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
              <img src={EasyToUse} alt="" />
            </div>
            <p>Easy to use</p>
          </div>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <img src={lessClutter} alt="" />
            </div>
            <p>Less clutter</p>
          </div>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <img src={technology} alt="" />
            </div>
            <p>Unparalleled ID technology</p>
          </div>
        </section>
        <section className="circle-bg-image">
          <img
            className="responsive__mobile-image"
            src={phoneImage}
            alt=""
            style={{ width: "536px", height: "768px" }}
          />
        </section>
        <section>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <img src={Audit} alt="" />
            </div>
            <p>
              Audit Trails- Track all <br /> data access.
            </p>
          </div>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <img src={Secure} alt="" />
            </div>
            <p>Secure social media-type features</p>
          </div>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <img src={Seamless} alt="" />
            </div>
            <p>Seamless integration with any health IT platforms.</p>
          </div>
        </section>
      </section>
      <div className="container kyc-biometric-box">
        <div className="biometric-box">
          <div className="biometric-box-icon">
            <img src={Healthcare} alt="" />
          </div>
          <p>
            Built-in KYC and a biometric technology that positively Identifies
            users while eliminating inefficient usernames and passwords
          </p>
        </div>
        <div className="biometric-box">
          <div className="biometric-box-icon">
            <img src={tools} alt="" />
          </div>
          <p>
            AI tools help reduce costly data errors and workflow by up to 90%*.
          </p>
        </div>
      </div>
    </>
  );
};
