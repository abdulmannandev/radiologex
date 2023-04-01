import Data from "./Assets/favicon.png";
import trust from "./Assets/Trust.png";
import Empowered from "./Assets/Empowered.png";
import "./Web3Section.scss";

function Web3Section() {
  return (
    <section className="pt-lg pb-lg web3-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            {/* // section header  */}
            <div className="section-head px-0 section-head--left mb-4 mb-md-0">
              <h2 className="section-heading text-white">
                The R-DEE Advantage Via Web3
              </h2>
              <p className="section-text text-white">
                Our data network features thousands of independent and
                segregated nodes, which provide unrivalled security, speed, and
                scale.
              </p>

              <p className="text-green">And it’s Better For The Planet*.</p>
              <p className="text-white">
                *Distributed network via PoS/PoV technology utilizes up to 90%
                fewer energy resources than legacy data networks (centralized
                data infrastructure).
              </p>
              <a className="btn btn-secondary" href="#">
                Read More
              </a>
            </div>
          </div>
          <div className="col-md-14">
            <div className="row">
              <div className="col-md-12 mb-4 mb-md-4">
                <div className="custom-card first">
                  <div className="card-inner">
                    <div className="biometric-icon">
                      <img className="" src={Data} alt="" />
                    </div>
                    <h3>Your Data Forever</h3>
                    <p>
                      Next-generation blockchain technology means that your data
                      remains 100% private and secure. As custodians of your
                      data, only your or your organization, analyse, or archive
                      the information.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-4 mb-md-4">
                <div className="custom-card second">
                  <div className="card-inner">
                    <div className="biometric-icon trust-bg">
                      <img className="" src={trust} alt="" />
                    </div>
                    <h3>Trust is Solved</h3>
                    <p>
                      No fuss, no guesswork, no fear of unauthorized access. The
                      most advanced Identification, authentication, and user
                      tracking (audit trails) technology makes data
                      transmission, portability, and sharing a breeze.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-24 mb-4 mb-md-4">
                <div className="custom-card third">
                  <div className="card-inner">
                    <div className="biometric-icon empowered-bg">
                      <img className="" src={Empowered} alt="" />
                    </div>
                    <h3>Your Teams Empowered</h3>
                    <p>
                      The R-DEE platform is designed to maximize efficiency and
                      collaboration, so that your teams can work faster,
                      smarter, and more effectively. Connect your teams with
                      colleagues, experts, suppliers, technicians,
                      administrators and the rest of the medical ecosystem.
                    </p>
                    <p>
                      For patients, you have full custodianship of your
                      healthcare records and effortlessly interact with all
                      healthcare providers and access vital healthcare
                      information live via R-DEE Stream
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Web3Section;
