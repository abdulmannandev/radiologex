import React from "react";

import { ReactComponent as HeaderLogo } from "./../../assets/logo-header.svg";
import { ReactComponent as AngleDown } from "./../../assets/icon-downangle.svg";

export const HeaderComponent = () => {
  return (
    <section className="header-container">
      <section className="container">
        <div className="header-list">
          <HeaderLogo />
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
                {" "}
                Explore <AngleDown />{" "}
              </a>
            </p>
            <p>
              <a>
                {" "}
                FAQs <AngleDown />{" "}
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
export default HeaderComponent;
