import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CreateBlog from "./Pages/CreateBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreateBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
