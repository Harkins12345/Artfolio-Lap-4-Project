import React from "react";
import { useNavigate } from "react-router-dom";

const FooterCTA = () => {
  const navigate = useNavigate();
  return (
    <section id="footer-cta">
      <div className="container-xl py-4 footer-container">
        <h3 id="footer-cta-title">Ready to get started?</h3>

        <div
          onClick={() => navigate("/sign-in")}
          className="btn primary-cta-btn"
        >
          <i className="fa-regular fa-user"></i>
          Sign In
        </div>

        <p id="create-account">
          Haven't got an account?{" "}
          <span className="createAccountNow">Create one now!</span>
        </p>
      </div>
    </section>
  );
};

export default FooterCTA;
