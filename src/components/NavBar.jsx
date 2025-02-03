import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 text-white">
        <div className="container">
          <Link className="navbar-brand" to="/">TodoApp</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/completed"
                >
                  Completed Tasks
                </NavLink>
              </li>
              {/* Add more links here if you create additional pages */}
            </ul>
          </div>
        </div>
      </nav>  
    )
};

export default NavBar;