import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage, AuthPage } from "./pages";
import Layout from "./layouts";
import LandingPage from "./pages/LandingPage";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<AuthPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
export default App;
