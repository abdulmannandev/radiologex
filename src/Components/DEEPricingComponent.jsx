import React from "react";
import image from "../assets/image49.png";

function DEEPricingComponent() {
  return (
    <section className="dee-pricing-box">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <h1>A Growing Platform</h1>
            <p>
              Seven additional modules (coming soon) that further SECURE, SPEED,
              and OPTIMIZE healthcare data-related productivity. Meticulously
              chosen tools help eliminate most Health IT fragmentation pain
              points that exist today, helping to drastically reduce costs,
              increase workflow output, and save valuable time. Real-time
              healthcare curated content streaming, a secure marketplace for
              verified goods and services, smart-contract-based borderless
              transactions, clinical management, an entire PACS system, data
              storage, and more. tools. R-DEE untethers the healthcare industry
              from the problems of trust (identification), authentication,
              obsolescence, and redundancy, all of which severely impact
              healthcare quality and delivery.
              <br />
              <button className="pricing__btn">
                <a href="#pricing">Get R-DEE Pricing</a>
              </button>
            </p>
            <img src={image} alt="" className="w-100 img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DEEPricingComponent;
