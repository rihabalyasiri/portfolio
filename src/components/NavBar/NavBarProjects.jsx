import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBarProjects = props => {
  return (
    <div className="ui tabular menu">
      <Link to="/" className="item ">
        ME
      </Link>
      <Link to="/projects" className="item active" >
        PROJECTS
      </Link>
      {/* <Link to="/contact" className="item ">CONTACT</Link> */}
    </div>
  );
};

export default NavBarProjects;