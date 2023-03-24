import React from "react";
import iphone from "../assets/Group8228.png";

export const GetRDeeComponent = () => {
  return (
    <section>
      <section className="background-image">
        <section className="container get-r-dee-box">
          <section className="re-dee__container">
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
                "ahr-dee") is a Web3-powered, next-generation distributed global
                data network of thousands of nodes that help secure,
                authenticate, and deliver healthcare communication,
                productivity, and data quickly and easily.
              </p>
              <p>
                R-DEE features an unparalleled identity-proofing and tracking
                technology that produces cryptographically secured and unique
                Healthcare Digital-ID’s (HD-ID), ushering in a new era of health
                data security, portability, global access to essential services,
                and drastically improved efficiency.
              </p>
              <p>
                R-DEE’s modular structure allows users to use any part of the
                entire ecosystem. Leading with a data sharing and communication
                module, the R-DEE network includes access to an entire
                productivity suite allows users to do more in less time, all on
                one screen.
              </p>

              <p>
                A vendor-neutral technology stack and interoperability allow
                seamless integration for all healthcare professionals,
                practitioners, providers, and industry affiliates.
              </p>
              <p>
                And for patients, it features a standalone App that finally
                achieves what no other personal health record solution (PHR)
                could: full authentication and custodianship of one’s complete
                health record, secured and available at their fingertips, ready
                to access and share at anytime, anywhere in the world.
              </p>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};
