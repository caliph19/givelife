import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./cardslider3.css";
import { FreeMode, Pagination } from "swiper/modules";
import { IoIosMan } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import photo11 from "../images/cha2.jpg";
import photo12 from "../images/cha7.jpg";
import photo13 from "../images/cha8.jpg";

const Cardslider3 = () => {
  return (
    <div>
      <>
        <Swiper
          id="set-swiper-3"
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide id="set-slider3-card1">
            <div className="card33">
              <div className="card1-img">
                <div className="empty">
                  <img src={photo11} id="set-map-image" />
                </div>
              </div>
              <div className="card33-center">
                <div className="card33-heading11">
                  <p>Medical</p>
                </div>
                <div className="card33-heading22">
                  <div className="card-heading22-center">
                    <h2>
                      Donate for poor peoples <br />
                      treatment and medicine.
                    </h2>
                  </div>
                </div>
                <div className="card33-details22">
                  <div className="card33-details22-center">
                    <p>
                      Lorem ipsum dolor sit amet, consetetu diam voluptua.....
                    </p>
                  </div>
                </div>
                <div className="card33-button">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="set-slider3-card1">
            <div className="card33">
              <div className="card1-img">
                <div className="empty">
                  <img src={photo11} id="set-map-image" />
                </div>
              </div>
              <div className="card33-center">
                <div className="card33-heading11">
                  <p>Medical</p>
                </div>
                <div className="card33-heading22">
                  <div className="card-heading22-center">
                    <h2>
                      Donate for poor peoples <br />
                      treatment and medicine.
                    </h2>
                  </div>
                </div>
                <div className="card33-details22">
                  <div className="card33-details22-center">
                    <p>
                      Lorem ipsum dolor sit amet, consetetu diam voluptua.....
                    </p>
                  </div>
                </div>
                <div className="card33-button">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="set-slider3-card1">
            <div className="card33">
              <div className="card1-img">
                <div className="empty">
                  <img src={photo11} id="set-map-image" />
                </div>
              </div>
              <div className="card33-center">
                <div className="card33-heading11">
                  <p>Medical</p>
                </div>
                <div className="card33-heading22">
                  <div className="card-heading22-center">
                    <h2>
                      Donate for poor peoples <br />
                      treatment and medicine.
                    </h2>
                  </div>
                </div>
                <div className="card33-details22">
                  <div className="card33-details22-center">
                    <p>
                      Lorem ipsum dolor sit amet, consetetu diam voluptua.....
                    </p>
                  </div>
                </div>
                <div className="card33-button">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="set-slider3-card1">
            <div className="card33">
              <div className="card1-img">
                <div className="empty">
                  <img src={photo11} id="set-map-image" />
                </div>
              </div>
              <div className="card33-center">
                <div className="card33-heading11">
                  <p>Medical</p>
                </div>
                <div className="card33-heading22">
                  <div className="card-heading22-center">
                    <h2>
                      Donate for poor peoples <br />
                      treatment and medicine.
                    </h2>
                  </div>
                </div>
                <div className="card33-details22">
                  <div className="card33-details22-center">
                    <p>
                      Lorem ipsum dolor sit amet, consetetu diam voluptua.....
                    </p>
                  </div>
                </div>
                <div className="card33-button">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="set-slider3-card1">
            <div className="card33">
              <div className="card1-img">
                <div className="empty">
                  <img src={photo11} id="set-map-image" />
                </div>
              </div>
              <div className="card33-center">
                <div className="card33-heading11">
                  <p>Medical</p>
                </div>
                <div className="card33-heading22">
                  <div className="card-heading22-center">
                    <h2>
                      Donate for poor peoples <br />
                      treatment and medicine.
                    </h2>
                  </div>
                </div>
                <div className="card33-details22">
                  <div className="card33-details22-center">
                    <p>
                      Lorem ipsum dolor sit amet, consetetu diam voluptua.....
                    </p>
                  </div>
                </div>
                <div className="card33-button">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="set-slider3-card1">
            <div className="card33">
              <div className="card1-img">
                <div className="empty">
                  <img src={photo11} id="set-map-image" />
                </div>
              </div>
              <div className="card33-center">
                <div className="card33-heading11">
                  <p>Medical</p>
                </div>
                <div className="card33-heading22">
                  <div className="card-heading22-center">
                    <h2>
                      Donate for poor peoples <br />
                      treatment and medicine.
                    </h2>
                  </div>
                </div>
                <div className="card33-details22">
                  <div className="card33-details22-center">
                    <p>
                      Lorem ipsum dolor sit amet, consetetu diam voluptua.....
                    </p>
                  </div>
                </div>
                <div className="card33-button">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </>
    </div>
  );
};

export default Cardslider3;
