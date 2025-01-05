import React, { useRef, useState } from "react";
import "./carthree.css";
import girl from "./dasin.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Sliderthree = () => {
  return (
    <>
      <Swiper
        id="home-slider-three"
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel-three">
            <div className="carousel-three-inner">
              <div className="car-t-img">
                <img src={girl}></img>
              </div>
              <div className="car-t-txt">
                <p id="car-t-heading">Calvin Keline</p>
                <p>
                  raren. Avinvestera suprabel preskapet soktig. Paddeltennis tis
                  divis. Asperad plagän, kelal
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-three">
            <div className="carousel-three-inner">
              <div className="car-t-img">
                <img src={girl}></img>
              </div>
              <div className="car-t-txt">
                <p id="car-t-heading">Calvin Keline</p>
                <p>
                  raren. Avinvestera suprabel preskapet soktig. Paddeltennis tis
                  divis. Asperad plagän, kelal
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-three">
            <div className="carousel-three-inner">
              <div className="car-t-img">
                <img src={girl}></img>
              </div>
              <div className="car-t-txt">
                <p id="car-t-heading">Calvin Keline</p>
                <p>
                  raren. Avinvestera suprabel preskapet soktig. Paddeltennis tis
                  divis. Asperad plagän, kelal
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-three">
            <div className="carousel-three-inner">
              <div className="car-t-img">
                <img src={girl}></img>
              </div>
              <div className="car-t-txt">
                <p id="car-t-heading">Calvin Keline</p>
                <p>
                  raren. Avinvestera suprabel preskapet soktig. Paddeltennis tis
                  divis. Asperad plagän, kelal
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-three">
            <div className="carousel-three-inner">
              <div className="car-t-img">
                <img src={girl}></img>
              </div>
              <div className="car-t-txt">
                <p id="car-t-heading">Calvin Keline</p>
                <p>
                  raren. Avinvestera suprabel preskapet soktig. Paddeltennis tis
                  divis. Asperad plagän, kelal
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Sliderthree;
