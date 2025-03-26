import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Only importing the map marker icon

const educationData = [
  {
    title: "Computer Science and Engineering",
    institution: "Anna University",
    duration: "2022 - 2026",
    subjects: "Key Subjects: Data Structures, Web Development, AI & ML, Databases",
    mapUrl: "https://maps.app.goo.gl/23FaeD4DtMB5sMiq9"
  },
  {
    title: "High School",
    institution: "Lions Matric Higher Secondary School",
    duration: "2020 - 2022",
    subjects: "Subjects: Mathematics, Physics, Chemistry, Computer Science",
    mapUrl: "https://maps.app.goo.gl/3K6Y1c7tYy7xtzYq6"
  },
];

function Education() {
  return (
    <section id="EDUCATION" className="p-10 bg-gray-900 text-white min-h-screen">
  <h2 className="text-4xl font-bold text-center mb-8 animate-text">
    <center>EDUCATION</center>
  </h2>
  <div className="flex flex-wrap justify-center gap-6">
    {educationData.map((edu, index) => (
      <div
        key={index}
        className="education-card bg-gray-800 p-6 rounded-lg w-80 shadow-md transition duration-300 ease-in-out"
      >
        <div className="flex justify-between items-center">
          {/* ✅ Changed text color to black */}
          <h3 className="text-xl font-semibold text-black mb-2">{edu.title}</h3>
        </div>
        <p className="text-gray-300"><strong>{edu.institution}</strong></p>

        {/* Location Row */}
        <p className="text-gray-400 flex items-center gap-2 mt-1">
          <FaMapMarkerAlt className="text-red-400" /> {edu.location}
        </p>

        <p className="text-gray-400">{edu.duration}</p>
        <p className="text-gray-400 mt-2">{edu.subjects}</p>
      </div>
    ))}
  </div>
</section>

    
  );
}

export default Education;
