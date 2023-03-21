import React from "react";
import { ReactComponent as Stars } from "../assets/star.svg";

export const TestimonialsComponent = () => {
  return (
    <section className="testimonial-box">
      <div className="container">
        <h1>Testimonials</h1>
        <div className="testimonial-user-info">
          <h3>Trusona</h3>
          <p className="founder">ORI EISEN, Founder & CEO</p>
          <p className="user-testimonial">
            Trusona’s partnership with Radiologex meets the healthcare
            industry’s strict standards for security, providing passwordless
            authentication and identity proofing within the platform, mitigating
            the eight most common attack vectors. Together, Radiologex and
            Trusona offer healthcare professionals the ability to establish
            fast, secure communications channels and data transmissions from
            anywhere — and without the need for a password.”
          </p>
          <Stars className="stars" />
          <Stars className="stars" />
          <Stars className="stars" />
          <Stars className="stars" />
          <Stars className="stars" />
          <div className="btns">
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
