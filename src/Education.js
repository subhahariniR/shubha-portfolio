import React, { useState } from "react";
import { FaSearchPlus, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons

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
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const toggleZoom = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <section id="EDUCATION" className="p-10 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8 animate-text">
        <center>EDUCATION</center>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`education-card bg-gray-800 p-6 rounded-lg w-80 shadow-md transition duration-300 ease-in-out ${
              zoomedIndex === index ? "zoomed" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white mb-2">{edu.title}</h3>
              <FaSearchPlus
                className="text-gray-400 cursor-pointer hover:text-white"
                size={20}
                onClick={() => toggleZoom(index)}
              />
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
