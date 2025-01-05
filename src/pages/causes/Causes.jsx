import React from "react";
import "./causes.css";
import data from "./causesdata";
import ProgressBar from "@ramonak/react-progress-bar";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";


const Causes = () => {
  function scrolltotop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <div className="causes-main">
        <div className="causes-left">
        <div className="bg2-image1-center">
            <ul className="breadcrumb">
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <strong>
                <NavLink to="/causes">Causes</NavLink>
              </strong>
            </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="causes-part1">
        <div className="causes-part1-center">
          {data.map((el) => {
            return (
              <>
                <div className="cause-card1"  data-aos="fade-top" data-aos-duration="2000">
                  <div className="cause-image">
                    <img id="set-cause-image" src={el.causeimg1} />
                  </div>
                  <div className="cause-card-bottom">
                    <div className="cause-card-center">
                      <div className="cause-heading1">
                        <p>{el.heading1}</p>
                      </div>
                      <div className="cause-heading2">
                        <h2>{el.heading2}</h2>
                      </div>
                      <div className="cause-heading3">
                        <p>{el.heading3}</p>
                      </div>
                      <div className="causes-donation">
                        <p>Donation</p>
                      </div>
                      <div className="causes-heading4">
                        <ProgressBar
                          style={{ width: el.percent }}
                          completed={el.percent}
                          className="wrapper3"
                          barContainerClassName="container"
                          completedClassName="barCompleted3 "
                          labelClassName="label"
                        />
                      </div>
                      <div className="causes-heading5">
                        <div className="causes-raised">Raised:{el.raised}</div>
                        <div className="causes-goals">Goal:{el.goal }</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="scrolltop" onClick={scrolltotop}>
        <AiOutlineArrowUp />
      </div>
    </div>
  );
};

export default Causes;
