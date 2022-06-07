import React from "react";
import "@testing-library/jest-dom";
import { default as FooterCTA } from "./index.js";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import userEvent from "@testing-library/user-event";
describe("FooterCTA", () => {
  beforeEach(() => {
    render(
      <Router>
        <FooterCTA />
      </Router>
    );
  });

  test("it renders a footer", () => {
    let footer = screen.getByTestId("footer-cta");
    expect(footer).toBeInTheDocument();
  });

  test("it renders a Sign In Button", () => {
    let button = screen.getByTestId("signInBtn");
    expect(button).toBeInTheDocument();
  });

  test("it renders a Create Account Paragraph", () => {
    let paragraph = screen.getByTestId("create-account");
    expect(paragraph).toBeInTheDocument();
  });

  test("it renders a Create Account Button", () => {
    let paragraph = screen.getByTestId("createAccBtn");
    expect(paragraph).toBeInTheDocument();
  });

  //   test("it renders the button and navigates to /sign-in upon click", async () => {
  //     jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);

  //     const ui = userEvent.setup();
  //     const navigate = jest.fn();
  //     await ui.click(screen.queryByText("Sign In"));
  //     expect(navigate).toHaveBeenCalledWith("/sign-in");
  //   });
});
