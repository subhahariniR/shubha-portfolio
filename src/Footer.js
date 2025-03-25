import "./App"
function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section - Name & Description */}
          <div className="footer-left">
            <h2>Shubhaharini</h2>
            <p>Passionate about technology and innovation. Let's connect!</p>
          </div>
  
          {/* Center Section - Quick Links */}
          <div className="footer-center">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
  
          {/* Right Section - Contact & Social Links */}
          <div className="footer-right">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:your.email@example.com">jeevikaravi03@gmail.com</a></p>
  
            <p>Phone:8072908626</p>
            
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/subhahariniR" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/YOUR-TWITTER-USERNAME" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>"Empowering Digital Dreams!"</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
 
 