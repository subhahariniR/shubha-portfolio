import './App.css';

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
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#case-study">photos</a></li>
        </ul>
      </nav>

      {/* Centered Text Section */}
      <div className="one">
        <h3 className="animate-text">Hey there I'm </h3>
        <h1 className="animate-text">Shubhaharini!!</h1>
      </div>
    </div>
  );
}

export default Portfolio;
