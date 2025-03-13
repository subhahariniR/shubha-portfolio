import React, { useState } from "react";
import "./Bar.css"; // Ensure you have this file

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
];

const Bar = () => {
  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));

  const handleClick = (index) => {
    const newLevels = [...animatedLevels];
    newLevels[index] = skills[index].level;
    setAnimatedLevels(newLevels);
  };

  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="circle-skills-container">
        {skills.map((skill, index) => (
          <div key={skill.name} className="circle-skill" onClick={() => handleClick(index)}>
            <svg viewBox="0 0 100 100" className="progress-circle">
              {/* Background Circle */}
              <circle className="bg-circle" cx="50" cy="50" r="40" />
              {/* Animated Progress Circle */}
              <circle
                className="progress"
                cx="50"
                cy="50"
                r="40"
                style={{
                  strokeDashoffset: `calc(251 - (251 * ${animatedLevels[index]}) / 100)`,
                  transition: "stroke-dashoffset 2s ease-in-out",
                }}
              />
              {/* Percentage at the Center */}
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
