import React from "react";
import Layout from "../components/Layout/Layout";
import {
  FaShieldAlt,
  FaUserSecret,
  FaLock,
  FaInfoCircle,
} from "react-icons/fa";
import "./Policy.css"; // Import the custom CSS file

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - BBC"}>
      <div className="policy-container">
        <h1 className="policy-title">Privacy Policy</h1>
        <div className="policy-content">
          <div className="policy-row">
            <div className="policy-section fade-in">
              <FaShieldAlt className="policy-icon" />
              <h2>Data Protection</h2>
              <p>
                At <strong>BhotBadeCoder</strong>, we prioritize your privacy
                and ensure that your data is protected. Our robust data
                protection measures keep your information safe from unauthorized
                access.
              </p>
            </div>
            <div className="policy-section fade-in">
              <FaUserSecret className="policy-icon" />
              <h2>User Privacy</h2>
              <p>
                We respect your privacy and are committed to safeguarding your
                personal information. We collect only the necessary data to
                provide our services and do not share it with third parties
                without your consent.
              </p>
            </div>
          </div>
          <div className="policy-row">
            <div className="policy-section fade-in">
              <FaLock className="policy-icon" />
              <h2>Secure Transactions</h2>
              <p>
                All transactions on our website are secured with SSL encryption
                to protect your payment details and personal information. We use
                industry-standard security measures to ensure a safe and secure
                experience.
              </p>
            </div>
            <div className="policy-section fade-in">
              <FaInfoCircle className="policy-icon" />
              <h2>Information Use</h2>
              <p>
                The information we collect is used to enhance your experience
                with our services. We use data analytics to improve our website
                functionality and provide you with better service and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
