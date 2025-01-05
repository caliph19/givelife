import React from "react";
import "./faq.css";
import { MdManageAccounts } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import BasicAccordion from "../../components/accodian/Accodian";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import { AiOutlineArrowUp } from "react-icons/ai";



const Faq = () => {
  function scrolltotop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <div className="faq-main">
        <div className="faq left">
        <div className="bg2-image1-center">
            <ul className="breadcrumb">
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <strong>
                <NavLink to="/faq">Faqs</NavLink>
              </strong>
            </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="faq-main-gap"></div>
      <div className="faq-part1">
        <div className="faq-part1-center">
          <div className="faq-part1-left" data-aos="fade-right" data-aos-duration="1500">
            <div className="faq-part1-text">
              <div className="faq-part1-heading1">
                <p>Have any Question?</p>
              </div>
              <div className="faq-part1-heading2">
                <h5>Frequently Asked Questions</h5>
              </div>
            </div>
            <div className="faq-left-img"></div>
          </div>
          <div className="faq-part1-right"  data-aos="fade-left" data-aos-duration="1500">
            <div className="faq-part1-right-center">
                 <BasicAccordion/>
            </div>
       
          </div>
        </div>
      </div>
      <div className="faq-part2">
        <div className="faq-center">
          <div className="faq-part2-heading" data-aos="fade-up" data-aos-duration="1500">
            <div className="faq-part2-heading1">
              <h2>Still need help</h2>
            </div>
            <div className="faq-part2-heading2">
              <p>
                We enjoy adapting our strategies to offer <br />
                every client the best solutions that are <br />
                at the forefront of the industry.
              </p>
            </div>
          </div>
          <div className="faq-part2-card">
            <div className="faq-part2-card1"data-aos="zoom-in">
              <div className="faq-part2-card-heading1">
                <button>
                  <MdManageAccounts id="set-faq-icon" />
                </button>
              </div>
              <div className="faq-part2-card-heading2">
                <h2>Call Support</h2>
              </div>
              <div className="faq-part2-card-heading3">
                <p>
                  We analyse your website’s structure, <br />
                  internal architecture & other key
                </p>
              </div>
            </div>
            <div className="faq-part2-card2"data-aos="zoom-in">
            <div className="faq-part2-card-heading1">
                <button>
                  <FaComments id="set-faq-icon" />
                </button>
              </div>
              <div className="faq-part2-card-heading2">
                <h2>Call Support</h2>
              </div>
              <div className="faq-part2-card-heading3">
                <p>
                  We analyse your website’s structure, <br />
                  internal architecture & other key
                </p>
              </div>
            </div>
            <div className="faq-part2-card3"data-aos="zoom-in">
            <div className="faq-part2-card-heading1">
                <button>
                  <ImLocation id="set-faq-icon" />
                </button>
              </div>
              <div className="faq-part2-card-heading2">
                <h2>Call Support</h2>
              </div>
              <div className="faq-part2-card-heading3">
                <p>
                  We analyse your website’s structure, <br />
                  internal architecture & other key
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scrolltop" onClick={scrolltotop}>
        <AiOutlineArrowUp />
      </div>
    </div>
  );
};

export default Faq;
