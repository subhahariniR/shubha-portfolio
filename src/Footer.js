import "./App";

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
            <li><a href="/">Home</a></li> 
            {/* ✅ Clicking "Home" will redirect to the homepage */}

            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="mailto:jeevikaravi03@gmail.com" target="_blank" rel="noopener noreferrer">
              Contact
            </a></li> 
            {/* ✅ Clicking "Contact" opens Gmail */}
          </ul>
        </div>

        {/* Right Section - Contact & Social Links */}
        <div className="footer-right">
          <h3>Contact</h3>
          <p>Email: 
            <a href="mailto:jeevikaravi03@gmail.com?subject=Hello%20Shubhaharini!" 
               target="_blank" rel="noopener noreferrer">
              jeevikaravi03@gmail.com
            </a>
          </p>

          <p>Phone:9361878359</p>
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
