import React, { useState } from "react";
import "./donate.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Contact from "../contact/Contact";
import Popup from "../../components/popup/Popup";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";

const Donate = () => {

  function scrolltotop() {
    window.scrollTo(0, 0);
  }
    const [showContact, setShowContact] = useState(false);


  return (
    <div>
      <div className="donate-main">
        <div className="donate-left">
        <div className="bg2-image1-center">
            <ul className="breadcrumb">
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <strong>
                <NavLink to="/donation">Donation</NavLink>
              </strong>
            </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="donate-part1">
        <div className="donate-part1-center">
          <div className="donate-heading1">
            <h2>Donating Poor People.</h2>
          </div>
        </div>
      </div>
      <div className="donate-part2">
        <div className="donate-part2-main">
          <div className="donate-part2-left">
            <div className="donate-comment-area">
              <div className="donate-img1"  data-aos="fade-top"></div>
              <div className="donate-btn1">
                <div className="donate-btn-center">
                   <button onClick={()=>setShowContact(true)}>Donate Now</button> 
                    <Popup trigger={showContact} >                      
                    </Popup>
                </div>
                
              </div>
              <div className="donate-img1-icons" data-aos="fade-up">
                <div className="donate-bar-center">
                  <ProgressBar
                    completed={80}
                    className="wrapper4"
                    barContainerClassName="container"
                    completedClassName="barCompleted4"
                    labelClassName="label"
                  />
                <div className="causes-heading5">
                  <div className="causes-raised">Raised: $6000</div>
                  <div className="causes-goals">Goal: $10,000</div>
                </div>
                </div>
              </div>
              <div className="donate-part2-column3" data-aos="fade-up">
                <h3>Donate for poor peoples treatment and medicine.</h3>
              </div>
              <div className="donate-part2-column4" data-aos="fade-up">
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
              <div className="donate-part2-column5" data-aos="fade-up">
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

              <div className="donate-part2-column6" data-aos="fade-up">
                <h3>
                  Clean water helps keep kids in school, especially girls.
                </h3>
              </div>
              <div className="donate-part2-column7" data-aos="fade-up">
                <p>
                  Less time collecting water means more time in class. Clean
                  water and proper toilets at school means <br />
                  teenage girls don’t have to stay home for a week out of every
                  month.
                </p>
              </div>
              <div className="donate-part2-column8" data-aos="fade-up">
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
              <div className="donate-part2-column9" data-aos="fade-top"></div>
              <div className="donate-part2-column10" data-aos="fade-up">
                <h3>
                  Challenges
                </h3>
              </div>
              <div className="donate-part2-column11" data-aos="fade-up">
                <p>
                  Less time collecting water means more time in class. Clean
                  water and proper toilets at school means <br />
                  teenage girls don’t have to stay home for a week out of every
                  month.
                </p>
              </div>
              <div className="donate-part2-column4" data-aos="fade-up">
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
              <div className="donate-part2-column5" data-aos="fade-up">
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
          <div className="donate-part2-right">
            <div className="donate-part2-right-center">
              <div className="donate-right-box1" data-aos="fade-left">
                <div className="donate-right-center">
                  <div className="donate-right-column1">
                    <h2>Category</h2>
                  </div>
                  <div className="donate-right-column2">
                    <div className="donate-right-column2-left">
                      <p>Education</p>
                    </div>
                    <div className="donate-right-column2-right">(9)</div>
                  </div>
                  <div className="donate-right-column2">
                    <div className="donate-right-column2-left">
                      <p>Food</p>
                    </div>
                    <div className="donate-right-column2-right">(2)</div>
                  </div>
                  <div className="donate-right-column2">
                    <div className="donate-right-column2-left">
                      <p>Medical</p>
                    </div>
                    <div className="donate-right-column2-right">(4)</div>
                  </div>
                  <div className="donate-right-column2">
                    <div className="donate-right-column2-left">
                      <p>Home</p>
                    </div>
                    <div className="donate-right-column2-right">(5)</div>
                  </div>
                  <div className="donate-right-column3">
                    <div className="donate-right-column2-left">
                      <p>water</p>
                    </div>
                    <div className="donate-right-column2-right">(4)</div>
                  </div>
                </div>
              </div>
              <div className="donate-right-box2" data-aos="fade-left">
                <div className="donate-box2-center">
                  <div className="donate-box2-column1">
                    <h2>Recent posts</h2>
                  </div>
                  <div className="donate-box2-column2">
                    <div className="donate-box2-column2-center">
                      <div className="donate-box2-img"></div>
                      <div className="donate-box2-text">
                        <div className="donate-box2-text1">
                          <p>
                            Charity, Expectati <br />
                            ons vs. Reality
                          </p>
                        </div>
                        <div className="donate-box2-text2">
                          <p>Homeless</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="donate-box2-column2">
                    <div className="donate-box2-column2-center">
                      <div className="donate-box2-img"></div>
                      <div className="donate-box2-text">
                        <div className="donate-box2-text1">
                          <p>
                            This Week’s Top <br />
                            Stories About....
                          </p>
                        </div>
                        <div className="donate-box2-text2">
                          <p>Medical</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="donate-box2-column2">
                    <div className="donate-box2-column2-center">
                      <div className="donate-box2-img"></div>
                      <div className="donate-box2-text">
                        <div className="donate-box2-text1">
                          <p>
                            Why You Should <br />
                            Focus on Charity
                          </p>
                        </div>
                        <div className="donate-box2-text2">
                          <p>Food</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="donate-right-box3" data-aos="fade-left">
                <div className="donate-box3-center">
                  <div className="donate-box3-text1">
                    <h2>Popular tags</h2>
                  </div>
                  <div className="donate-box3-text2">
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

export default Donate;
