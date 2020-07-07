import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            School App
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/teachers" className="nav-link">
                  Teachers
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
