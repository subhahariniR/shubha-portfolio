import './App.css';

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
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="About.js">About me</a></li>
          <li><a href="#case-study">Projects</a></li>
        </ul>
      </nav>
      {/* Centered Text Section */}
      <div className="one">
        <h3 className="animate-text">Hey there I'm </h3>
        <h1 className="animate-text">Shubhaharini!!</h1>
      </div>
    </div>
    
    {/* <section id="education" className="section">
      <h2>Education</h2>

      <div className="education-card">
        <h3> Computer Science and engineering</h3>
        <p><strong>annaUniversity</strong></p>
        <p>2022 - 2026</p>
        <p>Key Subjects: Data Structures, Web Development, AI & ML, Databases</p>
      </div>

      <div className="education-card">
        <h3>High School</h3>
        <p><strong>lions metric higher Secondary School</strong></p>
        <p>2020 - 2022</p>
        <p>Subjects: Mathematics, Physics, Chemistry, Computer Science</p>
      </div>
    </section> */}
    </>
  );
}

export default Portfolio;
