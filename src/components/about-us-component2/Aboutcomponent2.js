import React from "react";
import "./aboutcomponent2.css";
import { MdVerifiedUser } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";

const Aboutcomponent2 = () => {
  return (
    <>
    <div className="about-component2-width" >
      <div className="aboutcomponent2-main">
        <div className="aboutcomponent2-part2">
          <div className="aboutcomponentcenter3"data-aos="fade-right" data-aos-duration="1500">
            <div className="aboutcomponent2-heading1">
              <p>Welcome to Charity</p>
            </div>
            <div className="aboutcomponent2-heading2">
              <h2>
                Let Us Come Together <br />
                To Make a Difference
              </h2>
            </div>
            <div className="aboutcomponent2-heading3">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam <br />
                nonumy tempor invidunt ut labore et dolore magna aliquyam <br />
                erat, sed diam voluptua. At vero eos et accusam et justo.
              </p>
            </div>
            <div className="aboutcomponent2boxes">
              <div className="box1">
                <div className="box1-heading">
                  <div className="box1-icon">
                    <MdVerifiedUser id="set-icon1" />
                  </div>
                  <div className="box1-head">
                    <p>Our mission</p>
                  </div>
                </div>
                <div className="box1-details">
                  <p>
                    Lorem ipsum dolor sit amet, <br />
                    consetetur sadipscing elitr,
                    <br />
                    sed diam
                  </p>
                </div>
              </div>
              <div className="box2">
                <div className="box1-heading">
                  <div className="box1-icon">
                    <MdVerifiedUser id="set-icon1" />
                  </div>
                  <div className="box1-head">
                    <p>Our vission</p>
                  </div>
                </div>
                <div className="box1-details">
                  <p>
                    Lorem ipsum dolor sit amet, <br />
                    consetetur sadipscing elitr,
                    <br />
                    sed diam
                  </p>
                </div>
              </div>
            </div>
            <div className="donation">
                <p>Donation</p>
            </div>
            <div className="aboutcomponent2-heading4">
              <ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted3"
                labelClassName="label"
              />
            </div>
            <div className="donation">
                <p>Medical Help</p>
            </div>
            <div className="aboutcomponent2-heading4">
              <ProgressBar
                completed={90}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted2"
                labelClassName="label"
              />
            </div>
          </div>
        </div>
        <div className="aboutcomponent2-part1">
          <div className="aboutcenter2"data-aos="fade-left" data-aos-duration="1500">
            <div className="fram11"></div>
            <div className="fram22">
              <ul>
                <li id="li-1">Together, we're going to make the future</li>
                <li>children where we are able to fulfill all</li>
                <li>
                  their requirements to keep them safe <br />
                  from withered world
                </li>
                <li>
                  We have already stepped out and <br />
                  start changing the world
                </li>
                <li>Keeping safe them from war, inhumanity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Aboutcomponent2;
