import React from "react";
import { ReactComponent as Logo } from "../assets/HeaderLogo.svg";
import { ReactComponent as AngleDown } from "../assets/downAngle.svg";
import FontAwesome from "react-fontawesome";

export const HeaderComponent = () => {
  return (
    <section className="header-container">
      <section className="container">
        <div className="header-list">
          <Logo />
          <div className="responsive-side-bar">
            <img
              src="https://img.icons8.com/external-others-inmotus-design/67/null/external-Menu-result-others-inmotus-design-5.png"
              alt=""
            />
          </div>
          <div className="header-list-items">
            <p>
              <a href="home" className="active-list-item">
                Home
              </a>
            </p>
            <p>
              <a href="home">
                Rediologex <AngleDown />
              </a>
            </p>
            <p>
              <a href="home">
                Explore <AngleDown />
              </a>
            </p>
            <p>
              <a href="home">
                FAQs <AngleDown />
              </a>
            </p>
            <button>Contact Us</button>
          </div>
        </div>
      </section>
    </section>
  );
};
