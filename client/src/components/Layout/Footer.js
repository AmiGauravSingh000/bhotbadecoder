import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-light p-3">
      <div className="d-flex justify-content-center flex-column align-items-center mb-3">
        <h4 className="text-center mb-0">
          All Rights Reserved &copy; BhotBadeCoder(BBC)
        </h4>
        {/* <h4 className="mb-3">BBC</h4> */}
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/about" className="text-light mx-2">
          About
        </Link>
        <span>|</span>
        <Link to="/contact" className="text-light mx-2">
          Contact
        </Link>
        <span>|</span>
        <Link to="/policy" className="text-light mx-2">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
