import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DashboardPage from "./index.js";

describe("Dashboard Page", () => {
  beforeEach(() => {
    render(
      <Router>
        <DashboardPage />
      </Router>
    );
  });

  test("it renders a Welcome Section", () => {
    let section = screen.getByTestId("welcome-section");
    expect(section).toBeTruthy();
  });

  test("it renders a Main component", () => {
    let text = screen.getByTestId("main-text");
    expect(text).toBeTruthy();
  });

  test("it renders a greeting", () => {
    let user = screen.getByTestId("user-welcome");
    expect(user).toBeTruthy();
  });

  test('it renders an "edit" button', () => {
    let btn = screen.getAllByTestId("edit-btn");
    expect(btn).toBeTruthy();
  });

  test("it renders a Gig component", () => {
    let gig = screen.getAllByTestId("gig-requests");
    expect(gig).toBeTruthy();
  });

  test("it renders an Upcoming gigs section", () => {
    let gigs = screen.getAllByTestId("upcoming-gigs");
    expect(gigs).toBeTruthy();
  });

  test("it renders an Artist card section", () => {
    let artist = screen.getAllByTestId("artist-card");
    expect(artist).toBeTruthy();
  });

  test("it renders a Create Gig button", () => {
    let btn = screen.getByTestId("create-gig-btn");
    expect(btn).toBeTruthy();
  });

  test("it renders an Attending Gig component", () => {
    let gig = screen.getAllByTestId("attending-gig");
    expect(gig).toBeTruthy();
  });

  test("it renders an Accepted Gigs component", () => {
    let gigs = screen.getAllByTestId("gigs-accepted");
    expect(gigs).toBeTruthy();
  });
});
