import React from "react";
import "./aboutcomponent.css";
import pht1 from "../images/cha1.jpg";

const Aboutcomponnent = () => {
  return (
    <div>
      <div className="aboutcomponent-main">
        <div className="aboutcomponent-main-center">
          <div className="aboutcomponent-part1">
            <div className="aboutcenter"data-aos="fade-right" data-aos-duration="1500">
              <div className="fram1"></div>
              <div className="fram2"></div>
            </div>
          </div>
          <div className="aboutcomponent-part2"data-aos="fade-left" data-aos-duration="1500">
            <div className="aboutcomponent-heading1">
              <p>About us </p>
            </div>
            <div className="aboutcomponent-heading2">
              <h2>
                Your Support is Really <br />
                Powerful.
              </h2>
            </div>
            <div className="aboutcomponent-heading3">
              <p>
                The secret to happiness lies in helping others. Never <br />
                underestimate the difference YOU can make in the <br />
                lives of the poor, the abused and the helpless.
              </p>
            </div>
            <div className="aboutcomponent-heading4">
              <div className="aboutcompany-button">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcomponnent;
