import Data from "./Assets/favicon.png";
import trust from "./Assets/Trust.png";
import Empowered from "./Assets/Empowered.png";
import bgImage from "./Assets/bg-lines-1.png";

function AdvantageViaWeb3() {
  return (
    <>
      <section className="advance-via-web3-box">
        <div className="container web3-container">
          <div className="web3-info-box">
            <h1>The R-DEE Advantage Via Web3</h1>
            <p>
              Our data network features thousands of independent and segregated
              nodes, which provide unrivalled security, speed, and scale.
            </p>
            <p className="change-color">And it’s Better For The Planet*.</p>
            <p>
              *Distributed network via PoS/PoV technology utilizes up to 90%
              fewer energy resources than legacy data networks (centralized data
              infrastructure).
            </p>
            <button>Read More</button>
          </div>
          <div className="data-forever">
            <div className="date-forever-box">
              <div className="date-forever-border last-screen">
                <div className="biometric-icon">
                  <img src={Data} alt="" />
                </div>
                <h3>Your Data Forever</h3>
                <p>
                  Next-generation blockchain technology means that your data
                  remains 100% private and secure. As custodians of your data,
                  only your or your organization, analyse, or archive the
                  information.
                </p>
              </div>
              <div className="date-forever-border trust-solved">
                <div className="biometric-icon trust-bg">
                  <img src={trust} alt="" />
                </div>
                <h3>Trust is Solved</h3>
                <p>
                  No fuss, no guesswork, no fear of unauthorized access. The
                  most advanced Identification, authentication, and user
                  tracking (audit trails) technology makes data transmission,
                  portability, and sharing a breeze.
                </p>
              </div>
            </div>
            <div className="date-forever-border empowered-box">
              <div className="biometric-icon empowered-bg">
                <img src={Empowered} alt="" />
              </div>
              <h3>Your Teams Empowered</h3>
              <p>
                The R-DEE platform is designed to maximize efficiency and
                collaboration, so that your teams can work faster, smarter, and
                more effectively. Connect your teams with colleagues, experts,
                suppliers, technicians, administrators and the rest of the
                medical ecosystem.
              </p>
              <p>
                For patients, you have full custodianship of your healthcare
                records and effortlessly interact with all healthcare providers
                and access vital healthcare information live via R-DEE Stream
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="box">
        <img src={bgImage} alt="" className="bg-none" />
        <div id="patients" className="container box-text">
          <h4>Your Health. Your Data.</h4>
          <h1>
            <span>
              R-DEE Go<sup>TM</sup>
            </span>{" "}
            Gives Power To The Patient.
          </h1>
          <p>
            The first PHR gives full custodianship and control to the patient
            user. Your entire healthcare record is permanently secured and
            accessible anywhere globally from the palm of your hand.
          </p>
        </div>
      </section>
    </>
  );
}

export default AdvantageViaWeb3;
