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
    <section className="pt-lg pb-lg getrdee-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-24">
            {/* // section header  */}
            <div className="section-head text-center section-head--left">
              <h4>
                Healthcare is about more than just medical treatment.
                <br /> It is about ensuring data integrity and saving time.
                <br /> This helps save lives.
              </h4>
              <h2 className="section-heading">
                <span className="text-green">
                  R-DEE Connect<sup>TM</sup>
                </span>{" "}
                Transforms An <br /> Industry into a Network
              </h2>
              <p className="section-text">
                Healthcare workflow reimagined. Handle sensitive healthcare
                communication and data with peace of mind and ease.
              </p>
            </div>

            <div className="row align-items-center">
              <div className="col-md-8">
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
              <div className="col-md-8">
                <div className="my-4 my-md-0">
                  <img className="img-fluid w-100" src={phoneImage} alt="" />
                </div>
              </div>
              <div className="col-md-8">
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
                    <p>lessClutter integration with any health IT platforms.</p>
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
                      Identifies users while eliminating inefficient usernames
                      and passwords
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
