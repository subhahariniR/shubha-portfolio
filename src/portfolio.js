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
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Centered Text Section */}
      <section className="center-section">
        <h1>Hey, Shubhaharini</h1>
      </section>

      {/* Other sections */}
      <section id="home" className="section">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a brief introduction about myself.</p>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>Information about my background and experience.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Get in touch with me.</p>
      </section>
    </div>
  );
}

export default Portfolio;
