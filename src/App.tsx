import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <header className="header">
        <ul className="header__nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Blog</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
