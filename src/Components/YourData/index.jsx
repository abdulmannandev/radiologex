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
        <div className="row">
          <div className="col-md-24">
            {/* // section header  */}
            <div className="section-head text-center section-head--left">
              <h4 className="section-sub-heading text-secondary">
                Your Health. Your Data.
              </h4>
              <h2 className="section-heading">
                <span>
                  R-DEE Go<sup>TM</sup>
                </span>{" "}
                Gives Power To The Patient.
              </h2>
              <p className="section-text">
                The first PHR gives full custodianship and control to the
                patient user. Your entire healthcare record is permanently
                secured and accessible anywhere globally from the palm of your
                hand.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-15">
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="card data-card">
                  <div className="icon simple-bg">
                    <img src={SimpleToUse} alt="" />
                  </div>
                  <h3 className="heading-color">Simple To Use</h3>
                  <p>
                    Global users with access to healthcare who have the right to
                    control their health identity and records.
                  </p>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="card data-card">
                  <div className="icon technology-bg">
                    <img src={Technology} alt="" />
                  </div>
                  <h3 className="heading-color">Ugy</h3>
                  <p>
                    Built-in KYC and a biometric technology that positively and
                    continuously identifies users with a unique Healthcare
                    Digital-ID (HDID), while eliminating inefficient usernames
                    and passwords.
                  </p>
                </div>
              </div>
              <div className="col-md-24">
                <div className="card data-card">
                  <div className="icon permanent-bg">
                    <img src={permanent} alt="" />
                  </div>
                  <h3 className="heading-color">Permanent Health Record</h3>
                  <p>
                    Push-button automated requests and uploads from any R-DEE
                    Connect provider or anyone outside, including AI tools and
                    health trackers, make keeping and managing your entire
                    health records safe, secure, and available anywhere you go.
                    Your health, your data, your control.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <img
              className="responsive__mobile-image img-fluid w-100 mt-4 mt-md-0"
              src={phoneImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourData;
