import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FooterCTA,
  ArtistAudio,
  ArtistReview,
  ArtistMedia,
} from "../../components";

const ArtistPortfolioPage = () => {
  const navigate = useNavigate();
  const [artistData, setArtistData] = useState()

  // get the artists api (with a placeholder)
  useEffect(() => {
    axios
      .post(`${window.origin}/artists/${window.location.pathname.split('/')[2]}`)
      .then((resp) => resp.data)
      .then((data) => setArtistData(data))
      .catch((err) => navigate('/artists'))
  }, []);

  return (
    <>
      <section id="artist-intro-section" data-testid="artist-intro-section">
        <div className="container-xl pt-4">
          <div className="row">
            <span
              className="back-to-all-artists"
              data-testid="back-to-all-artists"
              onClick={() => navigate("/artists")}
            >
              <i className="bi bi-arrow-left"></i>&nbsp; Back to all artists
            </span>
          </div>

          <div className="row pt-5 pb-3">
            <div className="col-8">
              <h1 className="artist-name" data-testid="artist-name">
              {artistData ? artistData['portfolio']['name'] : "Loading"}
              </h1>
              <h2 className="artist-genre" data-testid="artist-genre">
              {artistData ? artistData['portfolio']['genre'] : "Loading"}
              </h2>

              <h3 className="artist-price" data-testid="artist-price">
              £{artistData ? artistData['portfolio']['price'] : "Loading"}
              </h3>
              <div className="artist-stars" data-testid="artist-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div className="col-4">
              <div className="artist-image-availability d-flex justify-content-end me-2">
                <span className="artist-image" data-testid="artist-image">
                  <i className="artist-icon bi bi-person-fill"></i>
                </span>
                <div className="artist-availability">Available</div>
              </div>
            </div>
          </div>
          <div className="artist-intro" data-testid="artist-intro">
          {artistData ? artistData['portfolio']['description'] : "Loading"}
          </div>
          <div className="artist-btn-container">
            <div
              onClick={() => navigate("/dashboard")}
              className="btn primary-cta-btn"
            >
              Get in touch
            </div>
          </div>
        </div>
      </section>
      <section id="artist-media">
        <div className="container-xl pt-4">
          <h2 className="artist-media-title">Check out some of my work</h2>
          <div className="row">
            <div className="col">
              <ul className="gallery-list has-scrollbar mb-2">
                {artistData ? artistData['portfolio']['media'].filter(media => media['contentType'].split('/')[0] !== 'audio').map(media => <ArtistMedia media={media} />) : null}
              </ul>
            </div>
          </div>
          {artistData ? artistData['portfolio']['media'].filter(media => media['contentType'].split('/')[0] === 'audio').map((media, index) => <ArtistAudio media={media} player={index} />) : null}
        </div>
      </section>
      <section id="artist-reviews">
        <div className="artist-review-section">
          <div className="container-xl">
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
        </div>

        <div className="container-xl">
          <ArtistReview />
          <ArtistReview />
        </div>
      </section>
      <FooterCTA />
    </>
  );
};

export default ArtistPortfolioPage;
