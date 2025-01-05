import React from "react";
import "./about.css";
import Aboutcomponnent from "../../components/about-us-component/Aboutcomponnent";
import Aboutcomponent2 from "../../components/about-us-component2/Aboutcomponent2";
import Cardcomponent from "../../components/card-component1/Cardcomponent";
import Slidertwo from "../../components/caousel two/Slider";
import Iconscomponent from "../../components/icons-component/Iconscomponent";
import abimg3 from "../images/3.jpg";
import abimg4 from "../images/4.jpg";
import abimg5 from "../images/5.jpg";
import abimg6 from "../images/6.jpg";
import abimg7 from "../images/7.jpg";
import abimg8 from "../images/8.jpg";
import abimg9 from "../images/9.jpg";
import { FaHome } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";

const About = () => {
  function scrolltotop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <div className="bg2-top">
        <div className="bg2-image1">
          <div className="bg2-image1-center">
            <ul className="breadcrumb">
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <strong>
                <NavLink to="/About">About</NavLink>
              </strong>
            </li>
            </ul>
          </div>
        </div>
        <div className="bg-text">
          <div className="bg2-txt -center"></div>
        </div>
      </div>
      <div className="about-part1">
        <Aboutcomponnent />
      </div>
      <div className="about-part2">
        <Aboutcomponent2 />
      </div>
      <div className="about-part3">
        <div className="about-part3-main">
          <div className="about-center-txt"  data-aos="fade-right" data-aos-duration="1500">
            <div className="about-heading1">
              <p>About</p>
            </div>
            <div className="about-heading2">
              <h2>Our Features</h2>
            </div>
          </div>
          <div className="about-part3-cards">
            <div className="about-part3-cards-1" data-aos="fade-up" data-aos-duration="700">
              <div className="about-part3-cards-1-center">
                <div className="about-part3-card-icon1">
                  <button>
                    <FaHome />
                  </button>
                </div>
                <div className="about-part3-card-detail1">
                  <h5>Food & Homeless charity</h5>
                </div>
                <div className="about-part3-card-detail2">
                  Lorem ipsum dolor sit amet, conur sacing <br />
                  sed diam nonumy tempor invidunt labore <br />
                  mana aluyam erat, sed diam voluptua.....
                </div>
                <div className="about-part3-card-detail3">
                  <p>1. Join your hand with us for a better life</p>
                </div>
                <div className="about-part3-card-detail4">
                  <p>2. Let's do the right thing now</p>
                </div>
              </div>
            </div>
            <div className="about-part3-cards-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="about-part3-cards-2-center">
                <div className="about-part3-card2-icon1">
                  <button>
                    <FaHome />
                  </button>
                </div>
                <div className="about-part3-card2-detail1">
                  <h5>Food & Homeless charity</h5>
                </div>
                <div className="about-part3-card2-detail2">
                  Lorem ipsum dolor sit amet, conur sacing <br />
                  sed diam nonumy tempor invidunt labore <br />
                  mana aluyam erat, sed diam voluptua.....
                </div>
                <div className="about-part3-card2-detail3">
                  <p>1. Join your hand with us for a better life</p>
                </div>
                <div className="about-part3-card2-detail4">
                  <p>2. Let's do the right thing now</p>
                </div>
                <div className="about-part3-card2-detail5">
                  <p>3. Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div className="about-part3-cards-3" data-aos="fade-up" data-aos-duration="1500">
              <div className="about-part3-cards-3-center">
                <div className="about-part3-card3-icon1">
                  <button>
                    <FaHome />
                  </button>
                </div>
                <div className="about-part3-card3-detail1">
                  <h5>Food & Homeless charity</h5>
                </div>
                <div className="about-part3-card3-detail2">
                  Lorem ipsum dolor sit amet, conur sacing <br />
                  sed diam nonumy tempor invidunt labore <br />
                  mana aluyam erat, sed diam voluptua.....
                </div>
                <div className="about-part3-card3-detail3">
                  <p>1. Join your hand with us for a better life</p>
                </div>
                <div className="about-part3-card3-detail4">
                  <p>2. Let's do the right thing now</p>
                </div>
                <div className="about-part3-card3-detail5">
                  <p>3. Lorem ipsum dolor sit amet</p>
                </div>
                <div className="about-part3-card3-detail5">
                  <p>4. children are able to fulfill all</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-part4">
        <Cardcomponent />
      </div>
      <div className="about-part5">
        <div className="about-part5-center">
          <div className="about-part5-center-heading">
            <h2>Our Gallery</h2>
          </div>
          <div className="about-part5-center-images1">
            <div className="about-image1">
              <img
                src={abimg3}
                id="set-about-img"
                data-aos="fade-right"
                data-aos-duration="1000"
              />
            </div>
            <div className="about-image2">
              <img
                src={abimg4}
                id="set-about-img"
                data-aos="fade-down"
                data-aos-duration="1000"
              />
            </div>
            <div className="about-image3">
              <img
                src={abimg5}
                id="set-about-img"
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </div>
          </div>
          <div className="about-part5-center-images2">
            <div className="about-part5-center-images1">
              <div className="about-image1">
                <img
                  src={abimg6}
                  id="set-about-img2"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                />
              </div>
              <div className="about-image2">
                <img
                  src={abimg7}
                  id="set-about-img2"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                />
              </div>
              <div className="about-image3">
                <img
                  src={abimg8}
                  id="set-about-img2"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                />
              </div>
              <div className="about-image3">
                <img
                  src={abimg9}
                  id="set-about-img2"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-part6">
        <Slidertwo />
      </div>
      <div className="scrolltop" onClick={scrolltotop}>
        <AiOutlineArrowUp />
      </div>
    </div>
  );
};

export default About;
