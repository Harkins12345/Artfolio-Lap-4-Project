import React from "react";

const ArtistReview = () => {
  return (
    <div className="review" data-testid="review">
      <h4 className="review-title" data-testid="review-title">
        Great Singer!
      </h4>
      <div className="review-stars" data-testid="review-stars">
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
      </div>
      <div className="review-text py-2" data-testid="review-text">
        They were great, loved their performance! Loved how they sang "Never gonna give you up" out of the blue, I will hire them again for the next event!
      </div>
      <div className="review-from-name" data-testid="review-from-name">
        {" "}
        John Smith, London
      </div>
    </div>
  );
};

export default ArtistReview;
