import React from "react";
import classnames from "classnames";
import { useState } from "react";
import { useJwt } from "react-jwt";
import { default as Layout } from "../../layouts";
import "./style.css";

const AuthPage = () => {
  // const { decodedToken, isExpired } = useJwt(token);
  const [swapPanel, setSwapPanel] = useState(false);

  const signUpButton = () => {
    setSwapPanel(true);
  };
  const signInButton = () => {
    setSwapPanel(false);
  };

  const requestLogin = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      };
      // console.log(Object.fromEntries(new FormData(e.target)));
      const r = await fetch(`http://localhost:3000/auth/login`, options);
      const data = await r.json();
      if (!data.success) {
        throw new Error("Login not authorised");
      }
      // login(data.token);
    } catch (err) {
      console.warn(err);
    }
  };

  const requestRegistration = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      };
      const r = await fetch(`http://localhost:3000/auth/register`, options);
      const data = await r.json();
      // console.log(data);
      if (data.err) {
        throw Error(data.err);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // const login = (token) => {
  //   const user = jwt_decode(token);
  //   localStorage.setItem("token", token);
  //   localStorage.setItem("username", user.username);
  //   localStorage.setItem("userEmail", user.email);
  // };

  // const currentUser = () => {
  //   const username = localStorage.getItem("username");
  //   return username;
  // };

  return (
    <>
      {/* <Layout /> */}
      <div
        className={classnames("containerF", {
          "right-panel-active": swapPanel,
        })}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form onSubmit={requestRegistration} id="SignUp" method="POST">
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
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input
              className="auth"
              type="submit"
              placeholder="SIGN UP"
              onClick={signUpButton}
            />
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={requestLogin} id="SignIn" method="POST">
            <h1>SIGN IN</h1>
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
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <a className="social" href="#">
              Forgot your password?
            </a>
            <input
              className="auth"
              type="submit"
              placeholder="SIGN IN"
              onClick={signInButton}
            />
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <button className="ghost" id="signIn" onClick={signInButton}>
                SIGN IN
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
