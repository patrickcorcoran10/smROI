// import React from "react";
import { Link } from "react-router-dom";
import React, { Component } from "react";
// import "./Navbar.css";

class Navbar extends Component {
  render () {
    return (
  <div className="nb">

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar-wide flex-container">
    <Link className="navbar-brand" to="/">
      Home
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/form"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/form" className="nav-link">
            Form
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/discover"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/view" className="nav-link">
            User View
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/visuals" className="nav-link">
            Visuals
          </Link>
        </li>
      </ul>
    </div>
    {/* <span className="navbar-text ml-auto navbar-right">
    <a href="https://github.com/patrickcorcoran10"><i className="fab fa-github"></i></a><a href="https://www.instagram.com/picsofandbypat/"><i className="fab fa-instagram"></i></a><a href="https://twitter.com/CorcoranPatJ"><i className="fab fa-twitter"></i></a>
   </span> */}
   </div>
   {/* <div className="sidenav-div">
        <div className="navbar-brand">
        <img src="toggle.png" alt="toggle" id="toggle" onClick={this.openNav}/><a id="smROI" href="/">{'  '} smROI</a>
        </div>
      <div id="mySidenav" className="sidenav">
        <button className="closebtn" onClick={this.closeNav}>&times;</button>
        <a href="/">Home</a>
        <a href="/form">Form</a>
        <a href="/view">User View</a>
        <a href="/Visuals">Visuals</a>
  </div>
  </div> */}
  </nav>
  </div>


);
        }};

export default Navbar;
