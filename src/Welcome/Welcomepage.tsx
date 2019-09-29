import React from "react";
import logo from "./dodo-logo.png";
import "./Welcomepage.css";

const Welcomepage: React.FC = () => {
  return (
    <div className="imagecenter">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to DoDo!</h1>
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>*/
  );
};

export default Welcomepage;
