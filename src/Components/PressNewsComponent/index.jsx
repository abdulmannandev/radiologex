import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from "./Assets/Arrow.svg";
// import CardImage from "./Assets/sec-img-1.png";
import CardImage2 from "./Assets/sec-img-2.png";
import CardImage3 from "./Assets/sec-img-3.png";
import CardImage4 from "./Assets/sec-img-5.png";
import CardImage5 from "./Assets/sec-img-4.png";
import CardImage6 from "./Assets/sec-img-6.png";
import comp1Logo from "./Assets/comp-1.png";
import comp2Logo from "./Assets/comp-2.png";
import comp3Logo from "./Assets/comp-3.png";
import comp4Logo from "./Assets/comp-4.png";

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
              <div className="text-end d-none d-md-flex justify-content-end">
                <button className="btn btn-secondary">View All</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center"> 
          <div className="col-lg-12 col-md-12 col-24 mb-4">
            <div className="news-cards">
              <div>
                <img src={CardImage2} alt="" />
              </div>
              <div className="news-card-description">
                <h3 className="news-title">In The News</h3>
                <p className="news-text">
                  Radiologex Provides Unparalleled Medical Security with the
                  R-DEE Network
                </p>
                {/* <Link to="#" className="read-more">
                  Read More <Arrow />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-24 mb-4">
            <div className="news-cards">
              <div>
                <img src={CardImage3} alt="" />
              </div>
              <div className="news-card-description">
                <h3 className="news-title">In The News</h3>
                <p className="news-text">
                  This blockchain-based project offers a suite of tools that
                  tackle the widespr...
                </p>
                {/* <Link to="#" className="read-more">
                  Read More <Arrow />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-24 mb-4">
            <div className="news-cards">
              <div>
                <img src={CardImage4} alt="" />
              </div>
              <div className="news-card-description">
                <h3 className="news-title">Press Release</h3>
                <p className="news-text">
                  With the increased digitalization of healthcare, R-DEE™ by
                  Radiologex provides a revolutionary......
                </p>
                {/* <Link to="#" className="read-more">
                  Read More <Arrow />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-24 mb-4">
            <div className="news-cards">
              <div>
                <img src={CardImage5} alt="" />
              </div>
              <div className="news-card-description">
                <h3 className="news-title">In The News</h3>
                <p className="news-text">
                  The Global Healthcare sector, in the wake of a pandemic and
                  suffering frequent ransomware.....
                </p>
                {/* <Link to="#" className="read-more">
                  Read More <Arrow />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-24 mb-4">
            <div className="news-cards">
              <div>
                <img src={CardImage6} alt="" />
              </div>
              <div className="news-card-description">
                <h3 className="news-title">In The News</h3>
                <p className="news-text">
                  A blockchain-based healthcare platform is ramping up security
                  even further, ensuring that patient.....
                </p>
                {/* <Link to="#" className="read-more">
                  Read More <Arrow />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-24">
            <div className="text-end d-flex justify-content-center d-md-none mb-5">
              <button className="btn btn-secondary">View All</button>
            </div>
          </div>
        </div>
        <section className="pt-normal pb-normal press-news-section">
          <div className="row align-items-center">
            <div className="col-md-24">
              {/* // section header  */}
              <div className="section-head text-center">
                <h2 className="section-heading mb-4">
                  A New Standard. <br /> And Established Ones, Too.
                </h2>
                <p className="section-text">
                  R-DEE's technology has been tested and certified by the ONC of
                  the US Department of Human and Health Services (HHS), and has
                  attained ISO 9001 and 27001 Certifications for Quality
                  Management Systems and Information Security Management. R-DEE
                  integrates easily and seamlessly, exceeds HIPAA compliance and
                  adheres to CDCA, HL7 FHIR, and SOC2 standardizations.
                </p>
              </div>
            </div>
            <div className="col-md-24">
              <div className="row">
                <div className="col-md-6 my-2">
                  <div className="logo-wrapper">
                    <img
                      className="img-fluid w-100"
                      src={comp1Logo}
                      alt=""
                      data-sal="zoom-up"
                      data-sal-delay="1"
                      data-sal-duration="700"
                    />
                  </div>
                </div>
                <div className="col-md-6 my-2">
                  <div className="logo-wrapper">
                    <img
                      className="img-fluid w-100"
                      src={comp2Logo}
                      alt=""
                      data-sal="zoom-up"
                      data-sal-delay="1"
                      data-sal-duration="700"
                    />
                  </div>
                </div>
                <div className="col-md-6 my-2">
                  <div className="logo-wrapper">
                    <img
                      className="img-fluid w-100"
                      src={comp3Logo}
                      alt=""
                      data-sal="zoom-up"
                      data-sal-delay="1"
                      data-sal-duration="700"
                    />
                  </div>
                </div>
                <div className="col-md-6 my-2">
                  <div className="logo-wrapper">
                    <img
                      className="img-fluid w-100"
                      src={comp4Logo}
                      alt=""
                      data-sal="zoom-up"
                      data-sal-delay="1"
                      data-sal-duration="700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default PressNewsComponent;
