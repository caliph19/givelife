import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./cardslider2.css";
import { FreeMode, Pagination } from "swiper/modules";
import { IoIosMan } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import photo11 from "../images/cha2.jpg";
import photo12 from "../images/cha7.jpg";
import photo13 from "../images/cha8.jpg";

const Cardslider2 = () => {
  return (
    <div>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide id="set-slider-card1">
            <div className="card11">
              <div className="card1-img">
                <div className="empty">
                  <img src={photo11} id="set-map-image" />
                </div>
              </div>
              <div className="card11-icons">
                <div className="card11-icons-first">
                  <div className="card11-icon1">
                    <IoIosMan id="a1" />
                  </div>
                  <div className="card11-detail1">
                    <p>Esther Howard</p>
                  </div>
                </div>
                <div className="card11-icons-second">
                  <div className="card11-icon1">
                    <FaCalendarAlt id="a1" />
                  </div>
                  <div className="card11-detail1">
                    <p>12 sep 2021</p>
                  </div>
                </div>
              </div>
              <div className="card11-heading22">
                <div className="card-heading22-center">
                  <h2>Charity, Expectations vs. Reality</h2>
                </div>
              </div>
              <div className="card11-details22">
                <div className="card11-details22-center">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing sed diam
                    nonumy tempor invidunt ut labore et magna alerat, sed diam
                    voluptua.....
                  </p>
                </div>
              </div>
              <div className="card11-button">
                <button>Read More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="set-slider-card1">
            <div className="card11">
              <div className="card1-img">
                <div className="empty">
                  <img src={photo12} id="set-map-image" />
                </div>
              </div>
              <div className="card11-icons">
                <div className="card11-icons-first">
                  <div className="card11-icon1">
                    <IoIosMan id="a1" />
                  </div>
                  <div className="card11-detail1">
                    <p>Esther Howard</p>
                  </div>
                </div>
                <div className="card11-icons-second">
                  <div className="card11-icon1">
                    <FaCalendarAlt id="a1" />
                  </div>
                  <div className="card11-detail1">
                    <p>12 sep 2021</p>
                  </div>
                </div>
              </div>
              <div className="card11-heading22">
                <div className="card-heading22-center">
                  <h2>Charity, Expectations vs. Reality</h2>
                </div>
              </div>
              <div className="card11-details22">
                <div className="card11-details22-center">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing sed diam
                    nonumy tempor invidunt ut labore et magna alerat, sed diam
                    voluptua.....
                  </p>
                </div>
              </div>
              <div className="card11-button">
                <button>Read More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="set-slider-card1">
            <div className="card11">
              <div className="card1-img">
                <div className="empty">
                  <img src={photo13} id="set-map-image" />
                </div>
              </div>
              <div className="card11-icons">
                <div className="card11-icons-first">
                  <div className="card11-icon1">
                    <IoIosMan id="a1" />
                  </div>
                  <div className="card11-detail1">
                    <p>Esther Howard</p>
                  </div>
                </div>
                <div className="card11-icons-second">
                  <div className="card11-icon1">
                    <FaCalendarAlt id="a1" />
                  </div>
                  <div className="card11-detail1">
                    <p>12 sep 2021</p>
                  </div>
                </div>
              </div>
              <div className="card11-heading22">
                <div className="card-heading22-center">
                  <h2>Charity, Expectations vs. Reality</h2>
                </div>
              </div>
              <div className="card11-details22">
                <div className="card11-details22-center">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing sed diam
                    nonumy tempor invidunt ut labore et magna alerat, sed diam
                    voluptua.....
                  </p>
                </div>
              </div>
              <div className="card11-button">
                <button>Read More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="set-slider-card1">
            <div className="card11">
              <div className="card1-img">
                <div className="empty">
                  <img src={photo11} id="set-map-image" />
                </div>
              </div>
              <div className="card11-icons">
                <div className="card11-icons-first">
                  <div className="card11-icon1">
                    <IoIosMan id="a1" />
                  </div>
                  <div className="card11-detail1">
                    <p>Esther Howard</p>
                  </div>
                </div>
                <div className="card11-icons-second">
                  <div className="card11-icon1">
                    <FaCalendarAlt id="a1" />
                  </div>
                  <div className="card11-detail1">
                    <p>12 sep 2021</p>
                  </div>
                </div>
              </div>
              <div className="card11-heading22">
                <div className="card-heading22-center">
                  <h2>Charity, Expectations vs. Reality</h2>
                </div>
              </div>
              <div className="card11-details22">
                <div className="card11-details22-center">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing sed diam
                    nonumy tempor invidunt ut labore et magna alerat, sed diam
                    voluptua.....
                  </p>
                </div>
              </div>
              <div className="card11-button">
                <button>Read More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="set-slider-card1">
            <div className="card11">
              <div className="card1-img">
                <div className="empty">
                  <img src={photo12} id="set-map-image" />
                </div>
              </div>
              <div className="card11-icons">
                <div className="card11-icons-first">
                  <div className="card11-icon1">
                    <IoIosMan id="a1" />
                  </div>
                  <div className="card11-detail1">
                    <p>Esther Howard</p>
                  </div>
                </div>
                <div className="card11-icons-second">
                  <div className="card11-icon1">
                    <FaCalendarAlt id="a1" />
                  </div>
                  <div className="card11-detail1">
                    <p>12 sep 2021</p>
                  </div>
                </div>
              </div>
              <div className="card11-heading22">
                <div className="card-heading22-center">
                  <h2>Charity, Expectations vs. Reality</h2>
                </div>
              </div>
              <div className="card11-details22">
                <div className="card11-details22-center">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing sed diam
                    nonumy tempor invidunt ut labore et magna alerat, sed diam
                    voluptua.....
                  </p>
                </div>
              </div>
              <div className="card11-button">
                <button>Read More</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Cardslider2;
