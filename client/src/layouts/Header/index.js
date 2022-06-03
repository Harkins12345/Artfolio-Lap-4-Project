import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <a href="#" className="logo">
            <img src="" alt="Artfolio logo" />
          </a>

          <nav className="navbar" data-nav>
            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="navbar-link">
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn-sign_in">
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
