import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ArtistAudio from "./index.js";

describe("Artist Audio Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <ArtistAudio />
      </Router>
    );
  });

  test("it renders an Media Audio Component", () => {
    let media = screen.getByTestId("media-audio");
    expect(media).toBeInTheDocument();
  });

  test("it renders an Audio Name", () => {
    let name = screen.getAllByTestId("audio-name");
    expect(name).toBeTruthy();
  });
});
