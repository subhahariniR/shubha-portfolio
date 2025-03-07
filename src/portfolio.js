import './App.css';

function Portfolio() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#home" className="logo">Shubhaharini</a>
        </div>

        <ul className="navbar-right">
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Education</a></li> {/* Scrolls to Education */}
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="section">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a brief introduction about myself.</p>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>
        <p><strong>Bachelor's Degree in Computer Science</strong></p>
        <p>XYZ University | 2019 - 2023</p>
        <p>Relevant Courses: Data Structures, Web Development, AI & ML</p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>A short description about my skills, experience, and goals.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Get in touch with me at: jeevikaravi03@gmail.com</p>
      </section>
    </div>
  );
}

export default Portfolio;
