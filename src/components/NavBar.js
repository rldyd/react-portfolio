import React from "react";
import proPic from "../img/profile.jpeg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={proPic} alt="" />
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" exact activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" exact activeClassName="active">
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>

        <footer className="footer"></footer>
      </nav>
    </div>
  );
}

export default Navbar;
