import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AcceptedRequest from "./index.js";

describe("Accepted Request Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <AcceptedRequest />
      </Router>
    );
  });

  test("it renders a username Component", () => {
    let username = screen.getByTestId("username");
    expect(username).toBeInTheDocument();
  });

  test("it renders a dropdown", () => {
    let dropdown = screen.getByTestId("dropdown");
    expect(dropdown).toBeTruthy();
  });

  test("it renders a Chat Button", () => {
    let btn = screen.getByTestId("chat-btn");
    expect(btn).toBeTruthy();
  });

  test("it renders Artist details", () => {
    let details = screen.getByTestId("request-details");
    expect(details).toBeTruthy();
  });
});
