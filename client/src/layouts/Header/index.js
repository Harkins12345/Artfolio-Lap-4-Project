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


//           <div
//             onClick={() => navigate("/sign-in")}
//             className="btn primary-cta-btn"
//           >

          <div className="navIcons"> 
          <div onClick={() => navigate("/dashboard")} className="dashboard">
          <i className="fa-regular fa-address-card"></i>
            Dashboard
          </div>
          <div onClick={() => navigate("/sign-in")} className="btn sign-in-btn">
            <i className="fa-regular fa-user"></i>

            Sign In
          </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
