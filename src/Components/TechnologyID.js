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
              <h3>Your Data Forever</h3>
              <p>
                Next-generation blockchain technology means that your data
                remains 100% private and secure. As custodians of your data,
                only your or your organization, analyse, or archive the
                information.
              </p>
            </div>
            <div className="date-forever-border tech-box__background">
              <div className="biometric-icon">
                <EasyToUse />
              </div>
              <h3>Trust is Solved</h3>
              <p>
                No fuss, no guesswork, no fear of unauthorized access. The most
                advanced Identification, authentication, and user tracking
                (audit trails) technology makes data transmission, portability,
                and sharing a breeze.
              </p>
            </div>
          </div>
          <div className="date-forever-border tech-box__background">
            <div className="biometric-icon">
              <EasyToUse />
            </div>
            <h3>Your Teams Empowered</h3>
            <p>
              The R-DEE platform is designed to maximize efficiency and
              collaboration, so that your teams can work faster, smarter, and
              more effectively. Connect your teams with colleagues, experts,
              suppliers, technicians, administrators and the rest of the medical
              ecosystem.
            </p>
            <p>
              For patients, you have full custodianship of your healthcare
              records and effortlessly interact with all healthcare providers
              and access vital healthcare information live via R-DEE Stream
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
