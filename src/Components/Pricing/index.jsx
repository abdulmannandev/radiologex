import "./Pricing.scss";

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        {/* // section header  */}
        <div className="section-head px-0 section-head--left">
          <h2 className="section-heading">
            R-DEE Pricing Plans for Healthcare <br />
            <span className="professional">Professionals</span>
          </h2>
          <p className="section-text">
            Choose the plan that works for you or your organizational type
          </p>
        </div>
      </div>
      <div className="container price-plan-box">
        <div className="row cards">
          <div className="col-md-6 mb-4">
            <div className="price-plan-card">
              <p className="payment-status">FREE</p>
              <h3>R-DEE Free</h3>
              <p className="note">(for all Global healthcare users)</p>
              <ul>
                <li>KYC+Passwordless logins</li>
                <li>Use from Any Device</li>
                <li>R-DEE Connect</li>
                <li>R-DEE Marketplace*</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="price-plan-card clinical-plan">
              <p className="payment-status">$50/MO PER USER</p>
              <h3>R-DEE Clinical</h3>
              <p className="note">
                (for medical practices, Nurses, Doctors, Clinicians, Frontline,
                Academics, Orgs)
              </p>
              <ul>
                <li>KYC+Passwordless logins</li>
                <li>Use from Any Device</li>
                <li>R-DEE Connect</li>
                <li>R-DEE Marketplace*</li>
                <li>R-DEE Pay</li>
                <li>R-DEE Expert</li>
                <li>R-DEE Stream</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="price-plan-card vendor-plan">
              <p className="payment-status">$100/MO PER USER</p>
              <h3>R-DEE PRO</h3>
              <p className="note">
                (for Vendors/Suppliers/Service and Support Experts)
              </p>
              <ul>
                <li>KYC+Passwordless logins</li>
                <li>Use from Any Device</li>
                <li>R-DEE Connect</li>
                <li>R-DEE Marketplace*</li>
                <li>R-DEE Pay</li>
                <li>R-DEE Expert</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="price-plan-card request-plan">
              <p className="payment-status">BY REQUEST</p>
              <h3>R-DEE PRO</h3>
              <p className="note">
                (for medical/health systems, radiology, depts, hospitals, large
                organizations)
              </p>
              <ul>
                <li>KYC+Passwordless logins</li>
                <li>Use from Any Device</li>
                <li>All 8 POWERFUL Modules</li>
                <li>Including R-DEE Scan and Vault</li>
              </ul>
              <button className="contact-btn">Contact Us For Pricing</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container price-plan-patients">
        {/* // section header  */}
        <div className="section-head px-0 section-head--left">
          <h2 className="section-heading">
            R-DEE Pricing Plans for <br />{" "}
            <span className="professional">Patients</span>
          </h2>
          <p className="section-text">
            Choose the plan that works for you or your family
          </p>
        </div>

        <div className="row patients-card">
          <div className="col-md-8 mb-4">
            <div className="price-plan-card patient-card">
              <p className="payment-status">FREE</p>
              <h3>R-DEE Free</h3>
              <p className="note"></p>
              <ul>
                <li>KYC+Passwordless logins</li>
                <li>No usernames/passwordless</li>
                <li>Simple to use UI</li>
                <li>Simple to use UI</li>
                <li>5GB included</li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 mb-4">
            <div className="price-plan-card patient-card premium-plan">
              <p className="payment-status">$7/MO PER USER</p>
              <h3>R-DEE Premium</h3>
              <p className="note"></p>
              <ul>
                <li>KYC+Passwordless logins</li>
                <li>No usernames/passwordless</li>
                <li>Simple to use UI</li>
                <li>Permanent Healthcare Record Storage</li>
                <li>Integrated ChatGPT AI language model</li>
                <li>300GB included</li>
                <li>5 Additional Health Trackers</li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 mb-4">
            <div className="price-plan-card patient-card">
              <p className="payment-status">$20/MO per user</p>
              <h3>R-DEE Family</h3>
              <p className="note"></p>
              <ul>
                <li>KYC+Passwordless logins</li>
                <li>No usernames/passwordless</li>
                <li>Simple to use UI</li>
                <li>Permanent Healthcare Record Storage</li>
                <li>Integrated ChatGPT AI language model</li>
                <li>2TB included</li>
                <li>10 Additional Health Trackers</li>
                <li>5 Family Members</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
