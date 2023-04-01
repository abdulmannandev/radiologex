import React from "react";
// import { ReactComponent as Star } from "./Assets/star.svg";

function TestimonialItem({ companyName, founder, text, rating }) {
  return (
    <div className="testimonial">
      <h3 className="testimonial-company-name">{companyName}</h3>
      <p className="testimonial-founder">{founder} </p>
      <p className="testimonial-text">{text}</p>

      <div className={`ratings ratings-${rating}`}>
        <span className="ratings-item">&#9733;</span>
        <span className="ratings-item">&#9733;</span>
        <span className="ratings-item">&#9733;</span>
        <span className="ratings-item">&#9733;</span>
        <span className="ratings-item">&#9733;</span>
      </div>
    </div>
  );
}

export default TestimonialItem;
