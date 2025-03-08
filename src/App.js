import logo from './logo.svg';
import './App.css';
import Blog from './blog.js';
import'./portfolio.js';
import Education from './Education.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Blog />
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
