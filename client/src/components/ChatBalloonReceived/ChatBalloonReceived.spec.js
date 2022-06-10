import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from ".";
import configureStore from "redux-mock-store";
import ChatBalloonReceived from "./index.js";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Chat Balloon Received Page", () => {
  beforeEach(() => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router>
          <ChatBalloonReceived />
        </Router>
      </Provider>
    );
  });

  test("it renders a Chat Balloon Received Page", () => {
    let balloon = screen.getAllByTestId("balloon-received");
    expect(balloon).toBeTruthy();
  });
});
