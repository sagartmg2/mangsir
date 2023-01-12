import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"

import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import Button from './Button';
// App()

function App() {
  // return <JSX/>
  return (
    <div>
      <Navbar />
      <Button text="login" className="login-btn" />
      <Button text="signup" className="register-btn" />
      {/* 
        Button(login)
        Button("resgiter")
        Button(s)
      */}
      {/* <LoginButton />
      <RegisterButton /> */}
      <div className="App">
        {/* // Navbar() */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {1 + 1}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>

  );
}

export default App;
