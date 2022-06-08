import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ArtistCard } from "../../components";

const AllArtistsPage = () => {
  const username = useSelector((state) => state.username);
  const [artistList, setArtistList] = useState([]);

  // get the artists api (with a placeholder)
  useEffect(() => {
    axios
      .post(`${window.origin}/artists`)
      .then((resp) => resp.data)
      .then((data) => setArtistList([...data]))
      .catch((err) => console.log(err))
    
    console.log(artistList)
  }, []);


  return (
    <>
      <div className="all-artists-section" data-testid="main-section">
        <div className="container-xl">
          <div className="all-artist-hero-content">
            <h1 className="all-artist-title">All Artists</h1>
            <p>
              We have a wide range of Artists at Artfol.io. You can view them
              all below or use our sorting feature to sort the Artists to your
              preference.
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className="container-xl pb-5 all-artist-gallery-list">
          <div className="sort-drop py-3">
            <form id="sort-drop">
              <label htmlFor="sort-drop">Sort by:&nbsp;</label>
              <select
                name="sort-drop"
                className="btn sort-drop-list"
                id="sort-drop-list"
              >
                <option value="new">New artists</option>
                <option value="popular">
                  Popular artists&nbsp;(ascending)
                </option>
                <option value="alphabet">Alphabetical&nbsp;(ascending)</option>
                <option value="price">Price&nbsp;(ascending)</option>
                <option value="rating">Rating&nbsp;(ascending)</option>
              </select>
            </form>
          </div>
          <div className="gallery-all-list">
            {artistList.map(artist => <ArtistCard artistData={artist}/>)}
          </div>

        </div>
      </section>

      {/* {username ? null : <FooterCTA />} */}
    </>
  );
};

export default AllArtistsPage;
