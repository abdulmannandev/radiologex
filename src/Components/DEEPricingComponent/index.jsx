import React from "react";
import image from "./Assets/sec-image-123.png";
// import imageNew from "./Assets/sec-image-new.png";
import "./DEEPricingComponent.scss";

function DEEPricingComponent() {
  return (
    <section className="pt-normal pb-0 dee-pricing-box">
      <div className="container">
        {/* <div className="container container mx-auto mr-0 ml-0 px-0"> */}
        <div className="row align-items-end justify-content-center">
          <div className="col-lg-12 col-md-12">
            {/* // section header  */}
            <div className="section-head px-0 pb-normal">
              <h2 className="section-heading">
                A Growing Platform. <br /> One Solution.
              </h2>
              <br />
              <p className="lead text-pink">
                R-DEE uses blockchain technology and AI to improve healthcare
                deliveryvia the first all-in-one health IT ecosystem.
              </p>
              <br />
              <p className="section-text">
                Seven additional modules (coming soon) further SECURE,SPEED and
                OPTIMIZE healthcare data-related productivity. Real-time
                healthcare curated content streaming, a marketplace of verified
                medical goods and services, smart-contract-basedborderless
                transactions, clinical management, a completePACS system, data
                storage, transaction settlement, and more
              </p>
              <p className="section-text mb-0">
                R-DEE untethers the healthcare industry from the problems of
                trust (identification), authentication, obsolescence, and
                redundancy, all of which severely impact healthcare quality and
                delivery.
              </p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <img
              src={image}
              alt=""
              className="w-100 img-fluid px-3"
              data-sal="slide-up"
              data-sal-delay="1"
              data-sal-duration="700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DEEPricingComponent;
