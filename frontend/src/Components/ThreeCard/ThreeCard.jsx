import React from "react";
import { Link } from "react-router-dom";
import "./ThreeCard.css";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const ThreeCard = () => {
  return (
    <div className="cardContainer">
      <div className="cardItem">
        <Link
          className="linkItem"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="card">
            <div className="cardImg">
              <div className="cardIcon">
                <span
                  className="material-icons-outlined notranslate MaterialIcon_label-default__y3PXn undefined"
                  style={{ fontSize: "32px" }}
                >
                  <AutoAwesomeIcon />
                </span>
              </div>
            </div>
            <div className="cardContent">
              <h3>Editor with AI-Copilot</h3>
              <p>
                Enhance your screenwriting experience with AI Copilot, which
                suggests ideas for you.
              </p>
            </div>
          </div>
        </Link>
        <Link
          className="linkItem"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="card">
            <div className="cardImg">
              <div className="cardIcon2">
                <span
                  className="material-icons-outlined notranslate MaterialIcon_label-default__y3PXn undefined"
                  style={{ fontSize: "32px" }}
                >
                  <ListAltIcon />
                </span>
              </div>
            </div>
            <div className="cardContent">
              <h3>Automatic Script Breakdown</h3>
              <p>Script breakdown can be accomplished with a single click.</p>
            </div>
          </div>
        </Link>
        <Link
          className="linkItem"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="card">
            <div className="cardImg">
              <div className="cardIcon3">
              <span
                  className="material-icons-outlined notranslate MaterialIcon_label-default__y3PXn undefined"
                  style={{ fontSize: "32px" }}
                >
                  <DeveloperBoardIcon />
                </span>
              </div>
            </div>
            <div className="cardContent">
              <h3>AI Storyboard</h3>
              <p>
                Automatically create shots by analyzing each scene within
                seconds. Generate shot images for inspiration.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ThreeCard;
