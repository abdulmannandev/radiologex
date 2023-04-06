import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

import appStore from "./Assets/image36.png";
import googlePlay from "./Assets/image37.png";
import webImage from "./Assets/image38.png";
import image from "./Assets/Vector6.png";
import mobileImage from "./Assets/Background.png";
import wavesImg from "./Assets/wave.png";

import { ReactComponent as FooterLogo } from "./../../assets/logo-footer.svg";
// import IconYoutube from "./../../assets/IconYoutube.svg";
import { ReactComponent as IconLinkedIn } from "./../../assets/linkedin.svg";
import { ReactComponent as IconTwitter } from "./../../assets/twitter.svg";
// import { ReactComponent as IconVimeo } from "./../../assets/vimeo.svg";
import { ReactComponent as IconInstagram } from "./../../assets/icon-instagram.svg";

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="container-fluid px-0 footer-top">
        <img src={wavesImg} alt="" className="w-100" />
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-10 order-2 order-md-1">
              <img src={mobileImage} alt="" className="w-100" />
            </div>
            <div className="col-md-14 order-1 order-md-2">
              <div className="available-device pb-5 pt-5 pt-md-0">
                {/* // section header  */}
                <div className="section-head px-0">
                  <h2 className="section-heading text-white">
                    Available on Any Device
                  </h2>
                </div>
                <div className="store-links row flex-wrap g-2">
                  <div className="col-md-8 col-sm-8 col-12">
                    <a href="#" target="_blank" className="d-block mt-3">
                      <img className="icon" src={appStore} alt="" />
                    </a>
                  </div>
                  <div className="col-md-8 col-sm-8 col-12">
                    <a href="#" target="_blank" className="d-block mt-3">
                      <img className="icon" src={googlePlay} alt="" />
                    </a>
                  </div>
                  <div className="col-md-8 col-sm-8 col-12">
                    <a href="#" target="_blank" className="d-block mt-3">
                      <img className="icon" src={webImage} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <br /> <br /> <br />
            </div>
          </div>
        </div>
        {/* <img src={image} alt="" className="bg-image" /> */}
      </div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-24 col-24">
              <div className="d-flex justify-content-center py-5">
                <Link className="footer-logo d-block" to="/">
                  <FooterLogo />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg col-md-8 col-sm-8 col-xs-12 col-12">
              <div className="footer-box mb-5 mb-md-5">
                <h2 className="footer-heading">About Us</h2>
                <ul className="footer-links">
                  <li>
                    <a className="footer-link">About Radiologex</a>
                  </li>
                  <li>
                    <a className="footer-link">Leadership</a>
                  </li>
                  <li>
                    <a className="footer-link">News/Press</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg col-md-8 col-sm-8 col-xs-12 col-12">
              <div className="footer-box mb-5 mb-md-5">
                <h2 className="footer-heading">R-DEE</h2>
                <ul className="footer-links">
                  <li>
                    <a className="footer-link">What Does R-DEE Do</a>
                  </li>
                  <li>
                    <a className="footer-link">Why R-DEE</a>
                  </li>
                  <li>
                    <a className="footer-link">How Do I Get R-DEE</a>
                  </li>
                  <li>
                    <a className="footer-link">Additional Features</a>
                  </li>
                  <li>
                    <a className="footer-link">All About The Network</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg col-md-8 col-sm-8 col-xs-12 col-12">
              <div className="footer-box mb-5 mb-md-5">
                <h2 className="footer-heading">Resources</h2>
                <ul className="footer-links">
                  <li>
                    <a className="footer-link">Downloads</a>
                  </li>
                  <li>
                    <a className="footer-link">Radiologex Media</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg col-md-8 col-sm-8 col-xs-12 col-12">
              <div className="footer-box mb-5 mb-md-5">
                <h2 className="footer-heading">Explore</h2>
                <ul className="footer-links">
                  <li>
                    <a className="footer-link">iOS Download</a>
                  </li>
                  <li>
                    <a className="footer-link">Android Download</a>
                  </li>
                  <li>
                    <a className="footer-link">Desktop Login Download</a>
                  </li>
                  <li>
                    <a className="footer-link">Global Network</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg col-md-8 col-sm-8 col-xs-12 col-12">
              <div className="footer-box mb-5 mb-md-5">
                <h2 className="footer-heading">Contact Us</h2>
                <ul className="footer-links">
                  <li>
                    <a className="footer-link">Contact Us</a>
                  </li>
                  <li>
                    <a className="footer-link">Launch@radiologex.com</a>
                  </li>
                  <li>
                    <a className="footer-link">+1 (844) 733-3277</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-24">
              <ul className="bottom-links d-flex flex-wrap justify-content-center justify-content-lg-start list-inline pl-0">
                <li className="list-inline-item">
                  <a href="#">Sitemap</a>
                </li>
                <li className="list-inline-item"> | </li>
                <li className="list-inline-item">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="list-inline-item"> | </li>
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item"> | </li>
                <li className="list-inline-item">
                  <a href="#">Cookies Policy</a>
                </li>
                <li className="list-inline-item"> | </li>
                <li className="list-inline-item">
                  <a href="#">Certification</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-12 col-md-24">
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-end">
                <a
                  href="https://www.youtube.com/c/radiologex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#4aea87"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/radiologex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-icon">
                    <IconLinkedIn />
                  </div>
                </a>
                <a
                  href="https://twitter.com/radiologex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-icon">
                    <IconTwitter />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/getrdee/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-icon">
                    <IconInstagram />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <hr className="line mt-4" />
          <p className="copy-write">
            © 2018-2023 Radiologex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
