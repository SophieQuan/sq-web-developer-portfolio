import React, { useState } from "react";
import projectImg1 from "../../assets/images/simply_scheduler.png";
import projectImg2 from "../../assets/images/today_weather.png";
import projectImg3 from "../../assets/images/note_taker.png";
import projectImg4 from "../../assets/images/budget_tracker.png";

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
    }
  ]);

  const currentprojects = projects.filter(project => project.window === window);

  return (
    <div className="container projectDiv">
      <div>
        {currentprojects.map((project, i) => (
          <div key={project.name} className="row col-12 projectBox m-3">
            <div className="col-lg-6 projectImg">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="col-lg-6">
              <h3>{project.name}</h3>
              <p>{project.descriptions}</p>
              <div className="col-12 btn d-flex justify-content-evenly">
                <button className="col-5">
                  <a href={project.github}>Link to Repo</a>
                </button>
                <button className="col-5">
                  <a href={project.deployedLink}>Deployed URL</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
