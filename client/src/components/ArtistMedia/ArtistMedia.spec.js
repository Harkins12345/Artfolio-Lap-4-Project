import React from "react";
import "@testing-library/jest-dom";
import ArtistMedia from "./index.js";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Artist Media Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <ArtistMedia />
      </Router>
    );
  });

  test("it renders an Artist Media Component", () => {
    let media = screen.getAllByTestId("artist-media");
    expect(media).toBeTruthy();
  });
});
