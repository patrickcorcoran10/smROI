// import React from "react";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class Navbar extends Component {
  render () {
    const style = {
      navbar: {
        backgroundColor: 'darkgrey',
        width: "100%",
        color: 'white'
      }
    }
    return (
    <nav style={style.navbar}>
      <div id="nb" className="navbar">
          <Link to="/" className="navbar-brand">Dashboard</Link>
          <Link to="/form" className="nav-link">Form</Link>
          <Link to="/view" className="nav-link">User View</Link>
          <Link to="/visuals" className="nav-link">Visuals</Link>
          <Link to="/signin" className="nav-link">Log-Out</Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
