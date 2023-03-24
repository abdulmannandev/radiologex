import React from "react";
import { ReactComponent as Logo } from "../assets/HeaderLogo.svg";
import { ReactComponent as AngleDown } from "../assets/downAngle.svg";

export const HeaderComponent = () => {
  return (
    <section className="header-container">
      <section className="container1">
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
              <a className="active-list-item">Home</a>
            </p>
            <p>
              <a>
                Rediologex <AngleDown />
              </a>
            </p>
            <p>
              <a>
                Explore <AngleDown />
              </a>
            </p>
            <p>
              <a>
                FAQs <AngleDown />
              </a>
            </p>
            <button>
              <a href="launch@radiologex.com" target="_blank">
                Contact Us
              </a>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};
