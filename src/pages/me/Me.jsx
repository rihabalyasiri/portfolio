import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import './Me.css';
import SkillList from '../../components/Skill/SkillList';

const Me = () => {
  return (
    <div className="body">
      <NavBar/>
      <div className="landing-page">
        <Card />
        <About />
        <div className="empty-div"></div>
        <SkillList />
      </div>
      <Footer />
    </div>
  );
};

export default Me;
