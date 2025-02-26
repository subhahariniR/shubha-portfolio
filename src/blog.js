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
      <div className="one">
        <h3 className="animate-text">Hey </h3>
        <h1 className="animate-text">SHUBHAHARINI</h1>
      </div>
    </div>
  );
}

export default Portfolio;
