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
    <>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "125px",
          marginBottom: "90px",
        }}
        className="container responsive__services"
      >
        <section>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <img src={EasyToUse} alt="" />
            </div>
            <p>Easy to use</p>
          </div>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <img src={lessClutter} alt="" />
            </div>
            <p>Less clutter</p>
          </div>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <img src={technology} alt="" />
            </div>
            <p>Unparalleled ID technology</p>
          </div>
        </section>
        <section className="circle-bg-image">
          <img
            className="responsive__mobile-image"
            src={phoneImage}
            alt=""
            style={{ width: "536px", height: "768px" }}
          />
        </section>
        <section>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <img src={Audit} alt="" />
            </div>
            <p>
              Audit Trails- Track all <br /> data access.
            </p>
          </div>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <img src={Secure} alt="" />
            </div>
            <p>Secure social media-type features</p>
          </div>
          <div className="about-services-box">
            <div className="easy-to-use-icon">
              <img src={lessClutter} alt="" />
            </div>
            <p>lessClutter integration with any health IT platforms.</p>
          </div>
        </section>
      </section>
      <div className="container kyc-biometric-box">
        <div className="biometric-box">
          <div className="biometric-box-icon">
            <img src={Healthcare} alt="" />
          </div>
          <p>
            Built-in KYC and a biometric technology that positively Identifies
            users while eliminating inefficient usernames and passwords
          </p>
        </div>
        <div className="biometric-box">
          <div className="biometric-box-icon">
            <img src={tools} alt="" />
          </div>
          <p>
            AI tools help reduce costly data errors and workflow by up to 90%*
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutServices;
