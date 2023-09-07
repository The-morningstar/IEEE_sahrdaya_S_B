import React from "react";
import "./styles.css"; 
import Wrapper from "../Wrapper/wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
   
    <footer className="footer font-semibold">
       <Wrapper/>
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>IEEE Sahrdaya SB</h3>
            <p>
              IEEE worlds largest
              <br /> technical professional <br />
              organisation
              <br />
            </p>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
          {/* Remove the second footer column below */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <span>
              <a href="tel:+9100000000">
                <h5>Dr. R Sunder</h5>
              </a>
            </span>
            <span>
              <a href="tel:+9100000000">
                <h5>safa abdul salam</h5>
              </a>
            </span>
            <span>
              <h5>
                <a href="mailto:ieee@sahrdaya.ac.in">ieee@sahrdaya.ac.in</a>
              </h5>
            </span>
          </div>
          {/* End of the second footer column */}
        </div>
        <div className="content">
          <p>&copy; 2023 IEEE Sahrdaya SB. All rights reserved.</p>
          <p>Developed with &nbsp;❤️ &nbsp; &nbsp;Nimble Nixan  -   Webmaster 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
