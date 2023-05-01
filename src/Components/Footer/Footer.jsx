import React from "react";
import "./footer.css";
import vid from "../../Assets/Footer.jpg";

import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="footer">
      <div className="imgDiv">
        <div className="overlay"></div>
        <img src={vid}></img>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>Keep In Touch</small>
            <h2>Travel With Us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button type="submit" className="btn flex">
              SEND
              <div className="centered-label">
                <FiSend className="icon" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
