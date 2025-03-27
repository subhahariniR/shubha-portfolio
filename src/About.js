import React from "react";
import "./About.css"; // Ensure About.css is correctly linked

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Hi! I'm <strong>Shubhaharini</strong>, a passionate web developer with a love for building 
          creative and interactive web applications.
        </p>
        <p className="about-details">
          I specialize in front-end technologies like <strong>React.js, JavaScript, HTML, and CSS</strong>. 
          I enjoy solving problems, designing clean UI, and making the web a better place.
        </p>
        <p className="about-goal">
          My goal is to keep learning, improving, and contributing to meaningful projects!
        </p>

        {/* Contact Me Button */}
        <a href="mailto:jeevikaravi03@gmail.com" className="contact-button">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default About;
