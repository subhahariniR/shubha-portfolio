import './App.css';
import { FaEnvelope, FaInstagram, FaGithub, FaHome } from "react-icons/fa";
import profileImage from './Profile.png';

function Portfolio() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#home" className="logo">Shubhaharini</a>
          <div className="linkedin-container">
            <a href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME" target="_blank" rel="noopener noreferrer" className="linkedin-btn">Connect on LinkedIn</a>
          </div>
        </div>
        <ul className="navbar-right">
          <li><a href="#home"><FaHome size={20} /> Home</a></li>
          <li><a href="mailto:jeevikaravi@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={20} /> Email</a></li>
          <li><a href="https://www.instagram.com/s.u.b.h.a_24?igsh=OWp4ZGd0cnBqcWJz" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /> Instagram</a></li>
          <li><a href="https://github.com/subhahariniR" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /> GitHub</a></li>
        </ul>
      </nav>
      
      <div className="one">
      <h1 className="animate" style={{ color: "smokewhite" }}>Hey there..</h1>
        <div className="name-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", flexDirection: "row" }}>
        <h1 className="animate-text">I'm Subha!!</h1>
          <img src={profileImage} alt="Shubhaharini" className="profile-image glowing-image" style={{ marginLeft: "auto", transition: "transform 0.3s ease-in-out", border: "2px solid rgba(255, 165, 0, 0.8)", boxShadow: "0px 8px 20px rgba(255, 165, 0, 0.6)" }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"} 
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"} />
        </div>
    <a href="#hire-me" class="hire-me-btn">Hire Me</a>
      
        <h4 className="animate-text">🚀 Front-End Developer | React Enthusiast | Tech Explorer</h4>
        <h4 className="animate-text"> 🚀CodingJourney | ContinuousLearning</h4>
      </div>
    </div>
  );
}

export default Portfolio;
