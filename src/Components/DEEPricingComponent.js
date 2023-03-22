import React from "react";
import image from "../assets/image49.png";

export const DEEPricingComponent = () => {
  return (
    <section className="container dee-pricing-box">
      <h1>A Growing Platform</h1>
      <p>
        Seven additional modules (coming soon) that further SECURE, SPEED, and
        OPTIMIZE healthcare data-related productivity. Real-time healthcare
        curated content streaming, a secure marketplace for verified goods and
        services, smart-contract-based borderless transactions, clinical
        management , a full PACS system, data storage, and more. tools. R-DEE
        untethers the healthcare industry from the problems of trust
        (identification), authentication, obsolescence, and redundancy, all of
        which severely impact healthcare quality and delivery
        <br />
        <button className="pricing__btn">
          <a href="#pricing">Get R-DEE Pricing</a>
        </button>
      </p>
      <img src={image} alt="" style={{ width: "1156px", height: "765px" }} />
    </section>
  );
};
