import React from "react";

const YourPortfolioPage = () => {
  return (
    <>
      <section className="your-portfolio-hero-section">
        <div className="container-xl">
          <div className="your-portfolio-hero-content">
            <h1 className="your-portfolio-title">Your portfolio</h1>
            <p>On this page you can amend your portfolio.</p>
          </div>
        </div>
      </section>
      <section className="your-portfolio-body-section">
        <div className="container-xl">
          <form className="your-portfolio-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="current-password">Current Password:</label>
            <input
              type="password"
              id="current-password"
              name="current-password"
            />
            <label htmlFor="new-password">New Password:</label>
            <input type="password" id="new-password" name="new-password" />
            <div className="d-flex justify-content-between">
              <label for="artist-checkbox"> I am an Artist</label>
              <input
                type="checkbox"
                id="artist-checkbox"
                name="artist-checkbox"
                value="isArtist"
              />
            </div>
            <label htmlFor="artist-checkbox">
              As an artist, your profile will be visible on the All Artist page
              to the public{" "}
            </label>
            <div className="artist-form" id="artist-form">
              <label htmlFor="genre">Genre:</label>
              <select name="genre" id="genre">
                <option></option>
                <option value="pop">Pop</option>
                <option value="rnb">R&b</option>
                <option value="rock">Rock</option>
                <option value="rap">Rap</option>
              </select>

              <label htmlFor="price">Price:</label>

              <select name="price" id="price">
                <option></option>
                <option value="50">£50/hour</option>
                <option value="100">£100/hour</option>
                <option value="1550">£150/hour</option>
                <option value="200">£200/hour</option>
              </select>
              <label htmlFor="artist-description">Description:</label>
              <input
                type="text"
                id="artist-description"
                name="artist-description"
              />

              <label htmlFor="artist-upload-image-video">
                Upload images/or video:
              </label>
              <input
                type="file"
                id="artist-upload-imag-videoe"
                name="artist-upload-image-video"
              />
              <label for="artist-upload-audio">Upload audio:</label>
              <input
                type="file"
                id="artist-upload-audio"
                name="artist-upload-audio"
              />

              <input
                type="button"
                value="Update portfolio"
                id="update-portfolio"
                className="btn update-btn"
              />
              <input
                type="button"
                value="Delete portfolio"
                id="delete-portfolio"
                className="btn delete-btn"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default YourPortfolioPage;
