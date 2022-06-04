import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./pages";
import { default as Layout } from "./layouts";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
