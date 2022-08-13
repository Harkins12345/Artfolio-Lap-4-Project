import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFoundPage from "./index.js";

describe("Not Found Page", () => {
  beforeEach(() => {
    render(
      <Router>
        <YourPortfolioPage />
      </Router>
    );
  });

  test("it renders Your Portfolio Page", () => {
    let page = screen.getByTestId("hero-section");
    expect(page).toBeTruthy();
  });
});
