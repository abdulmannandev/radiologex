import React from "react";
import image from "./Assets/sec-image-123.jpg";

function DEEPricingComponent() {
  return (
    <section className="pt-lg pb-lg dee-pricing-box">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-24 col-md-24">
            {/* // section header  */}
            <div className="section-head text-center section-head--left">
              <h2 className="section-heading">A Growing Platformials</h2>
              <p className="section-text">
                Seven additional modules (coming soon) that further SECURE,
                SPEED, and OPTIMIZE healthcare data-related productivity.
                Meticulously chosen tools help eliminate most Health IT
                fragmentation pain points that exist today, helping to
                drastically reduce costs, increase workflow output, and save
                valuable time. Real-time healthcare curated content streaming, a
                secure marketplace for verified goods and services,
                smart-contract-based borderless transactions, clinical
                management, an entire PACS system, data storage, and more.
                tools. R-DEE untethers the healthcare industry from the problems
                of trust (identification), authentication, obsolescence, and
                redundancy, all of which severely impact healthcare quality and
                delivery.
              </p>
              <br />
              <br />
              <a className="btn btn-secondary" href="#pricing">
                Get R-DEE Pricing
              </a>
            </div>

            <img src={image} alt="" className="w-100 img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DEEPricingComponent;
