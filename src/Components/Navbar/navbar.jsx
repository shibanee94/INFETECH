import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faEnvelope,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./navbar.css";

const navbar = () => {
  return (
    <div className="app__navbar">
      <div className="org-name">Infetech</div>
      <div className="desc">
        Welcome to IT Solution & Services Wordpress Theme
        <div className="mail-id">
          <FontAwesomeIcon
            className="mail-icon"
            icon={faEnvelope}
            aria-hidden="true"
          ></FontAwesomeIcon>
          &nbsp; needhelp@company.com
        </div>
        <div className="contact-hours">
          <FontAwesomeIcon icon={faClock} aria-hidden="true"></FontAwesomeIcon>
          &nbsp;
          <div className="time">Mon-Sat:8.00am-7.00pm </div>
        </div>
        <div className="social-media">
          <div className="social-media-icons">
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
        </div>
        <hr />
        <div>
          <ul className="app__navbar-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li className="p__opensans">
              <a href="#aboutus">About Us</a>
            </li>
            <li className="p__opensans">
              <a href="#Pages">Pages</a>
            </li>
            <li className="p__opensans">
              <a href="#Services">Services</a>
            </li>
            <li className="p__opensans">
              <a href="#Projects">Projects</a>
            </li>
            <li className="p__opensans">
              <a href="#Blog">Blog</a>
            </li>
            <li className="p__opensans">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="search-icon" placeholder="Search">
          <FontAwesomeIcon icon={faSearch} aria-hidden="true"></FontAwesomeIcon>
        </div>
        <div className="fa-ShoppingCart">
          <FontAwesomeIcon
            icon={faShoppingCart}
            aria-hidden="true"
          ></FontAwesomeIcon>
        </div>
        &nbsp;
        <div className="contact-number">
          <FontAwesomeIcon
            className="contact-number-icon"
            icon={faPhone}
            aria-hidden="true"
          ></FontAwesomeIcon>
          &nbsp; +88 (9800) 6802
        </div>
      </div>
      {/* {toggle && (
       <div className="app__navbar-smallscreen">
         <Hamburger color="#fff" fontsize={27} onClick={() => setToggle(true) } />
         <ul className="app__navbar-smallscreen-links">
         <li className="p__opensans"><a href="#home">Home</a></li>
         <li className="p__opensans"><a href="#aboutus">About Us</a></li>
         <li className="p__opensans"><a href="#services">Services</a></li>
         <li className="p__opensans"><a href="#courses">Courses</a></li>
         <li className="p__opensans"><a href="#contact">Contact Us</a></li>
        </ul>
       </div>
      )} */}
    </div>
  );
};

export default navbar;
//   )

//         {/* {toggle && (
//       <div className="app__navbar-smallscreen">
//         <Hamburger color="#fff" fontsize={27} onClick={() => setToggle(true) } />
//         <ul className="app__navbar-smallscreen-links">
//         <li className="p__opensans"><a href="#home">Home</a></li>
//         <li className="p__opensans"><a href="#aboutus">About Us</a></li>
//         <li className="p__opensans"><a href="#services">Services</a></li>
//         <li className="p__opensans"><a href="#courses">Courses</a></li>
//         <li className="p__opensans"><a href="#contact">Contact Us</a></li>
//        </ul>
//        </div>
//       )} */}

// }; */}
