import React from "react";
import Layout from "../components/Layout/Layout.js";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <Layout title={"Contact us - BBC"}>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div className="contact-details">
              <h2>Phone</h2>
              <p>+91 9053 454 159</p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-details">
              <h2>Email</h2>
              <p>bhotbadecoder@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-details">
              <h2>Address</h2>
              <p>Jhajjar, Haryana</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
