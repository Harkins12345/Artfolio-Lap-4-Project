import React from "react";
import { default as Header } from "./Header";
import { default as Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import SignInFooter from "../components/SignInFooter";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
