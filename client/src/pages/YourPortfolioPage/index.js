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
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label for="current-password">Current Password:</label>
            <input
              type="password"
              id="current-password"
              name="current-password"
            />
            <label for="new-password">New Password:</label>
            <input type="passwrod" id="new-password" name="new-password" />
            <div className="d-flex justify-content-between">
              <label for="artist-checkbox"> I am an Artist</label>
              <input
                type="checkbox"
                id="artist-checkbox"
                name="artist-checkbox"
                value="arist"
              />
            </div>
            <label for="artist-checkbox">
              As an artist, your profile will be visible on the All Artist page
              to the public{" "}
            </label>
            <div className="artist-form">
              <label for="genre">Genre:</label>

              <select name="genre" id="genre">
                <option value="pop">Pop</option>
                <option value="rnb">R&b</option>
                <option value="rock">Rock</option>
                <option value="rap">rap</option>
              </select>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default YourPortfolioPage;
