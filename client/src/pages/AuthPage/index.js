import React from "react";
import classnames from "classnames";
import { useState } from "react";

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
        <div
          className="form-container sign-up-container"
          data-testid="form-container"
        >
          <form
            className="auth-form"
            id="SignUp"
            method="POST"
            data-testid="auth-form"
          >
            <h1 className="header-authpage" data-testid="header-authpage">
              Create Account
            </h1>
            <div className="social-container" data-testid="social">
              <a href="/" className="social" data-testid="social">
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
            <input
              className="auth-info"
              data-testid="auth-info"
              type="text"
              name="username"
              placeholder="Username"
            />
            <input
              className="auth-info"
              data-testid="auth-info"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="auth-info"
              data-testid="auth-info"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="auth-info"
              data-testid="auth-info"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button
              className="auth"
              data-testid="auth-btn"
              type="submit"
              placeholder="Sign up"
              onClick={signUpButton}
            />
            Sign up
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form
            className="auth-form"
            id="SignIn"
            method="POST"
            data-testid="sign-in-form"
          >
            <h1>SIGN IN</h1>

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
            <input
              className="auth-info"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="auth-info"
              type="password"
              name="password"
              placeholder="Password"
            />
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
          <div className="overlay" data-testid="overlay">
            <div className="overlay-panel overlay-left" data-testid="overlay">
              <h1>Welcome Back!</h1>
              <button className="ghost" id="signIn" onClick={signInButton}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right" data-testid="overlay">
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
