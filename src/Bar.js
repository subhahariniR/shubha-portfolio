import React, { useState, useEffect } from "react";
import "./Bar.css"; // Ensure you have this file

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
];

const Bar = () => {
  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));

  useEffect(() => {
    setTimeout(() => {
      setAnimatedLevels(skills.map(skill => skill.level));
    }, 500);
  }, []);

  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="circle-skills-container">
        {skills.map((skill, index) => (
          <div key={skill.name} className="circle-skill">
            <svg viewBox="0 0 100 100" className="progress-circle">
              <circle className="bg-circle" cx="50" cy="50" r="40" />
              <circle
                className="progress"
                cx="50" cy="50" r="40"
                style={{
                  strokeDashoffset: `calc(251 - (251 * ${animatedLevels[index]}) / 100)`,
                  transition: "stroke-dashoffset 2s ease-in-out",
                }}
              />
              <text x="50" y="55" textAnchor="middle" className="percentage-text">
                {animatedLevels[index]}%
              </text>
            </svg>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;
