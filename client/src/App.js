import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./pages";
import { default as Layout } from "./layouts";
import LandingPage from "./pages/LandingPage";
import AllArtistsPage from "./pages/AllArtistsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/artists" element={<AllArtistsPage/>}/>
    </Routes>
  );
};

export default App;
