import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({artistData}) => {

  const navigate = useNavigate();

  function navigateToUser(e){
    navigate(`/artists/${artistData['display_username'].toLowerCase()}`)
  }

  return (

    <div className="gallery-item-artist" data-testid="artist-card">
      <img
        src="https://heavy.com/wp-content/uploads/2016/02/martin_super_bowl-e1454699147664.jpg"
        alt=""
      />

      <div className="gallery-content">
        <div className="play-genre-container">
          <div className="play-button">
            <audio controls id="audio">
              <source
                src={artistData ? `/media/${artistData['portfolio']['media'].find(media => media['contentType'].split('/')[0] === 'audio')['filename']}` : ""}
                type={artistData ? artistData['portfolio']['media'].find(media => media['contentType'].split('/')[0] === 'audio')['contentType'] : ""}
              ></source>
              Your browser does not support the audio tag.
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

        <h3 className="gallery-item-title" data-testid="artist-title">{artistData ? artistData['portfolio']['name'] : ''}</h3>
        <p className="gallery-item-description" data-testid="artist-desc">
          {artistData ? artistData['portfolio']['description'] : ''}
        </p>
        <div className="gallery-rating-price-row row">
          <div className="col">
            <div className="gallery-item-rating">4.9/5</div>
            <div className="gallery-item-price">£{artistData ? artistData['portfolio']['price'] : ''}</div>
          </div>
          <div className="col d-flex align-items-end justify-content-end">
            <div onClick={navigateToUser} className="gallery-item-view-more-link">View more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
