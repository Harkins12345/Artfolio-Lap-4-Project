import React, { useState, useEffect } from "react";
import { default as Layout } from "../../layouts";
// import "./styles.css";
import axios from "axios";

const AllArtistsPage = () => {
  const [artistList, setArtistList] = useState([]);

  // get the artists api (with a placeholder)
  useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(resp => resp.data)
      .then(data => setArtistList([...data]))
      .catch(err => console.log(err))
      
  }, [])

    // render artists
    const renderArtists = () => {
      // get genre, get audio, get name, get location, get description, get price, get link to the artist
      const genre = artistList;
      const audioDemo = artistList;
      const artistName = artistList;
      const artistLocation = artistList;
      const artistDescription = artistList;
      const artistPrice = artistList;

      return (
        <div className="artist-card" data-testid="artist-card">
          <div className="artist-image-card" data-testid="artist-image">
            <div className="play-button">
              <audio id="audio">
                <source
                  src="https://www.w3schools.com/html/horse.mp3"
                  type="audio/mpeg"
                ></source>
                <source
                  src="https://www.w3schools.com/html/horse.ogg"
                  type="audio/ogg"
                ></source>
              </audio>
              <button type="button" className="no-effect-btn">
                <div className="play-btn">
                  <h1 class="bi bi-play-circle-fill"></h1>
                  {/* <h1 class="bi bi-pause-circle-fill"></h1> */}
                </div>
              </button>
            </div>
            <div className="flair-section" data-testid="flair-section">
              <p>Rock</p>
            </div>
          </div>
          <div className="artist-information">
            <h3>Incredible Singer John</h3>
            <h4>Location: London</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ante efficitur, consectetur arcu et, tincidunt sem. Aenean varius
              velit ex, non venenatis lorem porta ut. Donec vitae tellus ornare,
              sagittis metus vel, fringilla mauris. Donec sodales diam interdum,
              pretium est eget, tristique diam. Quisque sed nisi tortor. Aliquam
              non pellentesque arcu, a venenatis odio. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </p>
            <div className="artist-info-box">
              <div className="artist-pricing">£50-60/hour</div>
              <div className="artist-view-more">
                <a href="artists/prop">View more</a>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
  return (
    <div>
      {/* section for description */}
      <div className="main-section" data-testid="main-section">
        <div className="main-text">
          <h1>Artists hideout</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            ante efficitur, consectetur arcu et, tincidunt sem. Aenean varius
            velit ex, non venenatis lorem porta ut. Donec vitae tellus ornare,
            sagittis metus vel, fringilla mauris. Donec sodales diam interdum,
            pretium est eget, tristique diam. Quisque sed nisi tortor. Aliquam
            non pellentesque arcu, a venenatis odio. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p>
            Proin at mi ipsum. Proin ut convallis ligula. Nunc porta a urna vel
            imperdiet. Maecenas velit nisl, condimentum a pretium vel, venenatis
            id ligula. Nunc aliquet at lacus sit amet tincidunt. Ut posuere,
            risus in facilisis rutrum, neque velit venenatis mauris, in dapibus
            massa diam vulputate quam. Vivamus commodo vitae justo ac feugiat.
            Curabitur sagittis luctus finibus. Vestibulum id nunc at arcu
            posuere laoreet. Maecenas sit amet ultrices orci, sed malesuada
            magna. Nullam facilisis sapien non bibendum tincidunt. Suspendisse
            ut scelerisque ex, eget porta urna. Aenean scelerisque, arcu ut
            viverra aliquet, elit augue facilisis nibh, ac tincidunt nibh diam
            vitae libero. Nam faucibus ex ut ipsum pharetra egestas. Nulla
            venenatis sapien sed mi sagittis, in consectetur diam pellentesque.
          </p>
        </div>
      </div>

      {/* section for each artist */}
      <div className="artist-list" data-testid="artist-list">
        {/* {sortingArtist()} */}
        <div className="sort-drop">
          <form id="sort-drop">
            <label htmlFor="sort-drop">Sort by: </label>
            <select name="sort-drop" id="sort-drop-list">
              <option value="new">New artists</option>
              <option value="alphabet">Alphabet</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllArtistsPage;
