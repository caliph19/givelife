import React from "react";
import "./contant.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="contact-page">
        <div className="contact-page-img">
        <div className="bg2-image1-center">
            <ul className="breadcrumb">
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <strong>
                <NavLink to="/contact">Contact</NavLink>
              </strong>
            </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contact-part2">
        <div className="contact-part2-center">
          <div className="contact-part2-text">
            <div className="contact-part2-heading1">
              <p>Get in Touch</p>
            </div>
            <div className="contact-part2-heading2">
              <h5>Send me a message</h5>
            </div>
          </div>
          <div className="contact-part2-form">
            <div className="contact-part2-form-left">
              <div className="contact-row1">
                <div className="contact-name">
                  <div className="contact-name-title">First Name</div>
                  <div className="contact-name-input">
                    <input type="text" placeholder="Your" />
                  </div>
                </div>
                <div className="contact-name">
                  <div className="contact-name-title">Last Name</div>
                  <div className="contact-name-input">
                    <input type="text" placeholder="Name" />
                  </div>
                </div>
              </div>
              <div className="contact-row1">
                <div className="contact-name">
                  <div className="contact-name-title">Mail</div>
                  <div className="contact-name-input">
                    <input type="text" placeholder="Your Mail" />
                  </div>
                </div>
                <div className="contact-name">
                  <div className="contact-name-title">Phone</div>
                  <div className="contact-name-input">
                    <input type="number" placeholder="+880" />
                  </div>
                </div>
              </div>
              <div className="contact-row3">
                <div className="contact-massage">
                  <div className="contact-name-title3">Massage</div>
                  <div className="contact-name-massage">
                    <textarea
                      type="text"
                      placeholder="Type Your Massage Here"
                    />
                  </div>
                </div>
              </div>
              <div className="contact-last-button">
            <button>Send Massage</button>
        </div>
            </div>
            <div className="contact-part2-form-right">
              <div className="contact-part2-form-right-center">
                <div className="contact-part2-form-right-heading1">
                  <h2>Address</h2>
                </div>
                <div className="contact-part2-form-right-heading2">
                  <p>
                    Quam elementum pulvinar etiam non quam lacus <br />
                    suspendisse.A scelerisque purus semper eget duis at <br />
                    Lobortisscelerisque fermentum dui faucibus in ornare....
                  </p>
                </div>
                <div className="contact-part2-form-right-heading3">
                  <div className="contact-heading3-p1">
                    <p>
                      <strong> Location :</strong> 4517 Washington Ave.
                      Manchester, <br /> Kentucky 39495
                    </p>
                  </div>
                  <div className="contact-heading3-p2">
                    <p>
                      <strong> Phone :</strong> +88544767456
                    </p>
                  </div>
                  <div className="contact-heading3-p3">
                    <p>
                      <strong> Email :</strong> givelifecharity@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
