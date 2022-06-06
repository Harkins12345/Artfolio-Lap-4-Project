import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage, AuthPage } from "./pages";
import { default as Layout } from "./layouts";
import LandingPage from "./pages/LandingPage";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/sign-in" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default App;
