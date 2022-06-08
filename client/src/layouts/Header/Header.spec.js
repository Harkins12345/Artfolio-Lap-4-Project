import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "../index.js";

describe("Header", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Layout />
        </Router>
      </Provider>
    );
  });

  test("it renders a header", () => {
    let header = screen.getByTestId("header-container");
    expect(header).toBeInTheDocument();
  });

  test("it renders a Navbar Logo", () => {
    let logo = screen.getByTestId("navbar-logo");
    expect(logo).toBeInTheDocument();
  });

  test("it renders a dashboard", () => {
    let dashboard = screen.getByTestId("dashboard");
    expect(dashboard).toBeInTheDocument();
  });

  test("it renders a Sign In Button", () => {
    let btn = screen.getByTestId("sign-in-btn");
    expect(btn).toBeInTheDocument();
  });

  //   test("it renders the button and navigates to /sign-in upon click", async () => {
  //     jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);

  //     const ui = userEvent.setup();
  //     const navigate = jest.fn();
  //     await ui.click(screen.queryByText("Sign In"));
  //     expect(navigate).toHaveBeenCalledWith("/sign-in");
  //   });
});
