import React from "react";

const ArtistReview = () => {
  return (
    <div className="review">
      <h4 className="review-title">Great Singer!</h4>
      <div className="review-stars">
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
      </div>
      <div className="review-text py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
        viverra dictumst posuere aliquet sem nullam in diam.
      </div>
      <div className="review-from-name"> John Smith, London</div>
    </div>
  );
};

export default ArtistReview;
