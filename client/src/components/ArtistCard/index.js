import React from "react";

const ArtistCard = () => {
  return (
    <li>
      <div className="gallery-item-artist">
        <img
          src="https://heavy.com/wp-content/uploads/2016/02/martin_super_bowl-e1454699147664.jpg"
          alt=""
        />
        <div className="gallery-content">
          <h3 className="gallery-item-title">Lorem ipsum dolor sit amet.</h3>
          <p className="gallery-item-description">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
          <div className="gallery-rating-price-row">
            <div className="gallery-item-rating">4.9</div>
            <div className="gallery-item-price">£00.00</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ArtistCard;
