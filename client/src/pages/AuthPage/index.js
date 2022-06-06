import React from "react";
import classnames from "classnames";
import { useState } from "react";
import { default as Layout } from "../../layouts";
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
      <Layout />
      <div className={classnames("containerF", { "right-panel-active": swapPanel })} id="container">
        <div className="form-container sign-up-container">
          <form id="SignUp" method="">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" name="username" defaultValue="Username" />
            <input type="text" name="name" defaultValue="Name" />
            <input type="email" name="email" defaultValue="Email" />
            <input type="password" name="password" defaultValue="Password" />
            <input className="auth" type="submit" defaultValue="SIGN UP" onClick={signUpButton} />
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form id="SignIn" method="POST">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" name="email" defaultValue="Email" />
            <input type="password" name="password" defaultValue="Password" />
            <a className="social" href="#">
              Forgot your password?
            </a>
            <input className="auth" type="submit" defaultValue="SIGN IN" onClick={signInButton}/>
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
