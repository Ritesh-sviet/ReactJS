import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Visit my LinkedIn profile
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/ritesh-sharma-a22720281/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ritesh Sharma
        </a>
      </header>
    </div>
  );
}

export default App;
