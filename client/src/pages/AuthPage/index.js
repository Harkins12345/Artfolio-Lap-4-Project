import React from "react";
import classnames from "classnames";
import { useState } from "react";
import "./style.css";

const AuthPage = () => {
  const [swapPanel, setSwapPanel] = useState(false);

  const signUpButton = () => {
    setSwapPanel(true);
  };

  const signInButton = () => {
    setSwapPanel(false);
  };

  return (
    <>
      <div
        className={classnames("containerF", {
          "right-panel-active": swapPanel,
        })}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form id="SignUp" method="POST">
            <h1>Sign up</h1>
            <div className="social-container">
              <a href="/" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            {/* <input type="text" name="username" placeholder="Username" /> */}
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button
              className="btn auth-btn"
              type="sumbit"
              onClick={signUpButton}
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form id="SignIn" method="POST">
            <h1>Sign in</h1>

            <div className="social-container">
              <a href="/" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <a className="social" href="/">
              Forgot your password?
            </a>

            <button
              className="btn auth-btn"
              type="sumbit"
              onClick={signInButton}
            >
              Sign in
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <button className="ghost" id="signIn" onClick={signInButton}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Don't have an account?</h1>
              <button className="ghost" id="signUp" onClick={signUpButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
