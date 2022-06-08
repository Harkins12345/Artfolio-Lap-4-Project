import React from "react";

const ArtistCard = () => {
  return (

    <div className="gallery-item-artist" data-testid="artist-card">
      <img
        src="https://heavy.com/wp-content/uploads/2016/02/martin_super_bowl-e1454699147664.jpg"
        alt=""
      />

      <div className="gallery-content">
        <div className="play-genre-container">
          <div className="play-button">
            <audio id="audio">
              <source
                src="https://www.w3schools.com/html/horse.mp3"
                type="audio/mpeg"
              ></source>
              <source
                src="https://www.w3schools.com/html/horse.ogg"
                type="audio/ogg"
              ></source>
            </audio>

            <div className="play-pause-btn">
              <i className="bi bi-play-circle-fill"></i>
              <i className="bi bi-pause-circle-fill hide"></i>
            </div>
          </div>
          <div className="artist-genre-container">
            <span className="artist-genre">Rock</span>
          </div>
        </div>

        <h3 className="gallery-item-title" data-testid="artist-title">Lorem ipsum dolor sit amet.</h3>
        <p className="gallery-item-description" data-testid="artist-desc">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
        <div className="gallery-rating-price-row row">
          <div className="col">
            <div className="gallery-item-rating">4.9/5</div>
            <div className="gallery-item-price">£00.00</div>
          </div>
          <div className="col d-flex align-items-end justify-content-end">
            <div className="gallery-item-view-more-link">View more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
