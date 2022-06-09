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
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div className="container-fluid">
        <img
          onClick={() => navigate("/")}
          src="/images/artfolio-red.png"
          alt="Artfolio logo"
          className="navbar-logo"
          data-testid="navbar-logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <div className="navbar-nav me-auto mb-2 mb-sm-0 ">
            <div className="navbar-btns" data-testid="navbar-btns">
              {username ? (
                <>
                  <div
                    onClick={() => navigate("/dashboard")}
                    className="btn primary-cta-btn dashboard-btn"
                  >
                    <i className="fa-regular fa-address-card"></i>Dashboard
                  </div>
                  <div
                    onClick={logout}
                    className="btn primary-cta-btn"
                    data-testid="sign-in-btn"
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
        </div>
      </div>
    </nav>
  );
};

export default Header;
