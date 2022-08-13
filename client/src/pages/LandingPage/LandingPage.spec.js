import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./index.js";
import { Provider } from "react-redux";
import store from ".";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Landing Page", () => {
  beforeEach(() => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router>
          <LandingPage />
        </Router>
      </Provider>
    );
  });

  test("it renders a Create Account Buttons", () => {
    let btn = screen.getAllByTestId("createAccBtn");
    expect(btn).toBeTruthy();
  });

  test("it renders a Sign In statement", () => {
    let signIn = screen.getByTestId("signIn");
    expect(signIn).toBeTruthy();
  });

  // test("it renders a No account statement", () => {
  //   let statement = screen.getByTestId("noAccount");
  //   expect(statement).toBeTruthy();
  // });

  // test("it renders a Hero Section", () => {
  //   let hero = screen.getAllByTestId("hero-section");
  //   expect(hero).toBeTruthy();
  // });

  // test("it renders a Artist Section", () => {
  //   let artist = screen.getAllByTestId("artist-section");
  //   expect(artist).toBeTruthy();
  // });

  // test("it renders aa Artist Button", () => {
  //   let btn = screen.getByTestId("artists-btn");
  //   expect(btn).toBeTruthy();
  // });
});
