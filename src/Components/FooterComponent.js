import React from "react";
import image from "../assets/Vector6.png";
import mobileImage from "../assets/Background.png";
import appStore from "../assets/image36.png";
import googlePlay from "../assets/image37.png";
import webImage from "../assets/image38.png";
import { ReactComponent as FooterLogo } from "../assets/FooterLogo.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedIn.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Vimeo } from "../assets/vimeo.svg";
import { ReactComponent as Insta } from "../assets/insta.svg";
export const FooterComponent = () => {
  return (
    <section>
      <div className="footer-box-image">
        <div>
          <div className="responsive-display">
            <img src={image} alt="" className="bg-image" />
            <img src={mobileImage} alt="" className="mobile-image" />
          </div>
          <div>
            <div className="available-device">
              <h1>
                Available on Any <br /> Device
              </h1>
              <div>
                <img src={appStore} alt="" />
                <img src={googlePlay} alt="" />
                <img src={webImage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer__box">
            <FooterLogo />
          </div>
          <div
            className="container footer-box"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap ",
            }}
          >
            <div className="footer-list-items">
              <h2>About Us</h2>
              <p>
                <a>About Radiologex</a>
              </p>
              <p>
                <a>Leadership</a>
              </p>
              <p>
                <a>News/Press</a>
              </p>
            </div>
            <div className="footer-list-items">
              <h2>R-DEE</h2>
              <p>
                <a>What Does R-DEE Do</a>
              </p>
              <p>
                <a>Why R-DEE</a>
              </p>
              <p>
                <a>How Do I Get R-DEE</a>
              </p>
              <p>
                <a>Additional Features</a>
              </p>
              <p>
                <a>All About The Network</a>
              </p>
            </div>
            <div className="footer-list-items">
              <h2>Resources</h2>
              <p>
                <a>Downloads</a>
              </p>
              <p>
                <a>Radiologex Media</a>
              </p>
            </div>
            <div className="footer-list-items">
              <h2>Explore</h2>
              <p>
                <a>iOS Download</a>
              </p>
              <p>
                <a>Android Download</a>
              </p>
              <p>
                <a>Desktop Login Download</a>
              </p>
              <p>
                <a>Global Network</a>
              </p>
            </div>
            <div className="footer-list-items">
              <h2>Contact Us</h2>
              <p>
                <a>Contact Us</a>
              </p>
              <p>
                <a>Launch@radiologex.com</a>
              </p>
              <p>
                <a>+1 (844) 733-3277</a>
              </p>
            </div>
          </div>
          <div
            className="container copywrite-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "45px",
              paddingBottom: "20px",
            }}
          >
            <p
              style={{ color: "#c3bebe", fontWeight: "200", fontSize: "16px" }}
              className="Terms-Conditions"
            >
              Sitemap | Terms & Conditions | Privacy Policy | Cookies Policy |
              Certification
            </p>
            <div style={{ display: "flex" }}>
              <a
                href="https://www.linkedin.com/company/radiologex"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon">
                  <LinkedIn />
                </div>
              </a>
              <a
                href="https://twitter.com/radiologex"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon">
                  <Twitter />
                </div>
              </a>
              <a
                href="https://vimeo.com/getrdee"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon">
                  <Vimeo />
                </div>
              </a>
              <a
                href="https://www.instagram.com/getrdee/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon">
                  <Insta />
                </div>
              </a>
            </div>
          </div>
          <hr className="line" />
          <p className="copy-write">
            © 2018-2023 Radiologex. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
