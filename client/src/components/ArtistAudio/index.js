import React from "react";

const ArtistAudio = () => {
  return (
    <div className="media-audio" data-testid="media-audio">
      <div className="play-pause-btn">
        <i className="bi bi-play-circle-fill"></i>
        <i className="bi bi-pause-circle-fill hide"></i>
      </div>

      <span className=" audio-name" data-testid="audio-name">
        Name of audio
      </span>
    </div>
  );
};

export default ArtistAudio;
