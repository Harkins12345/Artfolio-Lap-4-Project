import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArtistCard, FooterCTA } from "../../components";

const LandingPage = () => {
  const username = useSelector((state) => state.username);

  const navigate = useNavigate();

  return (
    <>
      <section className="hero-section">
        <div className="container-xl hero-container">
          <img
            src="https://s2.r29static.com/bin/public/be6/0,0,2000,1050/x,80/1501654/image.jpg"
            alt=""
            className="hero-image my-3"
          />
          <div className="hero-content">
            <h1 className="hero-title">
              Artfol.io - The Marketplace for artists
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
              viverra dictumst posuere aliquet sem nullam in diam.
            </p>

            <div
              onClick={() => navigate("/sign-in")}
              className="btn primary-cta-btn"
            >
              <i className="fa-regular fa-user"></i>
              Sign In
            </div>
            <div className="hero-btn-microcopy">
              Haven't got an account?&nbsp;
              <span className="createAccountNow" data-testid="createAccBtn">
                Create one now!
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="artist-section">
        <div className="container-xl">
          <h2 className="artists-title">Artists</h2>
          <ul className="gallery-list has-scrollbar">
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
          </ul>
          <div className="all-artist-btn-container">
            <div
              onClick={() => navigate("/artists")}
              className="btn secondary-cta-btn"
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
