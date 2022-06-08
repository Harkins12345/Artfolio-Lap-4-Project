import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFoundPage from "./index.js";

describe("Not Found Page", () => {
  beforeEach(() => {
    render(
      <Router>
        <NotFoundPage />
      </Router>
    );
  });

  test("it renders a Not Found Page", () => {
    let page = screen.getByTestId("not-found");
    expect(page).toBeTruthy();
  });
});
