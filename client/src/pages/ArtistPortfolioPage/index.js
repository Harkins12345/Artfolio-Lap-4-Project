import React from "react";
import { useNavigate } from "react-router-dom";
import FooterCTA from "../../components/FooterCTA";

const ArtistPortfolioPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section id="artist-intro-section">
        <div className="container-xl pt-4">
          <div className="row">
            <span
              className="back-to-all-artists"
              onClick={() => navigate("/artists")}
            >
              <i className="bi bi-arrow-left"></i>&nbsp; Back to all artists
            </span>
          </div>

          <div className="row pt-5 pb-3">
            <div className="col-8">
              <h1 className="artist-name">Artist Name</h1>
              <h2 className="artist-genre">Genre, Genre</h2>

              <h3 className="artist-price">£££££</h3>
              <div className="artist-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <span className="artist-image">
                  <i className="artist-icon bi bi-person-fill"></i>
                </span>
              </div>
              <div className="row"></div>
            </div>
          </div>
          <div className="artist-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            viverra dictumst posuere aliquet sem nullam in diam.
          </div>
          <div className="artist-btn-container">
            <div onClick={() => navigate("/")} className="btn primary-cta-btn">
              Get in touch
            </div>
          </div>
        </div>
      </section>
      <section id="artist-media">
        <div className="container-xl pt-4">
          <h2 className="artist-media-title">Check out some of my work</h2>
          <div className="row">
            <div className="col">carosel</div>
          </div>
          <div className="media-audio">
            <div className="row">
              <div className="col-2">
                <div className="play-btn">
                  <i class="bi bi-play-circle-fill"></i>
                </div>
              </div>
              <div className="col-10 audio-name">Name of audio</div>
            </div>
          </div>
        </div>
      </section>
      <section id="artist-reviews">
        <div className="container-xl artist-review-section">
          <h2 className="artist-review-title">My Reviews</h2>
          <div className="artist-stars pb-3">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <div className="artist-stars-average">Average - 4.5/5</div>
          </div>
        </div>

        <div className="container-xl py-4">
          <div className="review">
            <h4 className="review-title">Great Singer!</h4>
            <div className="review-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <div className="review-text py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
              viverra dictumst posuere aliquet sem nullam in diam.
            </div>
            <div className="review-from-name"> John Smith, London</div>
          </div>
        </div>
      </section>
      <FooterCTA />
    </>
  );
};

export default ArtistPortfolioPage;
