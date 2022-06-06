import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="container-xl header-container">
          <img
            onClick={() => navigate("/")}
            src="/images/artfolio-red.png"
            alt="Artfolio logo"
            className="navbar-logo"
          />

          <div onClick={() => navigate("/sign-in")} className="btn sign-in-btn">
            Sign In
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
