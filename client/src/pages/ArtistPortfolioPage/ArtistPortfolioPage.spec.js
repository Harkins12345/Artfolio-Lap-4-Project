import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ArtistPortfolioPage from "./index.js";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Artist Portfolio Page", () => {
  beforeEach(() => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router>
          <ArtistPortfolioPage />
        </Router>
      </Provider>
    );
  });

  test("it renders an Artist Intro Section", () => {
    let intro = screen.getByTestId("artist-intro-section");
    expect(intro).toBeInTheDocument();
  });

  test("it renders a Back Button", () => {
    let btn = screen.getByTestId("back-to-all-artists");
    expect(btn).toBeInTheDocument();
  });

  test("it renders an Artist Name", () => {
    let name = screen.getByTestId("artist-name");
    expect(name).toBeInTheDocument();
  });

  test("it renders a Genre", () => {
    let genre = screen.getByTestId("artist-genre");
    expect(genre).toBeInTheDocument();
  });

  test("it renders an Artist Price", () => {
    let price = screen.getAllByTestId("artist-price");
    expect(price).toBeTruthy();
  });

  test("it renders an Artist Stars rating", () => {
    let rating = screen.getAllByTestId("artist-stars");
    expect(rating).toBeTruthy();
  });

  test("it renders an Artist image", () => {
    let image = screen.getAllByTestId("artist-image");
    expect(image).toBeTruthy();
  });

  test("it renders an Artist intro", () => {
    let intro = screen.getAllByTestId("artist-intro");
    expect(intro).toBeTruthy();
  });
});
