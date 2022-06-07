import React from "react";
import { useNavigate } from "react-router-dom";

const FooterCTA = () => {
  const navigate = useNavigate();
  return (
    <section id="footer-cta" data-testid="footer-cta">
      <div className="container-xl py-4 footer-container">
        <h3 id="footer-cta-title">Ready to get started?</h3>
        <button
          onClick={() => navigate("/sign-in")}
          className="btn sign-in-btn"
          data-testid="signInBtn"
        >
          Sign In
        </button>

        <p id="create-account" data-testid="create-account">
          Haven't got an account?{" "}
          <span className="createAccountNow" data-testid="createAccBtn">
            Create one now!
          </span>
        </p>
      </div>
    </section>
  );
};

export default FooterCTA;
