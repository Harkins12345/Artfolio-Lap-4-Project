import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsername } from "../../actions";
import axios from "axios";
import classnames from "classnames";
import { useState } from "react";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [swapPanel, setSwapPanel] = useState(false);

  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const toggleBtn = () =>
    swapPanel ? setSwapPanel(false) : setSwapPanel(true);

  const login = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    axios
      .post(`${window.origin}/login`, data)
      .then((resp) => resp.data)
      .then((data) => {
        dispatch(setUsername(data["username"]));
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const register = (e) => {
    e.preventDefault();

    if (password == confPassword) {
      const data = {
        username: username,
        email: email,
        password: password,
      };

      axios
        .post(`${window.origin}/register`, data)
        .then((resp) => resp.data)
        .then((data) => {
          dispatch(setUsername(data["username"]));
          navigate("/", { replace: true });
        })
        .catch((err) => console.log(err));
    }
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
            onSubmit={register}
            data-testid="auth-form"
          >
            <h1 className="sign-up-title" data-testid="header-authpage">
              Sign up
            </h1>
            <div className="social-container" data-testid="social">
              <a href="" className="social" data-testid="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              className="auth-info"
              data-testid="auth-info"
              type="text"
              value={username}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Username"
            />
            <input
              className="auth-info"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="auth-info"
              data-testid="auth-info"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <input
              className="auth-info"
              type="password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <button
              className="btn primary-cta-btn mt-3"
              data-testid="auth-btn"
              type="submit"
              placeholder="Sign up"
              onClick={toggleBtn}
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form
            className="auth-form"
            data-testid="sign-in-form"
            id="SignIn"
            onSubmit={login}
          >
            <h1 className="sign-in-title">Sign in</h1>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="auth-info"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <a className="social" href="/">
              Forgot your password?
            </a>

            <button className="btn primary-cta-btn" type="sumbit">
              <i className="fa-regular fa-user"></i>Sign in
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay" data-testid="overlay">
            <div className="overlay-panel overlay-left" data-testid="overlay">
              <h1 className="sign-up-title">Welcome Back!</h1>
              <button
                className="btn secondary-cta-btn"
                id="signIn"
                onClick={toggleBtn}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right" data-testid="overlay">
              <h1 className="sign-in-title">Don't have an account?</h1>
              <button
                className="btn secondary-cta-btn"
                id="signUp"
                onClick={toggleBtn}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </>
  );
};

export default AuthPage;
