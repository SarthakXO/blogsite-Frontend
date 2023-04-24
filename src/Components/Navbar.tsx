import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-link" to="/">
        Home
      </Link>
      <Link className="navbar-link" to="/create-post">
        Create
      </Link>
    </div>
  );
};

export default Navbar;
