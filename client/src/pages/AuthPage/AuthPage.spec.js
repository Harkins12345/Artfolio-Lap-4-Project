import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthPage from "./index.js";

describe("Authentication Page", () => {
  beforeEach(() => {
    render(
      <Router>
        <AuthPage />
      </Router>
    );
  });

  test("it renders an Auth Form", () => {
    let form = screen.getByTestId("auth-form");
    expect(form).toBeTruthy();
  });

  test("it renders a Auth Form container", () => {
    let form = screen.getByTestId("form-container");
    expect(form).toBeTruthy();
  });

  test("it renders an Auth Page Header", () => {
    let header = screen.getByTestId("header-authpage");
    expect(header).toBeTruthy();
  });

  test("it renders a social media icons", () => {
    let social = screen.getAllByTestId("social");
    expect(social).toBeTruthy();
  });

  test("it renders an Auth Info", () => {
    let info = screen.getAllByTestId("auth-info");
    expect(info).toBeTruthy();
  });

  test("it renders a Sign Up Button", () => {
    let btn = screen.getAllByTestId("auth-btn");
    expect(btn).toBeTruthy();
  });

  test("it renders a Sign In Form", () => {
    let form = screen.getByTestId("sign-in-form");
    expect(form).toBeTruthy();
  });

  test("it renders an Overlay component", () => {
    let overlay = screen.getAllByTestId("overlay");
    expect(overlay).toBeTruthy();
  });
});
