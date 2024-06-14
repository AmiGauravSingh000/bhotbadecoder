import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({
  children,
  title = "BhotBadeCoder - A Website for Websites",
  description = "Website for Websites",
  keywords = "HTML, CSS, JavaScript, React, NodeJS, ExpressJS, MySQL",
  author = "GauravSingh",
}) => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>

        <Header />
        <main style={{ minHeight: "80vh" }}>
          <ToastContainer />
          {children}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Layout;
