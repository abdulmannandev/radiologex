import React from "react";

import { ReactComponent as Arrow } from "./Assets/Arrow.svg";
import CardImage from "./Assets/sec-img-1.png";
import CardImage2 from "./Assets/sec-img-2.png";
import CardImage3 from "./Assets/sec-img-3.png";
import CardImage4 from "./Assets/sec-img-5.png";
import CardImage5 from "./Assets/sec-img-4.png";
import CardImage6 from "./Assets/sec-img-6.png";
import sectionLogos from "./Assets/section-logos.png";

import "./PressNewsComponent.scss";

function PressNewsComponent() {
  return (
    <section className="pt-lg pb-nomral press-box-section">
      <div className="container">
        {/* // section header  */}
        <div className="section-head text-center text-md-start px-0 mb-4">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-heading">In The Press</h2>
            </div>
            <div className="col-md-12">
              {/* justify-content-center justify-content-md-end */}
              <div className="text-end d-none d-md-flex">
                <button className="btn btn-secondary">View All</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-24 mb-4">
            <div className="news-cards">
              <div>
                <img src={CardImage} alt="" />
              </div>
              <div className="news-card-description">
                <h1>R-DEE News</h1>
                <p className="card-info">
                  As talks between Radiologex and Peelaways Pakistan continue,
                  one thing is clear: Radiologex is the company to watch.
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-24 mb-4">
            <div className="news-cards">
              <div>
                <img src={CardImage2} alt="" />
              </div>
              <div className="news-card-description">
                <h1>In The News</h1>
                <p className="card-info">
                  Radiologex Provides Unparalleled Medical Security with the
                  R-DEE Network
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-24 mb-4">
            <div className="news-cards">
              <div>
                <img src={CardImage3} alt="" />
              </div>
              <div className="news-card-description">
                <h1>In The News</h1>
                <p className="card-info">
                  This blockchain-based project offers a suite of tools that
                  tackle the widespr...
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-24 mb-4">
            <div className="news-cards">
              <div>
                <img src={CardImage4} alt="" />
              </div>
              <div className="news-card-description">
                <h1>Press Release</h1>
                <p className="card-info">
                  With the increased digitalization of healthcare, R-DEE™ by
                  Radiologex provides a revolutionary......
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-24 mb-4">
            <div className="news-cards">
              <div>
                <img src={CardImage5} alt="" />
              </div>
              <div className="news-card-description">
                <h1>In The News</h1>
                <p className="card-info">
                  The Global Healthcare sector, in the wake of a pandemic and
                  suffering frequent ransomware.....
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-24 mb-4">
            <div className="news-cards">
              <div>
                <img src={CardImage6} alt="" />
              </div>
              <div className="news-card-description">
                <h1>In The News</h1>
                <p className="card-info">
                  A blockchain-based healthcare platform is ramping up security
                  even further, ensuring that patient.....
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="col-24">
            <div className="text-end d-flex justify-content-center d-md-none mb-5">
              <button className="btn btn-secondary">View All</button>
            </div>
          </div>
        </div>
        <section
          className="press-news-section"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-13">
              {/* // section header  */}
              <div className="section-head px-0">
                <h2 className="section-heading mb-4">
                  A New Standard <br /> And Established Ones Too
                </h2>
                <p className="section-text">
                  R-DEE's technology has been tested and certified by the ONC of
                  the US Department of Human and Health Services (HHS), and has
                  attained ISO 9001 and 27001 Certifications for Quality
                  Management Systems and Information Security Management. R-DEE
                  integrates easily and seamlessly, exceeds HIPAA compliance and
                  adheres to CDCA, HL7 FHIR, and SOC2 standardizations.
                </p>
                <button className="btn btn-secondary">
                  View Certifications
                </button>
              </div>
            </div>
            <div className="col-md-11">
              <img className="img-fluid w-100" src={sectionLogos} alt="" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default PressNewsComponent;
