import React from "react";
import App from "./App";
import Login from "./Components/Login";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
const FrontPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/GamePage" element={<App />} />
      </Routes>
    </Router>
  );
};

export default FrontPage;
