import React from "react";
import "./Number.css";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import SummarizeIcon from "@mui/icons-material/Summarize";
// import Summarize from "@mui/icons-material/Summarize";

const Number = () => {
  return (
    <div className="numberContainer">
      <div className="numberSection1">
        <div className="secHeading">Meet Your Fellow Creators at NolanAI</div>
        <div className="secText">
          Fueling the Creative Fire: Where Thousands Shape Their Stories
        </div>
      </div>
      <div className="numberSection2">
        <div className="card1">
          <div className="logoContainer">
            <div className="logo">
              <span>
                <SupervisorAccountIcon />{" "}
              </span>
            </div>
          </div>
          <div className="number">+10000</div>
          <div className="text">Registered User</div>
        </div>
        <div className="card1">
          <div className="logoContainer">
            <div className="logo">
                <span><DeveloperBoardIcon /> </span>
            </div>
          </div>
          <div className="number">+3000</div>
          <div className="text">StoryBoard Created</div>
        </div>
        <div className="card1">
          <div className="logoContainer">
            <div className="logo">
                <span>
                    <SummarizeIcon />
                </span>
            </div>
          </div>
          <div className="number">+18000</div>
          <div className="text">Story Written</div>
        </div>
      </div>
    </div>
  );
};

export default Number;
