import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  NotFoundPage,
  LandingPage,
  ArtistPortfolioPage,
  AuthPage,
  AllArtistsPage,
  GigPage,
  AllGigsPage,
} from "./pages";
import Layout from "./layouts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<AuthPage />} />
          <Route path="/artists">
            <Route path="/artists" element={<AllArtistsPage />} />
            <Route path="/artists/:name" element={<ArtistPortfolioPage />} />
          </Route>
          <Route path="/gigs">
            <Route path="/gigs" element={<AllGigsPage />} />
            <Route path="/gigs/:name" element={<GigPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
