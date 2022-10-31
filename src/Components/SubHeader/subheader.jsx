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
      <Container className="projects-img">
        <div className="p-img1">
          <h4 className="pic">
            Tech Solutions
            <br />
            <span className="DI">DESIGN/IDES</span>
          </h4>
        </div>
        <div className="p-img2">
          <h4 className="pic">
            Smart Visions
            <br />
            <span className="DI">DESIGN/IDES</span>
          </h4>
        </div>
        <div className="p-img3">
          <h4 className="pic">
            Platform Integration
            <br />
            <span className="DI">DESIGN/IDES</span>
          </h4>
        </div>
        <div className="p-img4">
          <h4 className="pic">
            Web Development
            <br />
            <span className="DI">DESIGN/IDES</span>
          </h4>
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr />
        <div className="sub-footer w-100">
          <span className="ofc-name">envato</span>
          <span className="ofc-name">envato</span>
          <span className="ofc-name">envato</span>
          <span className="ofc-name">envato</span>
          <span className="ofc-name">envato</span>
        </div>
      </Container>
    </div>
  );
};

export default subheader;
