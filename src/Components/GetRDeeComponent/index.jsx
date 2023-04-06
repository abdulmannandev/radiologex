import React from "react";

import MaskIcon from "./../../assets/MaskIcon.png";
import MaskIcon2 from "./../../assets/MaskIcon2.png";
import bgImage from "./Assets/Vector3.png";
import iphone from "./Assets/GetRDeeComponent.png";
import "./GetRDeeComponent.scss";

function GetRDeeComponent() {
  return (
    <section
      className="pt-lg pb-lg getrdee-sec"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-24 order-2 order-lg-1">
            <div data-sal="zoom-in" data-sal-delay="1" data-sal-duration="700">
              <img className="sec-img img-fluid w-100 px-3" src={iphone} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-md-24 order-1 order-lg-2">
            <div className="text-content">
              {/* // section header  */}
              <div className="section-head px-0">
                <h2 className="section-heading">
                  <span className="text-main">GET R-DEE.</span> <br />
                  Meet the R-DEE Network.
                </h2>
              </div>
              <p>
                The Radiologex Digital Encryption Environment (R-DEE, pronounced
                "ahr-dee") is a Web3-powered, next-generation distributed global
                data network of thousands of nodes that help secure,
                authenticate, and deliver healthcare communication,
                productivity, and data quickly and easily.
              </p>
              <p>
                R-DEE features an unparalleled identity-proofing and tracking
                technology that produces cryptographically secured and unique
                Healthcare Digital-ID’s (HD-ID), ushering in a new era of health
                data security, portability, global access to essential services,
                and drastically improved efficiency.
              </p>
              <p>
                R-DEE’s modular structure allows users to use any part of the
                entire ecosystem. Leading with a data sharing and communication
                module, the R-DEE network includes access to an entire
                productivity suite allows users to do more in less time, all on
                one screen.
              </p>

              <p>
                A vendor-neutral technology stack and interoperability allow
                seamless integration for all healthcare professionals,
                practitioners, providers, and industry affiliates.
              </p>
              <p>
                And for patients, it features a standalone App that finally
                achieves what no other personal health record solution (PHR)
                could: full authentication and custodianship of one’s complete
                health record, secured and available at their fingertips, ready
                to access and share at anytime, anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cards-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="card-container">
                <div className="icon">
                  <img src={MaskIcon} alt="" />
                </div>
                <p>
                  A full productivity suite for the 70 million plus
                  healthcare-affiliated professionals, practitioners, and
                  affiliates.
                </p>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="card-container">
                <div className="icon">
                  <img src={MaskIcon2} alt="" />
                </div>
                <p>
                  An easy-to-use and secure PHR for the 2 billion plus people
                  globally who have access to some form of healthcare, one that
                  empowers them to own and maintain their complete health
                  records, enabling the critically important ability to access
                  and share on-demand, anywhere they go, thus helping patients
                  and providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetRDeeComponent;
