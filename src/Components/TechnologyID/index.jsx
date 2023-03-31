import phoneImage from "./Assets/iphone132.png";
import SimpleToUse from "./Assets/SimpleToUse.png";
import Technology from "./Assets/technology.png";
import permanent from "./Assets/permanent.png";

import "./TechnologyID.scss";

function TechnologyID() {
  return (
    <section
      className="container tech-box"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6">
              <div className="custom-card tech-box__background responsive-width-box">
                <div className="biometric-icon simple-bg">
                  <img src={SimpleToUse} alt="" />
                </div>
                <h3 className="heading-color">Simple To Use</h3>
                <p>
                  Global users with access to healthcare who have the right to
                  control their health identity and records.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-card tech-box__background responsive-width-box">
                <div className="biometric-icon technology-bg">
                  <img src={Technology} alt="" />
                </div>
                <h3 className="heading-color">Ugy</h3>
                <p>
                  Built-in KYC and a biometric technology that positively and
                  continuously identifies users with a unique Healthcare
                  Digital-ID (HDID), while eliminating inefficient usernames and
                  passwords.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="custom-card tech-box__background">
                <div className="biometric-icon permanent-bg">
                  <img src={permanent} alt="" />
                </div>
                <h3 className="heading-color">Permanent Health Record</h3>
                <p>
                  Push-button automated requests and uploads from any R-DEE
                  Connect provider or anyone outside, including AI tools and
                  health trackers, make keeping and managing your entire health
                  records safe, secure, and available anywhere you go. Your
                  health, your data, your control.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img
            className="responsive__mobile-image img-fluid w-100"
            src={phoneImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default TechnologyID;
