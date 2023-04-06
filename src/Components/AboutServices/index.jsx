import EasyToUse from "./Assets/icon-about-1.png";
import technology from "./Assets/icon-about-2.png";
import Audit from "./Assets/icon-about-3.png";
import lessClutter from "./Assets/icon-about-4.png";
import Healthcare from "./Assets/healthcare.png";
import Secure from "./Assets/icon-users.png";
import tools from "./Assets/doctor.png";
import phoneImage from "./Assets/iphone131.png";

// import styles from './ComponentName.module.scss';
import "./AboutServices.scss";

function AboutServices() {
  return (
    <section className="pt-5 pb-lg getrdee-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-24">
            {/* // section header  */}
            <div className="section-head text-center">
              <h2 className="section-heading">
                R-DEE&nbsp;
                <span className="text-pink">
                  Connect<sup>TM</sup>
                </span>
                <br />
                Transforms An Industry into a Network.
              </h2>
              <br />
              <p className="section-text">
                Healthcare workflow reimagined. <br />
                Handle sensitive healthcare communication <br />
                and data with peace of mind and ease.
              </p>
              <br />
            </div>

            <div className="row align-items-center justify-content-center">
              <div className="col-lg-7 col-md-12 order-lg-1 order-md-2">
                <div className="feature-box-wrapper">
                  <div className="feature-box">
                    <div className="icon">
                      <img src={EasyToUse} alt="" />
                    </div>
                    <p>Easy to use</p>
                  </div>
                  <div className="feature-box">
                    <div className="icon">
                      <img src={lessClutter} alt="" />
                    </div>
                    <p>Less clutter</p>
                  </div>
                  <div className="feature-box">
                    <div className="icon">
                      <img src={technology} alt="" />
                    </div>
                    <p>Unparalleled ID technology</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-md-14 order-lg-2 order-md-1">
                <div
                  className="my-4 my-md-4 my-lg-0"
                  data-sal="zoom-in"
                  data-sal-delay="1"
                  data-sal-duration="700"
                >
                  <img className="img-fluid w-100" src={phoneImage} alt="" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12 order-lg-3 order-md-3">
                <div className="feature-box-wrapper">
                  <div className="feature-box">
                    <div className="icon">
                      <img src={Audit} alt="" />
                    </div>
                    <p>
                      Audit Trails- Track all <br /> data access.
                    </p>
                  </div>
                  <div className="feature-box">
                    <div className="icon">
                      <img src={Secure} alt="" />
                    </div>
                    <p>Secure social media-type features</p>
                  </div>
                  <div className="feature-box">
                    <div className="icon">
                      <img src={lessClutter} alt="" />
                    </div>
                    <p>Seamless integration with any health IT platforms.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <div className="feature-box-wrapper">
                  <div className="feature-box">
                    <div className="icon">
                      <img src={Healthcare} alt="" />
                    </div>
                    <p>
                      Built-in KYC and a biometric technology that positively
                      Identifies users with a unique Healthcare Digital-ID
                      (HDID),while eliminating inefficient usernames and
                      passwords.
                    </p>
                  </div>
                  <div className="feature-box">
                    <div className="icon">
                      <img src={tools} alt="" />
                    </div>
                    <p>
                      AI tools help reduce costly data errors and workflow by up
                      to 90%*
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutServices;
