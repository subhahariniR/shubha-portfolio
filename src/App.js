import React from "react";
import "./App.css";
import Blog from "./blog.js";
import Education from "./Education.js";
import Footer from "./Footer.js";
import Bar from "./Bar"; 

function App() {
  return (
    <div className="App">
      <Blog />
      <Education /> {/* ✅ Education section first */}
      <Bar />       {/* ✅ Skills section (Bar) below Education */}
      <Footer />    {/* ✅ Footer at the bottom */}
    </div>
  );
}

export default App;
