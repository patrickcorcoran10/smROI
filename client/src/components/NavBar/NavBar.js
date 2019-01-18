// import React from "react";
// import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {

  openNav = (event) => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  
  closeNav = (event) => {
    document.getElementById("mySidenav").style.width = "0";
  };

  render () {
    return (

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar-wide flex-container">
    <Link className="navbar-brand" to="/">
      Pat Corcoran
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/discover"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
    <span className="navbar-text ml-auto navbar-right">
    <a href="https://github.com/patrickcorcoran10"><i className="fab fa-github"></i></a><a href="https://www.instagram.com/picsofandbypat/"><i className="fab fa-instagram"></i></a><a href="https://twitter.com/CorcoranPatJ"><i className="fab fa-twitter"></i></a>
   </span>
   </div>
   <div className="sidenav-div">
        <div className="navbar-brand">
        <img src="toggle.png" alt="toggle" id="toggle" onClick={this.openNav}/><a id="pCorcoran" href="/">{'  '} Pat Corcoran</a>
        </div>
      <div id="mySidenav" className="sidenav">
        <button className="closebtn" onClick={this.closeNav}>&times;</button>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
  </div>
  </div>
  </nav>

);
        }};

export default Navbar;
