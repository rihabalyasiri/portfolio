import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div className="ui tabular menu">
      <Link to="/" className="item active">
        ME
      </Link>
      <Link to="/projects" className="item " >
        PROJECTS
      </Link>
      {/* <Link to="/contact" className="item ">CONTACT</Link> */}
    </div>
  );
};

export default NavBar;
