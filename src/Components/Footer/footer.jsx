import React from "react";
import Container from "@material-ui/core/Container";
import {
  faTwitter,
  faFacebook,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const footer = () => {
  return (
    <div className="app__footer">
      <div>
        <div className="listing">
          <div className="org-name">
            infetech
            <br />
            <div className="para1">
              We work with a passion of taking challenges and creating new ones
              in advertising sector.
            </div>
            <br />
            <FontAwesomeIcon className="twitter" icon={faTwitter} size="1.5x" />
            <FontAwesomeIcon
              className="facebook"
              icon={faFacebook}
              size="1.5x"
            />
            <FontAwesomeIcon
              className="pinterest"
              icon={faPinterest}
              size="1.5x"
            />
            <FontAwesomeIcon
              className="instagram"
              icon={faInstagram}
              size="1.5x"
            />
          </div>
          <div className="links">
            Links
            <br />
            <li className="link-list">About us</li>
            <li className="link-list">Meet our Team</li>
            <li className="link-list">News & Media</li>
            <li className="link-list">Our Projects</li>
            <li className="link-list">Contacts</li>
          </div>
          <div className="newsletter">
            Newsletter
            <h1>
              Signup for our latest news & articles. We won't give you spam
              mails.
            </h1>
            <input className="placeholder" placeholder="Email Address"></input>
            <FontAwesomeIcon
              className="paper-plane"
              icon={faPaperPlane}
              aria-hidden="true"
              size="0.3x"
            ></FontAwesomeIcon>
          </div>
          <Container className="contact">
            Contact
            <div>
              <div className="ph-icon">
                <FontAwesomeIcon
                  icon={faPhone}
                  aria-hidden="true"
                ></FontAwesomeIcon>
                <div className="ph-number">+88 (9800) 6802</div>
              </div>
              <div className="email-icon">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  aria-hidden="true"
                ></FontAwesomeIcon>
                <div className="email-id">needhelp@company.com</div>
              </div>
              <div className="location-icon">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  aria-hidden="true"
                ></FontAwesomeIcon>
                <div className="location-address">
                  88 Brooklyn Golden Road Street
                  <br />
                  New York, USA
                </div>
              </div>
            </div>
          </Container>
        </div>
        <hr />
      <div className="mt-5">
        <p className="footer_para text-center w-100">
          @All Copyright 2022 by Layerdrops.com
        </p>
      </div>
      </div>
    </div>
  );
};

export default footer;
