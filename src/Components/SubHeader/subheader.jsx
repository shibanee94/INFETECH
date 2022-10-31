import React from "react";
import "./subheader.css";
import Container from "@material-ui/core/Container";

const subheader = () => {
  return (
    <div className="app__subheader">
      <Container className="subheader-info">
        <div className="tiny-img"></div>
        <h1 className="container">We're ready develop your site!</h1>
        <div>
          <li className="subheader-lists">
            Exploring version ofloream veritatsis proin
          </li>
          <li className="subheader-lists">
            Auctor aliquet aenean simply free text veritatis quis
          </li>
          <li className="subheader-lists">
            Consequat ipsum nec lorem sagittis sem nibh
          </li>
        </div>
        <div className="small-box">Learn More</div>
      </Container>
      <div className="projects">
        <h1>---Our Completed Projects</h1>
        <h2>
          Improve & Enhance Our
          <br />
          Tech Projects
        </h2>
        <p>
          There are many variations of passages of available but majority have
          <br />
          suffered alteration in some form, by humou or randomised words
          <br />
          which don't look even slightly believable.
        </p>
      </div>
    </div>
  );
};

export default subheader;
