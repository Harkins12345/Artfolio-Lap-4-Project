import React from "react";

const ArtistMedia = ({ media }) => {

  if (media['contentType'].split('/')[0] === 'image') {
    return (
      <li data-testid="artist-media">
        <div className="gallery-item-artist-media" data-testid="artist-media">
          <img
            src={media ? `/media/${media['filename']}` : ''}
            alt="Artist Photo"
          />
        </div>
      </li>
    )
  } else {
    return (
      <li data-testid="artist-media">
        <div className="gallery-item-artist-media" data-testid="artist-media">
          <video width="auto" height="auto" controls>
            <source src={media ? `/media/${media['filename']}` : ''}
              type={media ? media['contentType'] : ''} />
            Your browser does not support the video tag.
          </video>
        </div>
      </li>
    )
  }
};

export default ArtistMedia;
