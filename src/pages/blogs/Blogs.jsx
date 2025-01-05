import React from "react";
import "./blog.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { IoIosMan } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import { AiOutlineArrowUp } from "react-icons/ai";


const Blogs = () => {
  function scrolltotop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <div className="blog-main">
        <div className="blog-left">
        <div className="bg2-image1-center">
            <ul className="breadcrumb">
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <strong>
                <NavLink to="/blogs">Blog</NavLink>
              </strong>
            </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog-part1">
        <div className="blog-part1-center">
          <div className="blog-heading1" data-aos="fade-right">
            <h2>Donating Poor People.</h2>
          </div>
        </div>
      </div>
      <div className="blog-part2">
        <div className="blog-part2-main">
          <div className="blog-part2-left">
            <div className="blog-comment-area">
              <div className="blog-img1" data-aos="fade-up"></div>
              <div className="blog-img1-icons"  data-aos="fade-up">
                <div className="blog-img-icons-1">
                  <div className="blog-icons-1-profile">
                    <IoIosMan />
                  </div>
                  <div className="blog-icons-1-profilename">
                    <p>Esther Howard</p>
                  </div>
                </div>
                <div className="blog-img-icons-2">
                  <div className="blog-icons-1-profile">
                    <FaRegCalendarAlt />
                  </div>
                  <div className="blog-icons-1-profilename">
                    <p>12 sep 2021</p>
                  </div>
                </div>
                <div className="blog-img-icons-3">
                  <div className="blog-icons-1-profile">
                    <FiClock />
                  </div>
                  <div className="blog-icons-1-profilename">
                    <p>10 min read</p>
                  </div>
                </div>
              </div>
              <div className="blog-part2-column3" data-aos="fade-up">
                <h3>
                  Back to the future: Quality education through respect,
                  commitment <br />
                  and accountability
                </h3>
              </div>
              <div className="blog-part2-column4" data-aos="fade-up">
                <p>
                  Flyingfish Kafue pike cow shark California smoothtongue golden
                  loach temperate ocean-bass gulper <br />
                  Sailbearer kanyu porcupinefish Kafue pike opah sunfish gudgeon
                  boga Asiatic glassfish tadpole fish! <br />
                  Alewife, poacher airbreathing catfish; zebra tilapia northern
                  pearleye naked-back knifefish pupfish <br />
                  dojo loach, “snake mackerel bonytail chub arapaima horsefish
                  weasel shark.”
                </p>
              </div>
              <div className="blog-part2-column5" data-aos="fade-up">
                <p>
                  Asian carps sailback scorpionfish; dragon goby lemon sole
                  triplefin blenny hog sucker. Smelt sleeper <br />
                  shovelnose sturgeon merluccid hake cow shark herring smelt
                  trout-perch barbeled houndshark. <br />
                  Shell-ear Asian carps blackfish Port Jackson shark Atlantic
                  saury. Sacramento blackfish pricklefish, <br />
                  Atlantic cod, “driftwood catfish chimaera ribbonfish,
                  marblefish worm eel smelt mora gray <br />
                  reef shark scabbard fish.”
                </p>
              </div>

              <div className="blog-part2-column6" data-aos="fade-up">
                <h3>
                  Clean water helps keep kids in school, especially girls.
                </h3>
              </div>
              <div className="blog-part2-column7" data-aos="fade-up">
                <p>
                  Less time collecting water means more time in class. Clean
                  water and proper toilets at school means <br />
                  teenage girls don’t have to stay home for a week out of every
                  month.
                </p>
              </div>
              <div className="blog-part2-column8" data-aos="fade-up">
                <p>
                  Northern anchovy–bass yellowtail barracuda zander yellowfin
                  grouper gurnard skipjack tuna shark <br />
                  goby eulachon wobbegong. Nase combtail gourami amur pike
                  flabby whalefish; darter, Blind <br />
                  Eagle ray soapfish ocean sunfish filefish, barbel sandfish
                  wolf-herring northern pike roach <br />
                  barbelless catfish, Atlantic saury mackerel shark pike conger.
                  Blind shark longfin smelt pearl <br />
                  bent-tooth eel stargazer grunion spookfish yellowtail
                  Quillfish slickhead mora. Springfish <br />
                  worm mackerel sockeye salmon banjo catfish toadfish sauger
                  four-eyed fish
                </p>
              </div>
              <div className="blog-part2-column9" data-aos="fade-top"></div>
              <div className="blog-part2-column10" data-aos="fade-up">
                <h3>
                  Clean water helps keep kids in school, especially girls.
                </h3>
              </div>
              <div className="blog-part2-column11" data-aos="fade-up">
                <p>
                  Less time collecting water means more time in class. Clean
                  water and proper toilets at school means <br />
                  teenage girls don’t have to stay home for a week out of every
                  month.
                </p>
              </div>
              <div className="blog-part2-column4" data-aos="fade-up">
                <p>
                  Flyingfish Kafue pike cow shark California smoothtongue golden
                  loach temperate ocean-bass gulper <br />
                  Sailbearer kanyu porcupinefish Kafue pike opah sunfish gudgeon
                  boga Asiatic glassfish tadpole fish! <br />
                  Alewife, poacher airbreathing catfish; zebra tilapia northern
                  pearleye naked-back knifefish pupfish <br />
                  dojo loach, “snake mackerel bonytail chub arapaima horsefish
                  weasel shark.”
                </p>
              </div>
              <div className="blog-part2-column5" data-aos="fade-up">
                <p>
                  Asian carps sailback scorpionfish; dragon goby lemon sole
                  triplefin blenny hog sucker. Smelt sleeper <br />
                  shovelnose sturgeon merluccid hake cow shark herring smelt
                  trout-perch barbeled houndshark. <br />
                  Shell-ear Asian carps blackfish Port Jackson shark Atlantic
                  saury. Sacramento blackfish pricklefish, <br />
                  Atlantic cod, “driftwood catfish chimaera ribbonfish,
                  marblefish worm eel smelt mora gray <br />
                  reef shark scabbard fish.”
                </p>
              </div>
            </div>
          </div>
          <div className="blog-part2-right">
            <div className="blog-part2-right-center">
              <div className="blog-right-box1" data-aos="fade-left">
                <div className="blog-right-center">
                  <div className="blog-right-column1">
                    <h2>Category</h2>
                  </div>
                  <div className="blog-right-column2">
                    <div className="blog-right-column2-left">
                      <p>Education</p>
                    </div>
                    <div className="blog-right-column2-right">(9)</div>
                  </div>
                  <div className="blog-right-column2">
                    <div className="blog-right-column2-left">
                      <p>Food</p>
                    </div>
                    <div className="blog-right-column2-right">(2)</div>
                  </div>
                  <div className="blog-right-column2">
                    <div className="blog-right-column2-left">
                      <p>Medical</p>
                    </div>
                    <div className="blog-right-column2-right">(4)</div>
                  </div>
                  <div className="blog-right-column2">
                    <div className="blog-right-column2-left">
                      <p>Home</p>
                    </div>
                    <div className="blog-right-column2-right">(5)</div>
                  </div>
                  <div className="blog-right-column3">
                    <div className="blog-right-column2-left">
                      <p>water</p>
                    </div>
                    <div className="blog-right-column2-right">(4)</div>
                  </div>
                </div>
              </div>
              <div className="blog-right-box2"data-aos="fade-left">
                <div className="blog-box2-center">
                  <div className="blog-box2-column1">
                    <h2>Recent posts</h2>
                  </div>
                  <div className="blog-box2-column2">
                    <div className="blog-box2-column2-center">
                      <div className="blog-box2-img"></div>
                      <div className="blog-box2-text">
                        <div className="blog-box2-text1">
                          <p>
                            Charity, Expectati <br />
                            ons vs. Reality
                          </p>
                        </div>
                        <div className="blog-box2-text2">
                          <p>Homeless</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-box2-column2">
                    <div className="blog-box2-column2-center">
                      <div className="blog-box2-img"></div>
                      <div className="blog-box2-text">
                        <div className="blog-box2-text1">
                          <p>
                            This Week’s Top <br />
                            Stories About....
                          </p>
                        </div>
                        <div className="blog-box2-text2">
                          <p>Medical</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-box2-column2">
                    <div className="blog-box2-column2-center">
                      <div className="blog-box2-img"></div>
                      <div className="blog-box2-text">
                        <div className="blog-box2-text1">
                          <p>
                            Why You Should <br />
                            Focus on Charity
                          </p>
                        </div>
                        <div className="blog-box2-text2">
                          <p>Food</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-right-box3" data-aos="fade-left">
                <div className="blog-box3-center">
                  <div className="blog-box3-text1">
                    <h2>Popular tags</h2>
                  </div>
                  <div className="blog-box3-text2">
                    <button>Food</button>
                    <button>Meaical</button>
                    <button>Home</button>
                    <button>Lifestyle</button>
                    <button>Education</button>
                    <button>Water</button>
                  </div>
                </div>
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

export default Blogs;
