import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ArtistCard from "./index.js";

describe("Artist Review", () => {
  beforeEach(() => {
    render(
      <Router>
        <ArtistCard />
      </Router>
    );
  });

  test("it renders an Artist Card Component", () => {
    let card = screen.getByTestId("artist-card");
    expect(card).toBeInTheDocument();
  });

  test("it renders an Artist Title", () => {
    let title = screen.getByTestId("artist-title");
    expect(title).toBeTruthy();
  });

  test("it renders Artist description", () => {
    let desc = screen.getByTestId("artist-desc");
    expect(desc).toBeTruthy();
  });
});
