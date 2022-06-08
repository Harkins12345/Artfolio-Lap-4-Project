import React from "react";
import "@testing-library/jest-dom";
import ArtistReview, { default as FooterCTA } from "./index.js";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Artist Review", () => {
  beforeEach(() => {
    render(
      <Router>
        <ArtistReview />
      </Router>
    );
  });

  test("it renders a Review Component", () => {
    let review = screen.getByTestId("review");
    expect(review).toBeInTheDocument();
  });

  test("it renders a Review Title", () => {
    let title = screen.getByTestId("review-title");
    expect(title).toBeTruthy();
  });

  test("it renders Stars inside the Review", () => {
    let stars = screen.getByTestId("review-stars");
    expect(stars).toBeTruthy();
  });

  test("it renders the Text of the Review (actual review content)", () => {
    let text = screen.getByTestId("review-text");
    expect(text).toBeTruthy();
  });

  test("it renders a Name of the Review Author", () => {
    let name = screen.getByTestId("review-from-name");
    expect(name).toBeTruthy();
  });
});
