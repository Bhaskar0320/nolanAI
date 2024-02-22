import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import imgDash from "../../Image/background1.webp";
import { MdFolderShared } from "react-icons/md";
import { RiFolderSharedLine } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { GoVideo } from "react-icons/go";
import { MdOutlineFeedback } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <img src={imgDash} alt="" />
      <div className="dashContainer">
        <div className="folder">
          <div className="folderItem">
            <div className="icon">
              <MdFolderShared />
            </div>
            <div className="folderText">Shared File</div>
          </div>
          <div className="folderItem">
            <div className="icon">
              <RiFolderSharedLine />
            </div>
            <div className="folderText">Shared File</div>
          </div>
        </div>
        <hr />
        <div className="dashCard">
          <div className="card">
            <div className="cardLogo">
              <div className="cardLogoImg">
                <CiDollar />
              </div>
            </div>
            <div className="cardContent">
              <div className="cardHeading">Referral Program</div>
              <div className="cardText">
                Join Our Referral Program and Start Earning Today!
              </div>
              <div className="cardbutton">
                <div className="btnText">Learn More</div>
                <div className="btnLogo">
                  <IoArrowForward />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardLogo">
              <div className="cardLogoImg">
                <GoVideo />
              </div>
            </div>
            <div className="cardContent">
              <div className="cardHeading">Video Tutorials</div>
              <div className="cardText">
                Learn how to utilize NolanAI features.
              </div>
              <div className="cardbutton">
                <div className="btnText">Learn More</div>
                <div className="btnLogo">
                  <IoArrowForward />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardLogo">
              <div className="cardLogoImg">
                <MdOutlineFeedback />
              </div>
            </div>
            <div className="cardContent">
              <div className="cardHeading">Lights, Camera, Feedback!</div>
              <div className="cardText">
                {" "}
                Help us make our scriptwriting software even better! Your
                opinion matters to us.
              </div>
              <div className="cardbutton">
                <div className="btnText">Learn More</div>
                <div className="btnLogo">
                  <IoArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
