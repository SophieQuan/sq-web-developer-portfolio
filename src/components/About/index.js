import React from "react";

import { Link } from "react-router-dom";
function About() {
  return (
    <main>
      <div className="hero ">
        <section className="intro container">
          <h2>
            Hello ! I'm <span>Sophie</span> Quan
          </h2>
          <p>
            I'm a Web Designer and Developer. Checkout my latest web compoments.
          </p>
          <button className="arrowBtn">
            <Link to="/projects">
              <i className="arrow down"></i>
            </Link>
          </button>
        </section>
        {/* <section className="hero-img">
          <div className="overlay"></div>
        </section> */}
      </div>
    </main>
  );
}

export default About;
