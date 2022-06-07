import React from "react";
import { useNavigate } from "react-router-dom";

const GigPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section id="artist-intro">
        <div className="container-xl py-5">
          <div className="row">
            <span
              className="back-to-all-artists"
              onClick={() => navigate("/artists")}
            >
              <i className="bi bi-arrow-left"></i>&nbsp; Back to all artists
            </span>
          </div>

          <div className="row py-3">
            <div className="col-8">
              <h1 className="artist-name">Artist Name</h1>
              <h2 className="artist-genre">Genre, Genre</h2>

              <h3 className="artist-price">£££££</h3>
              <div>
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
        </div>
      </section>
    </>
  );
};

export default GigPage;
