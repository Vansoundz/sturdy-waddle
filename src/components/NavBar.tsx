import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../routes/paths";
import "./css/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to={paths.index}>Logo</Link>
      <div>Account</div>
    </nav>
  );
};

export default NavBar;
