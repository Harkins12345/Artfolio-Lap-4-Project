import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setUsername } from './actions';
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import {
  NotFoundPage,
  LandingPage,
  ArtistPortfolioPage,
  AuthPage,
  AllArtistsPage,
  GigPage,
  AllGigsPage,
  DashboardPage,
} from "./pages";
import Layout from "./layouts";

const App = () => {

  const username = useSelector(state => state.username);

  useEffect(() => {
    axios.post(`${window.origin}/validate`)
    .then(resp => resp.data)
    .then(data => useDispatch(setUsername(data['username'])))
    .catch(err => console.log(err))
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/sign-in" element={<AuthPage />} />
          <Route path="/artists">
            <Route path="/artists" element={<AllArtistsPage />} />
            <Route path="/artists/:name" element={<ArtistPortfolioPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
