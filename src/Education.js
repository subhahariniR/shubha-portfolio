import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Education.css"; // Importing the CSS file

const educationData = [
  {
    title: "Computer Science and Engineering",
    institution: "Anna University",
    duration: "2022 - 2026",
    subjects: "Key Subjects: Data Structures, Web Development, AI & ML, Databases",
  },
  {
    title: "High School",
    institution: "Lions Matric Higher Secondary School",
    duration: "2020 - 2022",
    subjects: "Subjects: Mathematics, Physics, Chemistry, Computer Science",
  },
];

function Education() {
  return (
    <section id="EDUCATION" className="education-container">
      {/* Title added here */}
      <h1 className="education-title">My Educational Background</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="education-heading">{edu.title}</h3>
            <p className="education-institution"><strong>{edu.institution}</strong></p>

            {/* Removed "View on Map" */}
            <p className="education-duration">{edu.duration}</p>
            <p className="education-subjects">{edu.subjects}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
