import React from "react";

<<<<<<< HEAD
const RequestCard = ({ media }) => {
  
=======
const ArtistMedia = ({ media }) => {
>>>>>>> c702e8d5ae1baa2bce0b3ba1954eec9d7bce222b
  return (
    <li data-testid="artist-media">
      <div className="gallery-item-artist-media" data-testid="artist-media">
        <img
          src={media ? `/media/${media["filename"]}` : ""}
          alt="Artist Photo"
        />
      </div>
    </li>
  );
};

export default ArtistMedia;
