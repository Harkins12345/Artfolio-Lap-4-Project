import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AllArtistsPage from "./index.js";

describe("All Artists Page", () => {
  beforeEach(() => {
    render(
      <Router>
        <AllArtistsPage />
      </Router>
    );
  });

  test("it renders an Artist Card", () => {
    let card = screen.getAllByTestId("artist-card");
    expect(card).toBeTruthy();
  });

  test("it renders an Artist Image inside Artist Card", () => {
    let image = screen.getAllByTestId("artist-image");
    expect(image).toBeTruthy();
  });

  test("it renders a genre inside Artist Card", () => {
    let genre = screen.getAllByTestId("flair-section");
    expect(genre).toBeTruthy();
  });

  test("it renders Artist Info", () => {
    let info = screen.getAllByTestId("artist-information");
    expect(info).toBeTruthy();
  });

  test("it renders Artist pricing", () => {
    let pricing = screen.getAllByTestId("artist-pricing");
    expect(pricing).toBeTruthy();
  });

  test("it renders a Main section", () => {
    let main = screen.getAllByTestId("main-section");
    expect(main).toBeTruthy();
  });

  test("it renders an Artist list", () => {
    let list = screen.getAllByTestId("artist-list");
    expect(list).toBeTruthy();
  });
});
