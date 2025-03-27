import React, { useState, useEffect } from "react";
import "./App.css";
import Blog from "./blog.js";
import WhatIDo from "./WhatIDo.js";
import Education from "./Education.js";
import Footer from "./Footer.js";
import Bar from "./Bar";
import Project from "./Projects.js"; 
import AboutMe from "./About.js"; 

function App() {
  // State to manage loading
  const [loading, setLoading] = useState(true);

  // Show loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="App">
      {loading ? (
        // Loading screen
        <div className="loading-screen">
          <h1> Explore My Portfolio.. </h1>
        </div>
      ) : (
        // Main portfolio content
        <>
          <Blog />
          <WhatIDo/>
          <Project/>
          <AboutMe/>
          <Education />
          <Bar />       
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
