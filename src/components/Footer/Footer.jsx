import React from "react";
import "./Footer.css";
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-block">
        <p className="copyright">
          Copyright &copy; 2019 Build and designed by Rihab Al-yasiri. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
