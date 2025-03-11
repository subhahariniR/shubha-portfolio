import './App.css';
import { FaEnvelope, FaInstagram, FaGithub, FaHome } from "react-icons/fa"; // ✅ Added FaHome


function Portfolio() {
  return (
    <>
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
      {/* Centered Text Section */}
      <div className="one">
        <h3 className="animate-text">Hey there I'm </h3>
        <h1 className="animate-text">Shubhaharini!!</h1>
      </div>
    </div>
    </>
  );
}

export default Portfolio;
