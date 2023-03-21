import React from "react";
import user from "../assets/Ellipse42(1).png";
import user2 from "../assets/Ellipse42.png";
import user3 from "../assets/Ellipse43.png";
import image1 from "../assets/Rectangle165.png";
import image2 from "../assets/Rectangle165(1).png";
import image3 from "../assets/Rectangle166.png";
import image4 from "../assets/Rectangle167.png";
import iphone from "../assets/iphone131.png";

export const GetRDeeComponent = () => {
  return (
    <section>
      <section className=" background-image">
        <section className="container get-r-dee-box">
          <section className="re-dee__container">
            <section className="responsive-box">
              <div style={{ position: "relative", paddingBottom: "20px" }}>
                <img
                  src={user}
                  alt=""
                  style={{
                    position: "absolute",
                    left: "0",
                  }}
                />
                <img src={image1} alt="" />
              </div>
              <div style={{ display: "flex", paddingBottom: "20px" }}>
                <div>
                  <img src={user2} alt="" />
                  <br />
                  <img src={image2} alt="" />
                </div>
                <div style={{ paddingLeft: "25px" }}>
                  <img src={image3} alt="" />
                  <br />
                  <img src={user3} alt="" />
                  <img src={image4} alt="" style={{ paddingLeft: "20px" }} />
                </div>
              </div>
              <img src={image1} alt="" />
            </section>
            <div className="iphone-image">
              <img src={iphone} alt="" />
            </div>
          </section>
          <section className="description">
            <div className="description-box">
              <h3>
                <span>GET R-DEE.</span> Meet the R-DEE Network.
              </h3>
              <p>
                The Radiologex Digital Encryption Environment (R-DEE, pronounced
                "ahr-dee") is a Web3-powered, next-generation private and
                distributed global data network of thousands of nodes that help
                deliver protected healthcare communication, productivity, and
                data, quickly and easily.
              </p>
              <p>
                R-DEE’s modular structure allows users to use any part of the
                entire ecosystem. A vendor-neutral technology stack and
                interoperability allow seamless integration. and use for all
                <span className="change-color2">
                  {" "}
                  healthcare professionals,
                </span>{" "}
                including all practitioners, providers, and industry affiliates.
              </p>
              <p>
                And for <span className="change-color2">patients,</span> it
                features a standalone App that finally achieves what no other
                PHR could: Full custodianship and portability of one’s complete
                health record, secured, and available at their fingertips at any
                time.
              </p>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};
