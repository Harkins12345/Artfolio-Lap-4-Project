import React from "react";

const ArtistAudio = () => {
  return (
    <div className="media-audio" data-testid="media-audio">
      <div className="row ">
        <div className="col-2">
          <div className="play-btn">
            <i className="bi bi-play-circle-fill"></i>
          </div>
        </div>
        <div className="col-10 audio-name" data-testid="audio-name">
          Name of audio
        </div>
      </div>
    </div>
  );
};

export default ArtistAudio;
