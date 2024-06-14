import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaAddressCard,
} from "react-icons/fa";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  //form function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !!");
    }
  };

  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const createStarsAndMoons = () => {
      const elements = [];
      for (let i = 0; i < 200; i++) {
        const span = document.createElement("span");
        if (Math.random() > 0.2) {
          span.textContent = "✦";
          span.className = "star";
        } else {
          span.textContent = "☾";
          span.className = "moon";
        }
        span.style.left = `${Math.random() * 100}%`;
        span.style.top = `${Math.random() * 100}%`;
        if (span.className === "star") {
          span.style.animationDuration = `${Math.random() * 20 + 10}s`;
          span.style.animationDelay = `${Math.random() * 20}s`;
        }
        elements.push(span);
      }
      elements.forEach((el) => background.appendChild(el));
    };

    createStarsAndMoons();

    const handleMouseMove = (e) => {
      const starsAndMoons = document.querySelectorAll(".background span");
      starsAndMoons.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const distance = Math.hypot(
          e.clientX - (rect.left + rect.width / 2),
          e.clientY - (rect.top + rect.height / 2)
        );
        const maxDistance = 150;
        const glowStrength = Math.max(0, (1 - distance / maxDistance) * 0.8);
        span.style.color = `rgba(255, 255, 255, ${0.2 + glowStrength})`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Layout title="Register Page - BBC">
      <div className="register-container">
        <div ref={backgroundRef} className="background"></div>
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="text-center text-white">Register</h2>

          <div className="form-group">
            <label htmlFor="name">
              <FaUser className="icon" /> Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="icon" /> Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <FaLock className="icon" /> Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              <FaPhone className="icon" /> Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">
              <FaAddressCard className="icon" /> Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              id="address"
              placeholder="Enter your address"
              required
            />
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
