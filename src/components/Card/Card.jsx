import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img src="../bewerbungsfoto.jpg" alt="foto of Rihab Al-yasiri" />
      </div>
      <div className="content">
        <p className="header">Rihab Al-yasiri</p>
        <div className="description">Front-end Developer</div>
      </div>
      <div className="extra content icon-wrapper">
        <a href="https://www.xing.com/profile/Rihab_Alyasiri/cv/" target="_blank">
          <i class="fab fa-xing"></i>
        </a>
        <a href="https://www.linkedin.com/in/rihab-alyasiri/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/rihabalyasiri/" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="mailto:rihab.al-yasiri@web.de">
          <i class="far fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
