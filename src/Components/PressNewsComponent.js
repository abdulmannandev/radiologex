import React from "react";
import CardImage from "../assets/Rectangle205.png";
import CardImage2 from "../assets/Rectangle206.png";
import CardImage3 from "../assets/Rectangle207.png";
import CardImage4 from "../assets/Rectangle210.png";
import CardImage5 from "../assets/Rectangle210(2).png";
import CardImage6 from "../assets/Rectangle10.png";
import { ReactComponent as Logo } from "../assets/bottomLogo.svg";
import logo2 from "../assets/image32.png";
import logo3 from "../assets/image33.png";
import logo4 from "../assets/image34.png";

export const PressNewsComponent = () => {
  return (
    <section className="responsive-press-box">
      <div className="container">
        <div className="see-all-box">
          <h1>In The Press</h1>
          <button>View All</button>
        </div>
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginBottom: "100px",
          }}
        >
          <div className="news-cards">
            <div>
              <img src={CardImage} alt="" />
            </div>
            <div className="news-card-description">
              <h1>R-DEE News</h1>
              <p className="card-info">
                As talks between Radiologex and Peelaways Pakistan continue, one
                thing is clear: Radiologex is the company to watch.
              </p>
              <div className="read-more">
                <p>Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12px"
                  width="33px"
                  viewBox="0 0 32 16"
                  fill="none"
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z"
                    fill="#1A8BF3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="news-cards">
            <div>
              <img src={CardImage2} alt="" />
            </div>
            <div className="news-card-description">
              <h1>In The News</h1>
              <p className="card-info">
                Radiologex Provides Unparalleled Medical Security with the R-DEE
                Network
              </p>
              <div className="read-more">
                <p>Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12px"
                  width="33px"
                  viewBox="0 0 32 16"
                  fill="none"
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z"
                    fill="#1A8BF3"
                  />
                </svg>
              </div>
            </div>
          </div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12px"
                  width="33px"
                  viewBox="0 0 32 16"
                  fill="none"
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z"
                    fill="#1A8BF3"
                  />
                </svg>
              </div>
            </div>
          </div>

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12px"
                  width="33px"
                  viewBox="0 0 32 16"
                  fill="none"
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z"
                    fill="#1A8BF3"
                  />
                </svg>
              </div>
            </div>
          </div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12px"
                  width="33px"
                  viewBox="0 0 32 16"
                  fill="none"
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z"
                    fill="#1A8BF3"
                  />
                </svg>
              </div>
            </div>
          </div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12px"
                  width="33px"
                  viewBox="0 0 32 16"
                  fill="none"
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z"
                    fill="#1A8BF3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section
          className="press-news-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div className="established__box">
            <h1>
              A New Standard <br /> And Established Ones Too
            </h1>
            <p>
              R-DEE's technology has been tested and certified by the ONC of the
              US Department of Human and Health Services (HHS), and has attained
              ISO 9001 and 27001 Certifications for Quality Management Systems
              and Information Security Management. R-DEE integrates easily and
              seamlessly, exceeds HIPAA compliance and adheres to CDCA, HL7
              FHIR, and SOC2 standardizations.
            </p>
            <button>View Certifications</button>
          </div>
          <div className="logo-container">
            <div
              style={{
                display: "flex",
              }}
            >
              <div className="logos">
                <Logo />
              </div>
              <div style={{ display: "block" }}>
                <div className="logos2">
                  <img src={logo2} alt="" />
                </div>
                <div style={{ display: "flex" }}>
                  <div className="logos2">
                    <img src={logo3} alt="" />
                  </div>
                  <div className="logos2">
                    <img src={logo4} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <section style={{ display: "" }}>
              <div style={{ display: "flex" }}>
                <div className="logos2 not-show">
                  <img src={logo2} alt="" />
                </div>
                <div className="logos2">
                  <img src={logo2} alt="" />
                </div>
                <div className="logos2">
                  <img src={logo4} alt="" />
                </div>
                <div className="logos2">
                  <img src={logo3} alt="" />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="logos2 not-show">
                  <img src={logo2} alt="" />
                </div>
                <div className="logos2 not-show">
                  <img src={logo2} alt="" />
                </div>
                <div className="logos2">
                  <img src={logo2} alt="" />
                </div>
                <div className="logos2 not-show">
                  <img src={logo2} alt="" />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};
