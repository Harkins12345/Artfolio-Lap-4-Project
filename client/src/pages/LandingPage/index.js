import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ArtistCard, FooterCTA } from "../../components";

const LandingPage = () => {
  const username = useSelector((state) => state.username);

  const navigate = useNavigate();

  const [artistList, setArtistList] = useState([]);

  // get the artists api (with a placeholder)
  useEffect(() => {
    axios
      .post(`${window.origin}/artists`)
      .then((resp) => resp.data)
      .then((data) => setArtistList(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="hero-section" data-testid="hero-section">
        <div className="container-xl hero-container" data-testid="hero-section">
          <img
            src="https://s2.r29static.com/bin/public/be6/0,0,2000,1050/x,80/1501654/image.jpg"
            alt=""
            className="hero-image my-3"
          />
          <div className="hero-content" data-testid="hero-section">
            <h1 className="hero-title" data-testid="hero-section">
              Artfol.io - The Marketplace for artists
            </h1>
            <p data-testid="hero-section">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
              viverra dictumst posuere aliquet sem nullam in diam.
            </p>

            <div
              onClick={() => navigate("/sign-in")}
              className="btn primary-cta-btn"
              data-testid="createAccBtn"
            >
              <i className="fa-regular fa-user" data-testid="signIn"></i>
              Sign In
            </div>
            <div className="hero-btn-microcopy" data-testid="noAccount">
              Haven't got an account?&nbsp;
              <span onClick={() => navigate("/sign-in")} className="createAccountNow" data-testid="createAccBtn">
                Create one now!
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="artist-section" data-testid="artist-section">
        <div className="container-xl">
          <h2 className="artists-title" data-testid="artist-section">
            Artists
          </h2>
          <ul
            className="gallery-list has-scrollbar"
            data-testid="artist-section"
          >
            {artistList.map((artist) => (
              <ArtistCard artistData={artist} />
            ))}
          </ul>
          <div className="all-artist-btn-container">
            <div
              onClick={() => navigate("/artists")}
              className="btn secondary-cta-btn"
              data-testid="artists-btn"
            >
              <i className="me-2 fa-solid fa-user-group"></i>
              View All Artists
            </div>
          </div>
        </div>
      </section>
      {username ? null : <FooterCTA />}
    </>
  );
};

export default LandingPage;
