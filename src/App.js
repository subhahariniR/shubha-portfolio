import React from "react";
import "./App.css";
import Blog from "./blog.js";
import WhatIDo from "./WhatIDo.js";
import Education from "./Education.js";
import Footer from "./Footer.js";
import Bar from "./Bar";
import Project from "./Projects.js"; 
import AboutMe from "./About.js"; 

function App() {
  return (
    <div className="App">
      <Blog />
      <WhatIDo/>
      <Education />
      <Project/>
      <AboutMe/>
      <Bar />       
      <Footer />
    </div>
  );
}

export default App;
