import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-block">
        <p className="copyright">
          Copyright &copy; 2019 Build and designed by Rihab Al-yasiri. All
          rights reserved.
        </p>
        <div className="footer-bar">
          <a href="#" className="footer-link">
            Datanschutz
          </a>
          <a href="#" className="footer-link">
            Impressum
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
