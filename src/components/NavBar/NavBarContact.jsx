import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBarContact = props => {
  return (
    <div className="ui tabular menu">
      <Link to="/" className="item ">
        ME
      </Link>
      <Link to="/projects" className="item " >
        PROJECTS
      </Link>
      <Link to="/contact" className="item active">CONTACT</Link>
    </div>
  );
};

export default NavBarContact;