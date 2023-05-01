import React from "react";
import "./home.css";
import bg from "../../Assets/KrabiBG.jpg";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { BsListUl } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <img src={bg} />
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTItle">Search Your Holiday</h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination</label>
            <div className="input flex ">
              <input type="text" placeholder="Enter Name Here..." />
              <div className="centered-label">
                <GrLocation className="icon  "></GrLocation>
              </div>
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="city">Select Your Date</label>
            <div className="input flex">
              <input type="date" placeholder="MM/DD/YYYY" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price :</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <div className="centered-label">
              <HiFilter className="icon" />
            </div>
            <span>More Filters</span>
          </div>
        </div>
        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <FiInstagram className="icon" />
            <FiTwitter className="icon" />
          </div>
          <div className="leftIcons">
            <BsListUl className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
