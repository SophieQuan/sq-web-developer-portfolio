import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="col-lg-8 col-sm-12 d-flex justify-content-evenly navlinks">
      <NavLink to="/" activeclassname="active">
        <span>About</span>
      </NavLink>
      <NavLink to="/projects" activeclassname="active">
        <span>Projects</span>
      </NavLink>
      <NavLink to="/contact" activeclassname="active">
        <span>Contact</span>
      </NavLink>
    </div>
  );
};
export default Nav;
