import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../index.js";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
// import createTestStore from "redux-test-store";
import store from ".";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Footer", () => {
  beforeEach(() => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router>
          <Layout />
        </Router>
      </Provider>
    );
  });

  test("it renders the button and navigates to /home upon click", async () => {
    let button = screen.getByTestId("footer-home-link");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });

  test("it renders the button and navigates to /artists upon click", async () => {
    let button = screen.getByTestId("footer-artists-btn");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/artists");
  });

  test("it renders the button and navigates to /demo upon click", async () => {
    let button = screen.getByTestId("footer-about-btn");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/demo");
  });

  test("it renders the button and navigates to /demo upon click", async () => {
    let button = screen.getByTestId("footer-facebook-link");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/demo");
  });

  test("it renders the button and navigates to /demo upon click", async () => {
    let button = screen.getByTestId("footer-instagram-link");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/demo");
  });

  test("it renders the button and navigates to /demo upon click", async () => {
    let button = screen.getByTestId("footer-soundcloud-link");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/demo");
  });

  test("it renders the button and navigates to /demo upon click", async () => {
    let button = screen.getByTestId("footer-contact-link");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/demo");
  });

  test("it renders the button and navigates to /demo upon click", async () => {
    let button = screen.getByTestId("footer-privacy-link");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/demo");
  });

  test("it renders the button and navigates to /demo upon click", async () => {
    let button = screen.getByTestId("footer-terms-link");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/demo");
  });

  test("it renders a Footer sitemap", () => {
    let sitemap = screen.getAllByTestId("footer-sitemap");
    expect(sitemap).toBeTruthy();
  });

  test("it renders a footer", () => {
    let footer = screen.getByTestId("footer-top");
    expect(footer).toBeInTheDocument();
  });

  test("it renders a Footer Slogan", () => {
    let slogan = screen.getByTestId("footer-slogan");
    expect(slogan).toBeInTheDocument();
  });

  test("it renders a line across the footer", () => {
    let line = screen.getByTestId("footer-line-container");
    expect(line).toBeInTheDocument();
  });

  test("it renders a soundcloud Footer element", () => {
    let soundcloud = screen.getAllByTestId("footer-soundcloud-link");
    expect(soundcloud).toBeTruthy();
  });
  test("it renders a contact Footer element", () => {
    let contact = screen.getAllByTestId("footer-contact-link");
    expect(contact).toBeTruthy();
  });
  test("it renders a privacy Footer element", () => {
    let privacy = screen.getAllByTestId("footer-privacy-link");
    expect(privacy).toBeTruthy();
  });
  test("it renders terms & cond Footer element", () => {
    let terms = screen.getAllByTestId("footer-terms-link");
    expect(terms).toBeTruthy();
  });
});
