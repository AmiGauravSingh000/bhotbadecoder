import React from "react";
import Layout from "../components/Layout/Layout";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Pagenotfound.css"; // Import custom CSS for additional styling

const Pagenotfound = () => {
  return (
    <Layout title={"Page Not Found - BBC"}>
      <div className="container text-center mt-5">
        <FaExclamationTriangle className="text-warning" size="7em" />
        <h1 className="display-4 mt-3">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-primary mt-3">
          Go Back Home
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
