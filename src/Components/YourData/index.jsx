import bgImage from "./Assets/bg-lines-1.png";
import phoneImage from "./Assets/iphone132.png";
import SimpleToUse from "./Assets/SimpleToUse.png";
import Technology from "./Assets/technology.png";
import permanent from "./Assets/permanent.png";

import "./YourData.scss";

function YourData() {
  return (
    <section className="pt-lg pb-normal your-data">
      <img src={bgImage} alt="" className="bg-image" />
      <div className="container">
        {/* // section header  */}
        <div className="section-head text-center">
          <h4 className="section-sub-heading text-secondary">
            Your Health. Your Data.
          </h4>
          <br />
          <h2 className="section-heading">
            R-DEE&nbsp;
            <span className="text-blue-l">
              Go <sup>TM</sup>
            </span>
            <br />
            Gives Power To The Patient.
          </h2>
          <br />
          <p className="section-text">
            The first PHR gives full custodianship and control to the patient
            user. <br />
            Your entire healthcare record is permanently secured and accessible
            anywhere globally from the palm of your hand.
          </p>
          <br />
          <br />
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-lg-13 col-md-24 col-24 order-2 order-md-2 order-lg-1">
            <div className="row">
              <div className="col-md-12 mb-3 mt-4 mb-md-0">
                <div className="card data-card">
                  <div className="icon simple-bg">
                    <img src={SimpleToUse} alt="" />
                  </div>
                  <h3 className="heading-color">Simple To Use</h3>
                  <p>
                    A Ul/UX design for simplicity and ease of use for all global
                    users. Multi-language support and a simple registration
                    process allow users to take full control of their entire
                    health records in minutes.
                  </p>
                </div>
              </div>
              <div className="col-md-12 mb-3 mt-4 mb-md-0">
                <div className="card data-card">
                  <div className="icon technology-bg">
                    <img src={Technology} alt="" />
                  </div>
                  <h3 className="heading-color">Unparalleled ID Technology</h3>
                  <p>
                    Built-in KYC and a biometric technology that positively and
                    continuously identifies users with a unique Healthcare
                    Digital-ID (HDID), while eliminating inefficient usernames
                    and passwords.
                  </p>
                </div>
              </div>
              <div className="col-md-24 mb-3 mt-4 mb-md-0">
                <div className="card data-card">
                  <div className="icon permanent-bg">
                    <img src={permanent} alt="" />
                  </div>
                  <h3 className="heading-color">Permanent Health Record</h3>
                  <p>
                    Secure auto-uploads make managing and controlling your
                    entire health record a breeze. Al tools and health trackers
                    make it easy to stay organized, informed, and in control of
                    access and sharing of your entire health record anywhere, at
                    any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-11 col-md-18 col-24 order-1 order-md-1 order-lg-2">
            <img
              className="img-fluid w-100 mt-4 mb-md-5 mb-lg-0"
              src={phoneImage}
              alt=""
              data-sal="zoom-in"
              data-sal-delay="1"
              data-sal-duration="700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourData;
