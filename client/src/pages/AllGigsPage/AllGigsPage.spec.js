import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AllGigsPage from "./index.js";

describe("All Gigs Page", () => {
  beforeEach(() => {
    render(
      <Router>
        <AllGigsPage />
      </Router>
    );
  });

  test("it renders a Main section", () => {
    let main = screen.getAllByTestId("main-section");
    expect(main).toBeTruthy();
  });

  test("it renders a Dropdown menu", () => {
    let drop = screen.getAllByTestId("sort-drop");
    expect(drop).toBeTruthy();
  });

  test("it renders a genre inside Gigs Card", () => {
    let genre = screen.getAllByTestId("flair-section");
    expect(genre).toBeTruthy();
  });

  test("it renders an Artist list", () => {
    let list = screen.getAllByTestId("artist-list");
    expect(list).toBeTruthy();
  });
});
