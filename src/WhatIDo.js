import React from "react";
import "./WhatIDo.css"; // ✅ Keeping external styles

const WhatIDo = () => {
  return (
    <div className="what-i-do-section">
      <div className="what-i-do-card">
        <h2 className="what-i-do-title">💡 What I Do</h2>
        <div className="what-i-do-content">
          <p>✨ <strong>Front-End Magic</strong> – Crafting interactive & dynamic web experiences with <span>React.js, JavaScript, HTML, and CSS</span>.</p>
          <p>🎨 <strong>Sleek UI/UX</strong> – Designing clean, intuitive, and engaging interfaces.</p>
          <p>📱 <strong>Responsive & Fast</strong> – Ensuring smooth performance across all devices.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
