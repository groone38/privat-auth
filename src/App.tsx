import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <ul className="header__nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">Blog</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
        </ul>
      </header>
      <h1>Get started</h1>
    </div>
  );
}

export default App;
