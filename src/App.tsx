import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Layout from "./components/Layout";
import Login from "./pages/Login/Login";
import PrivateRoute from "./hoc/PrivateRoute";
import Register from "./pages/Register/Register";
import { ValueProvider } from "./components/context/UserContext";

function App() {
  return (
    <ValueProvider>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ValueProvider>
  );
}

export default App;
