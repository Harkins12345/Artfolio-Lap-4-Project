import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsername } from "../../actions";
import axios from "axios";

const Header = () => {
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout(e) {
    axios.post(`${window.origin}/logout`).catch((err) => console.log(err));

    dispatch(setUsername(null));
    navigate("/");
  }

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

        <div className="navbar-btns" data-testid="navbar-btns">
          {username ? (
            <>
              <div
                onClick={() => navigate("/dashboard")}
                className="btn primary-cta-btn navbar-btns"
              >
                <i className="fa-regular fa-address-card"></i>Dashboard
              </div>
              <div
                onClick={logout}
                className="btn primary-cta-btn navbar-btns"
                data-testid="sign-in-btn "
              >
                <i className="fa-regular fa-user"></i>Sign Out
              </div>
            </>
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
