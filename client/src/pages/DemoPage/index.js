import React from "react";
import { useNavigate } from "react-router-dom";

const DemoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="container-xl py-5">
        <h1>Artfol.io is a demo app</h1>
        <h2>This page does not currently exist</h2>
        <span className="back-btn" onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left"></i>&nbsp; Back to previous page
        </span>
      </section>
    </>
  );
};

export default DemoPage;
