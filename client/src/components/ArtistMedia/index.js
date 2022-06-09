import React from "react";

const RequestCard = ({ media }) => {
  
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

export default RequestCard;
