import React from "react";
import "./Projects.css"; // Import external CSS file for styling

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and CSS animations.",
    link: "https://subhahariniR.github.io/shubha-portfolio",
  },
  {
    title: "E-commerce Store",
    description: "A full-stack MERN e-commerce application with authentication.",
    link: "https://your-ecommerce-link.com",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    link: "https://your-weather-app.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      {/* Centered Heading */}
      <h2 className="projects-title">My Projects</h2>

      {/* Project Cards - Displayed One by One */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="projects-card">
            {/* Underline effect added */}
            <h3 className="projects-card-title">
              <u>{project.title}</u>
            </h3>
            <p className="projects-card-desc">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-card-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
