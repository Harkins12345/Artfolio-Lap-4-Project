import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const username = useSelector((state) => state.username);

  const navigate = useNavigate();
  return (
    <header>
      <div
        className="container-xl header-container"
        data-testid="header-container"
      >
        <img
          onClick={() => navigate("/")}
          src="/images/artfolio-red.png"
          alt="Artfolio logo"
          className="navbar-logo"
          data-testid="navbar-logo"
        />

        <div className="navbar-btns">
          {username ? (
            <div
              onClick={() => navigate("/dashboard")}
              className="btn primary-cta-btn dashboard-btn"
              data-testid="dashboard"
            >
              <i className="fa-regular fa-address-card"></i>Dashboard
            </div>
          ) : (
            <div
              onClick={() => navigate("/sign-in")}
              className="btn primary-cta-btn"
              data-testid="sign-in-btn"
            >
              <i className="fa-regular fa-user"></i>Sign In
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
