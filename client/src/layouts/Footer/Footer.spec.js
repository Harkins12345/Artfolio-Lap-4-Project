import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../index.js";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Footer", () => {
  beforeEach(() => {
    render(
      <Router>
        <Layout />
      </Router>
    );
  });

  test("it renders the button and navigates to /sign-in upon click", async () => {
    let button = screen.getByTestId("footer-home-link");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });

  test("it renders the button and navigates to /sign-in upon click", async () => {
    let button = screen.getByTestId("footer-artists-link");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/artists");
  });

  test("it renders the button and navigates to /sign-in upon click", async () => {
    let button = screen.getByTestId("footer-gigs-link");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/gigs");
  });

  test("it renders a Footer sitemap", () => {
    let sitemap = screen.getByTestId("footer-sitemap");
    expect(sitemap).toBeInTheDocument();
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

  test("it renders Footer elements", () => {
    let sitemap = screen.getAllByTestId("footer-menu-link");
    expect(sitemap).toBeTruthy();
  });
});
