import React, {useState} from "react";

const ArtistAudio = ({ media }) => {

  const [paused, changePaused] = useState();
  const [song, setSong] = useState();

  function togglePause(e){
    if (paused){
      changePaused(false)
    } else {
      changePaused(true)
    }
    paused ? changePaused(false) : changePaused(true)
  }

  return (
    <div className="media-audio" data-testid="media-audio">
      <div className="row ">
        <div className="col-2">
          <div className="play-btn">
            <i className={paused ? "bi bi-play-circle-fill" : "bi bi-pause-circle-fill"} onClick={togglePause}></i>
          </div>
        </div>
        <div className="col-10 audio-name" data-testid="audio-name">
          <audio controls>
            <source src={media ? `/media/${media['filename']}` : ''}
             type={media ? media['contentType'] : ''} />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default ArtistAudio;
