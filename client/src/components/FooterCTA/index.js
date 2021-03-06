import React from "react";
import { useNavigate } from "react-router-dom";

const FooterCTA = () => {
  const navigate = useNavigate();
  return (
    <section id="footer-cta" data-testid="footer-cta">
      <div className="container-xl py-4 footer-cta-container">
        <h3 id="footer-cta-title">Ready to get started?</h3>

        <div
          onClick={() => navigate("/sign-in")}
          className="btn primary-cta-btn"
          data-testid="signInBtn"
        >
          <i className="fa-regular fa-user"></i>
          Sign In
        </div>

        <p id="create-account" data-testid="create-account">
          Haven't got an account?{" "}
          <span
            onClick={() => navigate("/sign-in")}
            className="createAccountNow"
            data-testid="createAccBtn"
          >
            Create one now!
          </span>
        </p>
      </div>
    </section>
  );
};

export default FooterCTA;
