import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TodoLogin from './Components/TodoLogin';
import TodoList from './Components/TodoList';
let username = "Ritesh";
let password = "Test123";

function App() {
  
  const [Loggedin, setLoggedin] = useState(Boolean);
  return (
    <>    

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {Loggedin === false ? <TodoLogin userid = {username} passwd = {password} username = "Username" password = "Password" Loggedin = {Loggedin} setLoggedin = {setLoggedin}/> : <TodoList User = {username} Loggedin = {Loggedin} setLoggedin = {setLoggedin} />}
        
        {/* <TodoLogin userid = {username} passwd = {password} username = "Username" password = "Password" Loggedin = {Loggedin} setLoggedin = {setLoggedin}/> */}
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
    </>
  );
}

export default App;
