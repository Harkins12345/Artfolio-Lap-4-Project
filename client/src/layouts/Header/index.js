import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="container-xl header-container">
          <a href="/">
            <img
              src="/images/artfolio-red.png"
              alt="Artfolio logo"
              className="navbar-logo"
            />
          </a>

          <div className="btn sign-in-btn">Sign In</div>
        </div>
      </header>
    </>
  );
};

export default Header;
