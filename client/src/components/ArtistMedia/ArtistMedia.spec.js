import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from ".";
import configureStore from "redux-mock-store";
import ArtistMedia from "./index.js";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Landing Page", () => {
  beforeEach(() => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router>
          <ArtistMedia />
        </Router>
      </Provider>
    );
  });

  test("it renders a Demo Page", () => {
    let demo = screen.getAllByTestId("artist-media");
    expect(demo).toBeTruthy();
  });
});
