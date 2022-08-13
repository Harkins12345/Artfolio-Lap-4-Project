import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ChatModal from "./index.js";
import { Provider } from "react-redux";

import store from ".";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Chat Modal Component", () => {
  beforeEach(() => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router>
          <ChatModal />
        </Router>
      </Provider>
    );
  });

  test("it renders an Chat Modal Component", () => {
    let chat = screen.getByTestId("chat-modal");
    expect(chat).toBeInTheDocument();
  });
});
