import React, { useEffect } from "react";

import "./home.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Aboutcomponnent from "../../components/about-us-component/Aboutcomponnent";
import Aboutcomponent2 from "../../components/about-us-component2/Aboutcomponent2";
import Slidertwo from "../../components/caousel two/Slider";
import Cardcomponent from "../../components/card-component1/Cardcomponent";
import Cardslider2 from "../../components/card-sider2/Cardslider2";
import Cardslider3 from "../../components/card-sider3/Cardslider3";
// import Sliderthree from "../../components/carousel three";
import { AiOutlineArrowUp } from "react-icons/ai";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  function scrolltotop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="bg-top">
        <div className="bg-image1">
          <div className="bg-image1-center">
            <div className="hero-heading1" data-aos="fade-up">
              <p>give hope for homeless</p>
            </div>
            <div
              className="hero-heading2"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>
                Helping each other <br />
                can make world better
              </h1>
            </div>
            <div className="hero-heading3" data-aos="fade-top">
              <p>
                We Seek out world changers and difference makers around the{" "}
                <br />
                globe,and equip them to fulfill their unique purpose.
              </p>
            </div>
            <div className="hero-heading4">
              <div className="hero-heading4-btn1">
                <button id="button-1" data-aos="fade-right">
                  Donate now
                </button>
              </div>
              <div className="hero-heading4-btn2">
                <button id="button-2" data-aos="fade-left">
                  Know About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-part-2">
        <Aboutcomponnent />
      </div>
      <div className="home-part-3">
        <Aboutcomponent2 />
      </div>

      <div className="slider">
        <Slidertwo />
      </div>
      <div className="card1">
        <Cardcomponent />
      </div>
      <div className="home-part-4">
        <div className="home-part4-center">
          <div
            className="home-part-4-text"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="home-heading1">
              <p>Latest Causes </p>
            </div>
            <div className="home-heading2">
              <h2>
                Your Support is Really <br />
                Powerful.
              </h2>
            </div>
          </div>
          <div className="home-part-4-slider">
            <Cardslider2 />
          </div>
        </div>
      </div>
      <div className="scrolltop" onClick={scrolltotop}>
        <AiOutlineArrowUp />
      </div>
      {/* <div className="home-part-5-slider">
        <Cardslider3 />
      </div> */}
    </>
  );
};

export default Home;
