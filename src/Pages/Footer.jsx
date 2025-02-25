import React from "react";
import "../components/CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">&copy; Liuren Wu 2025</p>
        <p className="footer-powered">Powered by <a href="https://academic.blog" target="_blank" rel="noopener noreferrer">academic.blog</a></p>
      </div>
    </footer>
  );
};

export default Footer;
