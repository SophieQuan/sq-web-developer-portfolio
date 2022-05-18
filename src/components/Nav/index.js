import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="col-lg-7 col-12 d-flex justify-content-evenly navlinks">
      <NavLink to="/sq-web-developer-portfolio" activeclassname="active">
        <span>About</span>
      </NavLink>
      <NavLink to="/projects" activeclassname="active">
        <span>Projects</span>
      </NavLink>
      <NavLink to="/contact" activeclassname="active">
        <span>Contact</span>
      </NavLink>
      <NavLink to="/resume" activeclassname="active">
        <span>Resume</span>
      </NavLink>
    </div>
  );
};
export default Nav;
