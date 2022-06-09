import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({artistData}) => {

  const navigate = useNavigate();

  const [paused, changePaused] = useState();
  const [audioPlayer, setAudioPlayer] = useState();

  useEffect(() => {
    if(artistData){
      setAudioPlayer(prev => {
        const song = new Audio(`${window.origin}/media/${artistData['portfolio']['media'].find(media => media['contentType'].split('/')[0] === 'audio')['filename']}`)
        return song
      })
    }
  }, [])

  function togglePause(e) {
    if (paused) {
      changePaused(false)
      audioPlayer.pause()
    } else {
      changePaused(true)
      audioPlayer.play()
    }
  }

  function navigateToUser(e){
    navigate(`/artists/${artistData['display_username'].toLowerCase()}`)
  }

  return (

    <div className="gallery-item-artist" data-testid="artist-card">
      <img
        src={`/media/${artistData['portfolio']['media'].find(media => media['contentType'].split('/')[0] === 'image')['filename']}`}
        alt="Artist Photo"
      />

      <div className="gallery-content">
        <div className="play-genre-container">
          <div className="play-button">
            <div className="play-pause-btn">
            <i className={paused ? "bi bi-pause-circle-fill" : "bi bi-play-circle-fill"} onClick={togglePause}></i>
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
