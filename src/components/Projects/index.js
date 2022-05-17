import React, { useState } from "react";
import projectImg1 from "../../assets/images/simply_scheduler.png";
import projectImg2 from "../../assets/images/today_weather.png";
import projectImg3 from "../../assets/images/note_taker.png";
import projectImg4 from "../../assets/images/budget_tracker.png";
import projectImg5 from "../../assets/images/no-fraud.png";
import projectImg6 from "../../assets/images/glide.png";

const ProjectList = ({ window }) => {
  const [projects] = useState([
    {
      name: "Simply Scheduler",
      descriptions:
        "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
      image: projectImg1,
      github: "https://github.com/SophieQuan/simply-scheduler",
      deployedLink: "https://github.com/SophieQuan/simply-scheduler"
    },
    {
      name: "Today Weather",
      descriptions:
        "A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. Using the OpenWeather to retrieve weather data for cities.",
      image: projectImg2,
      github: "https://github.com/SophieQuan/today-weather",
      deployedLink: "https://sophiequan.github.io/today-weather/"
    },
    {
      name: "Note Taker",
      descriptions:
        "An application can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
      image: projectImg3,
      github: "https://github.com/SophieQuan/note-taking-app",
      deployedLink: "https://notes-taker-express-app.herokuapp.com"
    },
    {
      name: "Budget Tracker",
      descriptions:
        "Updating an existing budget tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online.",
      image: projectImg4,
      github: "https://github.com/SophieQuan/budget_tracker_app_pwa",
      deployedLink: "https://your-budgettracker-app.herokuapp.com/"
    },
    {
      name: "No Fraud",
      descriptions:
        "A phone number validation gives you details about the type of number (landline or mobile), the carrier and GEO location.",
      image: projectImg5,
      github: "https://github.com/SophieQuan/no-fraud",
      deployedLink: "https://kennwg.github.io/no-fraud/"
    },
    {
      name: "Glide - Carpool app",
      descriptions:
        "A carpooling app that helps drivers and passengers select activities. Users can signup and login to create or request rides to carpool to their selected activity. Users are able to meet new people as well as reduce their traveling costs.",
      image: projectImg6,
      github: "https://github.com/SophieQuan/glide-carpool-app",
      deployedLink: "https://glide-carpool-app.herokuapp.com/"
    }
  ]);

  const currentprojects = projects.filter(project => project.window === window);

  return (
    <div className="container">
      <div className="projectDiv">
        {currentprojects.map((project, i) => (
          <div key={project.name} className="row projectBox m-3">
            <div className="col-lg-6 projectImg">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="col-lg-6">
              <h3>{project.name}</h3>
              <p>{project.descriptions}</p>
              <div className="col-12 btn d-flex justify-content-evenly">
                <a className="col-6 col-lg-5 m-1" href={project.github}>
                  Link to Repo
                </a>
                <a className="col-6 col-lg-5 m-1" href={project.deployedLink}>
                  Deployed URL
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
