import React from "react";

import { Link } from "react-router-dom";
import profileImg from "../../assets/images/squan.jpg";
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

      <section className="container mt-3">
        <div className="row profileContainer">
          <img className="profilePic col-4" src={profileImg}></img>
          <div className="col-8 profile">
            <h2>SOPHIE QUAN</h2>
            <h3>
              <span className="pink">DESIGN</span>,{" "}
              <span className="green">CREATE</span> &amp;{" "}
              <span className="blue">BUILD</span>
            </h3>
            <p>
              Hey there! I’m Sophie a Web designer and developer. I love the
              idea of combining the beauty of the designs and the world of logic
              to make a simple, usable, and accessible websites and
              applications. I’m very excited to help business to design, create
              and build solid and scalable front-end products, provide the best
              user experience.
            </p>
            <p>
              Feel free to take a look at my most recent projects on my projects
              page and don’t hesitate to connect with me at
              sophiequan7@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
