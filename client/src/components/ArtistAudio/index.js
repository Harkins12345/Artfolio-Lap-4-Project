import React, { useEffect, useState } from "react";

const ArtistAudio = ({ media }) => {
  const [paused, changePaused] = useState();
  const [audioPlayer, setAudioPlayer] = useState();

  useEffect(() => {
    if (media) {
      setAudioPlayer((prev) => {
        const song = new Audio(`${window.origin}/media/${media["filename"]}`);
        return song;
      });
    }
  }, []);

  function togglePause(e) {
    if (paused) {
      changePaused(false);
      audioPlayer.pause();
    } else {
      changePaused(true);
      audioPlayer.play();
    }
  }

  return (
    <div className="media-audio" data-testid="media-audio">
      <div className="row ">
        <div className="col-2">
          <div className="play-pause-btn">
            <i
              className={
                paused ? "bi bi-pause-circle-fill" : "bi bi-play-circle-fill"
              }
              onClick={togglePause}
            ></i>
          </div>
        </div>
        <div className="col-10 audio-name" data-testid="audio-name"></div>
      </div>

      <span className=" audio-name" data-testid="audio-name">
        Listen to this sample audio
      </span>
    </div>
  );
};

export default ArtistAudio;
