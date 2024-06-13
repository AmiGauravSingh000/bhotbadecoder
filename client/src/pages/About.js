import React from "react";
import Layout from "../components/Layout/Layout";
import { FaLaptopCode, FaCheck, FaCheckCircle } from "react-icons/fa";
import "./About.css"; // Import the custom CSS file

const About = () => {
  return (
    <Layout title={"About us - BBC"}>
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <div className="about-content">
          <div className="about-section">
            <FaLaptopCode className="about-icon" />
            <h2>Our Mission</h2>
            <p>
              At <strong>BhotBadeCoder</strong>, we specialize in creating
              stunning, user-friendly websites for clients at reasonable prices.
              Our mission is to empower businesses by providing top-notch web
              development services that help them succeed online.
            </p>
          </div>
          <div className="about-section">
            <FaCheck className="about-icon" />
            <h2>What We Offer</h2>
            <ul className="about-list">
              <li>
                <FaCheckCircle className="list-icon" /> Custom website design
                and development
              </li>
              <li>
                <FaCheckCircle className="list-icon" /> Responsive and
                mobile-friendly layouts
              </li>
              <li>
                <FaCheckCircle className="list-icon" />
                SEO optimization to boost your online presence
              </li>
              <li>
                <FaCheckCircle className="list-icon" /> E-commerce solutions for
                your business
              </li>
              <li>
                <FaCheckCircle className="list-icon" /> Ongoing support and
                maintenance
              </li>
            </ul>
          </div>
          <div className="about-section">
            <FaCheckCircle className="about-icon" />
            <h2>Why Choose Us?</h2>
            <p>
              We believe in delivering quality and value. Our team is dedicated
              to providing personalized service, ensuring each website we create
              meets the unique needs of our clients. Trust{" "}
              <strong>BhotBadeCoder</strong> to bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
