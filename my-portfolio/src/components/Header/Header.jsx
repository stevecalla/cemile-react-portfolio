import React from "react";
import { NavLink } from 'react-router-dom';
import "./Header.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand m-3 mt-2 mb-2" href="#"><img src="/icon.png" alt="Cemile Balkas Icon" height="50" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink to="/" end className="nav-link active" aria-current="page">
              Home
            </NavLink>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
      );
}

export default Header;