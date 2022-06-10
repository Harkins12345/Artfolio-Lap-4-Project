import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from ".";
import configureStore from "redux-mock-store";
import DemoPage from "./index.js";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Landing Page", () => {
  beforeEach(() => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router>
          <DemoPage />
        </Router>
      </Provider>
    );
  });

  test("it renders a Demo Page", () => {
    let demo = screen.getAllByTestId("demo-page");
    expect(demo).toBeTruthy();
  });

  test("it renders a Sign In statement", () => {
    let signIn = screen.getByTestId("signIn");
    expect(signIn).toBeTruthy();
  });
});
