import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AllArtistsPage from "./index.js";
import { Provider } from "react-redux";
import store from ".";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("All Artists Page", () => {
  beforeEach(() => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router>
          <AllArtistsPage />
        </Router>
      </Provider>
    );
  });

  test("it renders an Artist Card", () => {
    let card = screen.getAllByTestId("artist-rating");
    expect(card).toBeTruthy();
  });

  test("it renders an  New Artist Option", () => {
    let image = screen.getAllByTestId("artist-new");
    expect(image).toBeTruthy();
  });

  test("it renders a Sort Dropdown menu", () => {
    let sort = screen.getAllByTestId("sort-drop");
    expect(sort).toBeTruthy();
  });

  test("it renders Artist Info", () => {
    let info = screen.getAllByTestId("artist-info");
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
});
