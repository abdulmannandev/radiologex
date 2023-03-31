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
      <section>
        <div className="data-forever responsive-font">
          <div className="date-forever-box">
            <div className="date-forever-border tech-box__background responsive-width-box">
              <div className="biometric-icon simple-bg">
                <img src={SimpleToUse} alt="" />
              </div>
              <h3 className="heading-color">Simple To Use</h3>
              <p>
                Global users with access to healthcare who have the right to
                control their health identity and records.
              </p>
            </div>
            <div className="date-forever-border tech-box__background responsive-width-box">
              <div className="biometric-icon technology-bg">
                <img src={Technology} alt="" />
              </div>
              <h3 className="heading-color">Unparalleled ID Technology</h3>
              <p>
                Built-in KYC and a biometric technology that positively and
                continuously identifies users with a unique Healthcare
                Digital-ID (HDID), while eliminating inefficient usernames and
                passwords.
              </p>
            </div>
          </div>
          <div className="date-forever-border tech-box__background tech-box__background2 responsive-width-box2">
            <div className="biometric-icon permanent-bg">
              <img src={permanent} alt="" />
            </div>
            <h3 className="heading-color">Permanent Health Record</h3>
            <p>
              Push-button automated requests and uploads from any R-DEE Connect
              provider or anyone outside, including AI tools and health
              trackers, make keeping and managing your entire health records
              safe, secure, and available anywhere you go. Your health, your
              data, your control.
            </p>
          </div>
        </div>
      </section>
      <section className="circle-bg-image">
        <img
          src={phoneImage}
          alt=""
          style={{
            width: "536px",
            height: "770.37px",
          }}
          className="responsive__mobile-image"
        />
      </section>
    </section>
  );
}

export default TechnologyID;
