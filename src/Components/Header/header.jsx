import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faLaptopCode,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./header.css";
const header = () => {
  return (
    <>
      <div className="app__header">
        <div className="org-desc">Experience The Best IT Solutions</div>
        &nbsp;&nbsp;
        <br />
        <div className="header-info">IT Solutions & Services</div>
        <br />
        <div className="sub-info blueviolet">
          <h1>Learn More</h1>
        </div>
        <div className="previous-arrow">
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            aria-hidden="true"
          ></FontAwesomeIcon>
        </div>
        <div className="next-arrow">
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            aria-hidden="true"
          ></FontAwesomeIcon>
        </div>
      </div>
      <div class="content">
        <div className="content-img"></div>
        <div className="img1">
          <div className="client-desc">6000 Satisfied Clients</div>
        </div>
        <div className="about_company">About Our Company</div>
        <br />
        <div className="text">We're Partner of Your Inovations</div>
        <br />
        <div className="company-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro
          quos veniam ullam numquam. Eaque sequi eum, porro quasi voluptatibus
          blanditiis aperiam, quidem aliquam possimus voluptas vel temporibus!
          Sint, doloribus?
        </div>
      </div>

      <div className="dev">
        <FontAwesomeIcon
          className="dev-ico"
          icon={faLaptopCode}
          aria-hidden="true"
        ></FontAwesomeIcon>
        &nbsp; Website Development
      </div>
      <div className="networking">
        <FontAwesomeIcon
          className="networking-ico"
          icon={faNetworkWired}
          aria-hidden="true"
        ></FontAwesomeIcon>
        &nbsp; Internal Networking
      </div>
      <br />
      <br />
      <div className="content-list">
        <ul className="listing">
          <li>&#x2713;&nbsp;Exploring Version of lorem veritatis proin</li>
          <li>
            &#x2713;&nbsp;Auctor aliquet aenean simply free text veritatis quis
          </li>
          <li>&#x2713;&nbsp;Consequat ipsum nec lorem sagittis sem nibh</li>
        </ul>

        <div className="fill-box blueviolet">
          <h3>Learn More</h3>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="additional-images">
        <div className="img2">
          <h4 className="white">Perfect Solutions that business demands</h4>
        </div>
        <div className="img3">
          <h4 className="white">Perfect Solutions that business demands</h4>
        </div>
        <div className="img4">
          <h4 className="white">Perfect Solutions that business demands</h4>
        </div>
      </div>

      <div className="company-services">
        <span className="services">
          ----What We're Offering
          <br />
          <span className="IT-services">
            Dealing in all Professional IT Services
          </span>
          <p>There are many variations of passages of available but majority have
            <br /> 
            suffered
            alteration in some form, by humou or randomised words 
            <br />
            which don't look even slightly believable.
          </p>
        </span>{" "}
        <br />
        <div className="photos">
        <FontAwesomeIcon className="code" icon={faLaptopCode} aria-hidden="true"></FontAwesomeIcon>
        <div className="first-img">
          <div className="prod-desc">
          Product Development
          <br />
          <span className="sub-desc">Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
        <div className="second-img">
          <div className="prod-desc-1">
            Digital Marketing
            <br />
            <span className="sub-desc-1">Officiis laborum blanditiis.</span>
            </div>   
        </div>
        <div className="third-img">
          <div className="prod-desc-2">
            Security System
            <br />
            <span className="sub-desc-2">Illautem perspiciatis.</span>
          </div>
        </div>
        <div className="fourth-img">
          <div className="prod-desc-3">
            UI/UX Designing
            <br />
            <span className="sub-desc-3">Quia providen. Soluta, animi!</span>
          </div>
        </div>
        <div className="fifth-img">
          <div className="prod-desc-4">
            Data Analysis
            <br />
            <span className="sub-desc-4">Neque architecto nobis tempore.</span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default header;
