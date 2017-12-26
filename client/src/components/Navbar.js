import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <header className="container">
    <nav className="navbar">
      <h3 className="nav_brand">
        <Link to="/">Publications</Link>
      </h3>
      {!props.logged ? (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>Signup</li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/publications" />
          </li>
          <li>Profile</li>
          <li>
            <a onClick={props.logOut}>Logout </a>
          </li>
        </ul>
      )}
    </nav>
  </header>
);

export default Navbar;
