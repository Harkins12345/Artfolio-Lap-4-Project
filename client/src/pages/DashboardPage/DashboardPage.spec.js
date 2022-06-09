import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DashboardPage from "./index.js";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

console.log = jest.fn();
expect(console.log).not.toHaveBeenCalled();

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Dashboard Page", () => {
  beforeEach(() => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router>
          <DashboardPage />
        </Router>
      </Provider>
    );
  });

  test("it renders a button and navigates to /dashboard/edit upon click", async () => {
    let button = screen.getByTestId("portfolio-btn");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/dashboard/edit");
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

  test("it renders a Request Card", () => {
    let card = screen.getByTestId("req-card");
    expect(card).toBeTruthy();
  });

  test('it renders an "edit" button', () => {
    let btn = screen.getAllByTestId("edit-btn");
    expect(btn).toBeTruthy();
  });

  test("it renders a Gig component", () => {
    let gig = screen.getAllByTestId("gig-requests");
    expect(gig).toBeTruthy();
  });

  test("it renders an Artist card section", () => {
    let artist = screen.getAllByTestId("artist-card");
    expect(artist).toBeTruthy();
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
