import React from "react";
import image from "../assets/Vector6.png";
import mobileImage from "../assets/Background.png";
import appStore from "../assets/image36.png";
import googlePlay from "../assets/image37.png";
import webImage from "../assets/image38.png";
import screenImage from "../assets/Screen.png";
import { ReactComponent as FooterLogo } from "../assets/FooterLogo.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedIn.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
export const FooterComponent = () => {
  return (
    <section>
      <div className="footer-box-image">
        <div>
          <img src={image} alt="" className="bg-image" />
          <img src={mobileImage} alt="" className="mobile-image" />
          <img src={screenImage} alt="" className="mobile-image" />
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
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="footer-list-items">
              <h2>About Us</h2>
              <p>
                <a href="link">About Radiologex</a>
              </p>
              <p>
                <a href="link">Leadership</a>
              </p>
              <p>
                <a href="link">News/Press</a>
              </p>
            </div>
            <div className="footer-list-items">
              <h2>R-DEE</h2>
              <p>
                <a href="link">What Does R-DEE Do</a>
              </p>
              <p>
                <a href="link">Why R-DEE</a>
              </p>
              <p>
                <a href="link">How Do I Get R-DEE</a>
              </p>
              <p>
                <a href="link">Additional Features</a>
              </p>
              <p>
                <a href="link">All About The Network</a>
              </p>
            </div>
            <div className="footer-list-items">
              <h2>Resources</h2>
              <p>
                <a href="link">Downloads</a>
              </p>
              <p>
                <a href="link">Radiologex Media</a>
              </p>
            </div>
            <div className="footer-list-items">
              <h2>Explore</h2>
              <p>
                <a href="link">iOS Download</a>
              </p>
              <p>
                <a href="link">Android Download</a>
              </p>
              <p>
                <a href="link">Desktop Login Download</a>
              </p>
              <p>
                <a href="link">Global Network</a>
              </p>
            </div>
            <div className="footer-list-items">
              <h2>Contact Us</h2>
              <p>
                <a href="link">Contact Us</a>
              </p>
              <p>
                <a href="link">Launch@radiologex.com</a>
              </p>
              <p>
                <a href="link">+1 (844) 733-3277</a>
              </p>
            </div>
          </div>
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "40px",
              paddingBottom: "20px",
            }}
          >
            <p>
              Sitemap | Terms & Conditions | Privacy Policy | Cookies Policy |
              Certification
            </p>
            <div style={{ display: "flex" }}>
              <div className="social-icon">
                <Facebook />
              </div>
              <div className="social-icon">
                <LinkedIn />
              </div>
              <div className="social-icon">
                <Twitter />
              </div>
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