import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "./actions";
import axios from "axios";
import io from "socket.io-client";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  NotFoundPage,
  LandingPage,
  ArtistPortfolioPage,
  AuthPage,
  AllArtistsPage,
  DashboardPage,
  DemoPage,
  YourPortfolioPage,
} from "./pages";
import Layout from "./layouts";

const App = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const socket = io(window.location.origin);

  useEffect(() => {
    axios
      .post(`${window.origin}/validate`)
      .then((resp) => resp.data)
      .then((data) => dispatch(setUsername(data["username"])))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard">
            <Route
              path="/dashboard"
              element={
                username ? (
                  <DashboardPage />
                ) : (
                  <Navigate to="/sign-in" replace={true} />
                )
              }
            />
            <Route path="/dashboard/edit" element={<YourPortfolioPage />} />
          </Route>

          <Route path="/sign-in" element={
              username ? <Navigate to="/" replace={true} /> : <AuthPage />
            }
          />
          <Route path="/artists">
            <Route path="/artists" element={<AllArtistsPage />} />
            <Route path="/artists/:name" element={<ArtistPortfolioPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/demo" element={<DemoPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
