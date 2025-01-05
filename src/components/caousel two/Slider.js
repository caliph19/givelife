import React, { useRef, useState } from "react";
import "./cartwo.css";
import img11 from "./bb.png";

import "swiper/css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slidertwo = () => {
  return (
    <>
      <Swiper
        id="home-top-slider"
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide id="home-top-slider-slides">
          <div className="h-slides">
            <div className="h-heading1">
              <p> Our Testimonials</p>
            </div>
            <div className="h-heading2">
              <h2>What People Say</h2>
            </div>
            <div className="h-heading3">
            </div>
            <div className="h-heading4">
              <h5>Cameron Williamson</h5>
            </div>
            <div className="h-heading5">
              <p> Founder</p>
            </div>
            <div className="h-heading6">
              <p>
                {" "}
                Sea chub demoiselle whalefish zebra lionfish mud cat pelican
                eel. Minnow snoek icefish velvet-belly shark, California <br />
                halibut round stingray northern sea robin. Southern grayling
                trout-perchSharksucker sea toad candiru rocket <br />
                danio tilefish stingray deepwater stingray Sacramento splittail,
                Canthigaster rostrata.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="home-top-slider-slides">
          <div className="h-slides">
            <div className="h-heading1">
              <p> Our Testimonials</p>
            </div>
            <div className="h-heading2">
              <h2>What People Say</h2>
            </div>
            <div className="h-heading3">
              <img src={img11} alt="" />
            </div>
            <div className="h-heading4">
              <h5>Cameron Williamson</h5>
            </div>
            <div className="h-heading5">
              <p> Founder</p>
            </div>
            <div className="h-heading6">
              <p>
                {" "}
                Sea chub demoiselle whalefish zebra lionfish mud cat pelican
                eel. Minnow snoek icefish velvet-belly shark, California <br />
                halibut round stingray northern sea robin. Southern grayling
                trout-perchSharksucker sea toad candiru rocket <br />
                danio tilefish stingray deepwater stingray Sacramento splittail,
                Canthigaster rostrata.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="home-top-slider-slides">
          <div className="h-slides">
            <div className="h-heading1">
              <p> Our Testimonials</p>
            </div>
            <div className="h-heading2">
              <h2>What People Say</h2>
            </div>
            <div className="h-heading3">
              <img src={img11} alt="" />
            </div>
            <div className="h-heading4">
              <h5>Cameron Williamson</h5>
            </div>
            <div className="h-heading5">
              <p> Founder</p>
            </div>
            <div className="h-heading6">
              <p>
                {" "}
                Sea chub demoiselle whalefish zebra lionfish mud cat pelican
                eel. Minnow snoek icefish velvet-belly shark, California <br />
                halibut round stingray northern sea robin. Southern grayling
                trout-perchSharksucker sea toad candiru rocket <br />
                danio tilefish stingray deepwater stingray Sacramento splittail,
                Canthigaster rostrata.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slidertwo;
