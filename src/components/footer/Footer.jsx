import React from "react";
import "./footer.css";
import logo11 from "../images/logo.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="footer-main">
        <div className="footer-main-center">
          <div className="footer-row1">
            <div className="foter-row1-cntr">
              <div className="footer-logo">
                <img src={logo11} id="set-logo11" />
              </div>
              <div className="footer-row1-col2">10k</div>
              <div className="footer-row1-col3">
                <h5>
                  Worldwide Client <br />
                  Already Connected
                </h5>
              </div>
            </div>
          </div>
          <div className="footer-row2">
            <div className="footer-row2-heading">
              <h6>Quick Link</h6>
            </div>
            <div className="footer-row2-ul">
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Blog Post </li>
                <li>Photo gallery</li>
              </ul>
            </div>
          </div>
          <div className="footer-row3">
            <div className="footer-row3-heading">
              <h6>Get In Touch</h6>
            </div>
            <div className="footer-row2-ul">
              <ul>
                <li>Contact us</li>
                <li>Our services</li>
              </ul>
            </div>
          </div>
          <div className="footer-row4">
            <div className="footer-row3-heading">
              <h6>Address</h6>
            </div>
            <div className="footer-row4-detail">
              <p>
                2464 Royal Ln. Mesa, New <br />
                Jersey 45463
              </p>
            </div>
          </div>
          <div className="footer-row5">
            <div className="footer-row3-heading">
              <h6>Newsletter</h6>
            </div>
            <div className="footer-input">
              <div className="footer-input-center">
                <div className="footer-input1">
                  <input
                    type="text "
                    placeholder="Enter Your Emali"
                    id="set-footer-input"
                  />
                </div>
                <div className="footer-subscribe-button">
                  <button>Subscribe</button>
                </div>
              </div>
              <div className="footer-row5-detail">
                <p>Your email is safe with us,we dont spam.</p>
              </div>
              <div className="footer-follow">
                <h6>Follow Me</h6>
              </div>
              <div className="footer-icons">
                <div className="footer-icon1">
                  <button>
                    <AiOutlineTwitter id="set-footer-icons" />
                  </button>
                </div>
                <div className="footer-icon2">
                  <button>
                    <AiFillInstagram id="set-footer-icons" />
                  </button>
                </div>
                <div className="footer-icon3">
                  <button>
                    <AiFillYoutube id="set-footer-icons" />
                  </button>
                </div>
                <div className="footer-icon4">
                  <button>
                    <BsFacebook id="set-footer-icons" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
    </div>
  );
};

export default Footer;
