import React from "react";
import "./popup.css";
import { AiOutlineClose } from "react-icons/ai";

const Popup = (props) => {




  return (props.trigger) ? (
    <div>
      <div className="popup-main" id="myForm">
        <div className="popup-center">
          <div className="popup-close-icon-place">
            <div className="popup-close-icons">
              <AiOutlineClose />
            </div>
          </div>
          <div className="popup-center-bottom">
          <div className="popup-part2">
            <div className="popup-text-center">
              <h4>Your Donation</h4>
            </div>
            <div className="popup-col2">
                <button>$</button>
                <input type="number" />
                <div className="popup-button2">
                    <button id="popup-btn2">Castome Amount</button>
                </div>
            </div>
            <div className="popup-col3">
                <div className="col3-btn1">
                    <button>$10:00</button>
                </div>
                <div className="col3-btn2">
                    <button>$25:00</button>
                </div>
                <div className="col3-btn2">
                    <button>$50:00</button>
                </div>
                <div className="col3-btn2">
                    <button>$100:00</button>
                </div>
                <div className="col3-btn2">
                    <button>$250:00</button>
                </div>
            </div>
            <div className="popup-col4">
                <div className="popup-col4-heading1">
                    <h4>Select Payment Method</h4>
                </div>
                <div className="popup-col4-select">
                <input type="radio" name="genre" value="football"checked="checked" /> Test donation
                <input type="radio" name="genre" value="hockey" checked="checked" /> Offlile Donation
                </div>
            </div>
            <div className="popup-col5">
                <h4>Parsonal info</h4>
            </div>
            <div className="popup-col6">
                <div className="popup-col6-row1">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className="popup-col6-row2">
                    <input type="text" placeholder=" Your Email" />
                </div>
                <div className="popup-col6-row3">
                    <textarea type="text" placeholder=" Your Email" />
                </div>
                <div className="popup-col6-row4">
                    <p>Donation Total:</p>
                    <button>$10.00</button>
                </div>
                <div className="popup-col6-row5">
                    <button>Donate now</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  ):"";
};

export default Popup;
