import React from "react";
import Nav from "../Nav";

function Header() {
  // const { currentCategory, setCurrentCategory } = props;

  return (
    <header>
      <h2 className="col-lg-4 col-12">
        <a href="/sq-web-developer-portfolio" id="logo">
          Sophie<span>Quan</span>
        </a>
      </h2>
      <Nav></Nav>
    </header>
  );
}

export default Header;
