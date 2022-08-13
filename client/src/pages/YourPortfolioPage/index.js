import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../../actions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const YourPortfolioPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [artistToggle, changeArtistToggle] = useState(false);

  const [name, changeName] = useState(null);
  const [email, changeEmail] = useState(null);
  const [currPass, changeCurrPass] = useState(null);
  const [newPass, changeNewPass] = useState(null);
  const [genre, changeGenre] = useState(null);
  const [price, changePrice] = useState(null);
  const [description, changeDescription] = useState(null);
  const [imageVideo, changeImageVideo] = useState([]);
  const [audio, changeAudio] = useState([]);

  function handleDelete(e) {
    axios.post("/artists/delete").catch((err) => console.log(err));

    dispatch(setUsername(null));
    navigate("/");
  }

  function handleToggle(e) {
    artistToggle ? changeArtistToggle(false) : changeArtistToggle(true);
  }

  function handleName(e) {
    changeName(e.target.value);
  }

  function handleEmail(e) {
    changeEmail(e.target.value);
  }

  function handleCurrPass(e) {
    changeCurrPass(e.target.value);
  }

  function handleNewPass(e) {
    changeNewPass(e.target.value);
  }

  function handleGenre(e) {
    changeGenre(e.target.value);
  }

  function handlePrice(e) {
    changePrice(e.target.value);
  }

  function handleDescription(e) {
    changeDescription(e.target.value);
  }

  function handleAudio(e) {
    changeAudio(e.target.files);
  }

  function handleImageVideo(e) {
    changeImageVideo(e.target.files);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    const data = {
      new_data: {},
      data_types: [],
    };

    const files = Array.from(audio).concat(Array.from(imageVideo));

    if (name) {
      data["new_data"]["name"] = name;
      data["data_types"].push("name");
    }

    if (email) {
      data["new_data"]["email"] = email;
      data["data_types"].push("email");
    }

    if (currPass && newPass) {
      data["new_data"]["old_password"] = currPass;
      data["new_data"]["new_password"] = newPass;
      data["data_types"].push("password");
    }

    if (genre) {
      data["new_data"]["genre"] = genre;
      data["data_types"].push("genre");
    }

    if (price) {
      data["new_data"]["price"] = price;
      data["data_types"].push("price");
    }

    if (description) {
      data["new_data"]["description"] = description;
      data["data_types"].push("description");
    }

    if (data["data_types"].length !== 0) {
      axios.post("/artists/update", data).catch((err) => console.log(err));
    }

    if (files.length !== 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append(`files[${i}]`, files[i]);
      }
      axios
        .post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .catch((err) => console.log(err));
    }

    navigate("/dashboard");
  }

  return (
    <>
      <section
        className="your-portfolio-hero-section"
        data-testid="hero-section"
      >
        <div className="container-xl">
          <div className="your-portfolio-hero-content">
            <h1 className="your-portfolio-title">Your portfolio</h1>
            <p>On this page you can amend your portfolio.</p>
          </div>
        </div>
      </section>
      <section className="your-portfolio-body-section">
        <div className="container-xl your-portfolio-container">
          <form className="your-portfolio-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleName} />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmail}
            />
            <label htmlFor="current-password">Current Password:</label>
            <input
              type="password"
              id="current-password"
              value={currPass}
              onChange={handleCurrPass}
            />
            <label htmlFor="new-password">New Password:</label>
            <input
              type="password"
              id="new-password"
              value={newPass}
              onChange={handleNewPass}
            />
            <div className="d-flex justify-content-between">
              <label for="artist-checkbox"> I am an Artist</label>
              <input
                type="checkbox"
                id="artist-checkbox"
                name="artist-checkbox"
                onChange={handleToggle}
                value={artistToggle}
              />
            </div>
            <label htmlFor="artist-checkbox">
              As an artist, your profile will be visible on the All Artist page
              to the public{" "}
            </label>
            <div
              className={artistToggle ? "artist-form" : "artist-form hide"}
              id="artist-form"
            >
              <label htmlFor="genre">Genre:</label>
              <select value={genre} onChange={handleGenre} id="genre">
                <option></option>
                <option value="Pop">Pop</option>
                <option value="R&B">R&b</option>
                <option value="Rock">Rock</option>
                <option value="Rap">Rap</option>
              </select>

              <label htmlFor="price">Price:</label>

              <select value={price} onChange={handlePrice} id="price">
                <option></option>
                <option value="50">£50/hour</option>
                <option value="100">£100/hour</option>
                <option value="150">£150/hour</option>
                <option value="200">£200/hour</option>
              </select>
              <label htmlFor="artist-description">Description:</label>
              <input
                type="text"
                id="artist-description"
                value={description}
                onChange={handleDescription}
              />

              <label htmlFor="artist-upload-image-video">
                Upload images/or video:
              </label>
              <input
                type="file"
                id="artist-upload-imag-videoe"
                onChange={handleImageVideo}
                accept=".jpg,.jpeg,.jfif,.pjpeg,.pjp,.png,.gif,.webm,.mp4"
                multiple
              />
              <label for="artist-upload-audio">Upload audio:</label>
              <input
                type="file"
                id="artist-upload-audio"
                onChange={handleAudio}
                accept=".mp3,.wav,.ogg"
                multiple
              />
            </div>
            <button
              type="submit"
              id="update-portfolio"
              className="btn update-btn"
            >
              Update portfolio
            </button>
            <input
              type="button"
              value="Delete portfolio"
              id="delete-portfolio"
              className="btn delete-btn"
              onClick={handleDelete}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default YourPortfolioPage;
