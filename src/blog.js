import './App.css';
import { FaEnvelope, FaInstagram, FaGithub, FaHome } from "react-icons/fa"; 
import profileImage from './Profile.png'; // Import the image

function Portfolio() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#home" className="logo">Shubhaharini</a>

          {/* LinkedIn Button Moved Below Name */}
          <div className="linkedin-container">
            <a 
              href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin-btn"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
        <ul className="navbar-right">
          <li>
            <a href="#home">
              <FaHome size={20} /> Home
            </a>
          </li>
          {/* Social Media Links with Icons */}
          <li>
            <a href="mailto:jeevikaravi@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={20} /> Email
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/s.u.b.h.a_24?igsh=OWp4ZGd0cnBqcWJz" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} /> Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/subhahariniR" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} /> GitHub
            </a>
          </li>
        </ul>
      </nav>

      {/* Centered Text Section with Image */}
      <div className="one">
        <h3 className="animate-text">Hey there, I'm</h3>
        
        {/* New div for name and image */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px", justifyContent: "center" }}>
          <h1 className="animate-text">Shubhaharini!!</h1>
          <img 
            src={profileImage} // Using the imported image
            alt="Shubhaharini" 
            className="Profile-image" 
            style={{ width: "80px", height: "80px", borderRadius: "50%" }} 
          />
        </div>
        
        <h4 className="animate-text">🚀 Front-End Developer | React Enthusiast | Tech Explorer</h4>
      </div>

      <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold mb-6"><center>💡 What I Do</center></h2>
          <div className="space-y-4">
            <p className="text-lg"><center>✨ <strong>Front-End Magic</strong> – Crafting interactive & dynamic web experiences with 
            <span className="text-blue-400"> React.js, JavaScript, HTML, and CSS</span>.</center>
            </p>
            <p className="text-lg"><center>🎨 <strong>Sleek UI/UX</strong> – Designing clean, intuitive, and engaging interfaces.</center></p>
            <p className="text-lg"><center>📱 Responsive & Fast – Ensuring smooth performance across all devices</center></p>
          </div>
        </div>
        <img 
          //src={profileImage} // Use the correct imported image
          //alt="Shubhaharini" 
          //className="Profile-image"
          //style={{ width: "250px", height: "auto" }} 
        />
      </section>
    </div>
  );
}

export default Portfolio;
