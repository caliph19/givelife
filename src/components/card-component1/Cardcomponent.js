import React from "react";
import "./cardcomponent.css";
import { PiHandshakeFill } from "react-icons/pi";
import { FaPeopleCarry } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";
import { FaGlobeAfrica } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Cardcomponent = () => {
  return (
    <>
      <div className="card-component-main">
        <div className="card-component-center">
          <div className="Cardcomponent-heading1"  data-aos="fade-right" data-aos-duration="1000">
            <div className="Cardcomponent-heading1-center">
            <p>Our Fun Facts</p>
            </div>
          </div>
          <div className="Cardcomponent-heading2" data-aos="fade-right" data-aos-duration="1000">
            <div className="Cardcomponent-heading2-center">
            <h2>
              We Believe that We can Save <br />
              More Lifes with you
            </h2>
            </div>
          </div>
          <div className="Cardcomponent-heading3" >
            <div className="cardcomponent-heading3-center">
              <div className="card-icon1"data-aos="fade-up" data-aos-duration="1000">
                <div className="card-icon">
                  <PiHandshakeFill />
                </div>
                <div className="card-number">4597+</div>
                <div className="card-detail">
                  <p>People rised</p>
                </div>
              </div>
              <div className="card-icon2"data-aos="fade-up" data-aos-duration="1500">
                <div className="card-icon">
                  <FaPeopleCarry />
                </div>
                <div className="card-number">8945+</div>
                <div className="card-detail">
                  <p>Volunteer</p>
                </div>
              </div>
              <div className="card-icon3"data-aos="fade-up" data-aos-duration="2000">
                <div className="card-icon">
                  <GiHummingbird />
                </div>
                <div className="card-number">10M+</div>
                <div className="card-detail">
                  <p>poor People Saved</p>
                </div>
              </div>
              <div className="card-icon4"data-aos="fade-up" data-aos-duration="2500">
                <div className="card-icon">
                  <FaGlobeAfrica />
                </div>
                <div className="card-number">100+</div>
                <div className="card-detail">
                  <p>Country Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardcomponent;
