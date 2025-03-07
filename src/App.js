import logo from './logo.svg';
import './App.css';
import Blog from './blog.js';
import'./portfolio.js';
import education from './Education.js';
function App() {
  return (
    <div className="App">
      <Blog />
      <education/>
    </div>
  );
}

export default App;
