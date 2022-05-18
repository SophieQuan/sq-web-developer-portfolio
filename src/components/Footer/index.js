import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p>⭐️⭐️⭐️ Connect with me via </p>
      <a href="https://github.com/SophieQuan">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/sophiequan7/">
        <FaLinkedin />
      </a>
      <a href="https://stackoverflow.com/users/17649427">
        <BsStackOverflow /> ⭐️⭐️⭐️
      </a>
    </footer>
  );
}
export default Footer;
