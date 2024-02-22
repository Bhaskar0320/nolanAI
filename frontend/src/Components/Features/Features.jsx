import React from "react";
import './Features.css'
//icons
import ExploreIcon from "@mui/icons-material/Explore";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';


//images
import img1 from '../../Image/img1.webp'

const Features = () => {
  return (
    <div className="featuresContainer">
      <div className="section1">
        <div className="details">
          <div className="detailsHeading">FEATURES</div>
          <div className="detailsText">
            Explore what the NolanAI platform can do
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="sectionCard">
          <div className="imageDetails">
            <img src={img1} alt="" />
          </div>
          <div className="textDetails">
            <div className="logo">
              <span>
                <DriveFileRenameOutlineIcon />
              </span>
            </div>
            <h3>The Industry Standard Script Writing Software</h3>
            <p>
              Nolan provides a user-friendly interface, advanced formatting
              options, and helpful features such as character and scene
              breakdowns, revision tracking, and collaboration tools.With its
              powerful tools and intuitive design.
            </p>
          </div>
        </div>
        <div className="sectionCard">
          <div className="imageDetails">
            <img src={img1} alt="" />
          </div>
          <div className="textDetails">
            <div className="logo">
              <span>
                <DriveFileRenameOutlineIcon />
              </span>
            </div>
            <h3>The Industry Standard Script Writing Software</h3>
            <p>
              Nolan provides a user-friendly interface, advanced formatting
              options, and helpful features such as character and scene
              breakdowns, revision tracking, and collaboration tools.With its
              powerful tools and intuitive design.
            </p>
          </div>
        </div>
        <div className="sectionCard">
          <div className="imageDetails">
            <img src={img1} alt="" />
          </div>
          <div className="textDetails">
            <div className="logo">
              <span>
                <DriveFileRenameOutlineIcon />
              </span>
            </div>
            <h3>The Industry Standard Script Writing Software</h3>
            <p>
              Nolan provides a user-friendly interface, advanced formatting
              options, and helpful features such as character and scene
              breakdowns, revision tracking, and collaboration tools.With its
              powerful tools and intuitive design.
            </p>
          </div>
        </div>
        <div className="sectionCard">
          <div className="imageDetails">
            <img src={img1} alt="" />
          </div>
          <div className="textDetails">
            <div className="logo">
              <span>
                <DriveFileRenameOutlineIcon />
              </span>
            </div>
            <h3>The Industry Standard Script Writing Software</h3>
            <p>
              Nolan provides a user-friendly interface, advanced formatting
              options, and helpful features such as character and scene
              breakdowns, revision tracking, and collaboration tools.With its
              powerful tools and intuitive design.
            </p>
          </div>
        </div>
        <div className="sectionCard">
          <div className="imageDetails">
            <img src={img1} alt="" />
          </div>
          <div className="textDetails">
            <div className="logo">
              <span>
                <DriveFileRenameOutlineIcon />
              </span>
            </div>
            <h3>The Industry Standard Script Writing Software</h3>
            <p>
              Nolan provides a user-friendly interface, advanced formatting
              options, and helpful features such as character and scene
              breakdowns, revision tracking, and collaboration tools.With its
              powerful tools and intuitive design.
            </p>
          </div>
        </div>
        <div className="sectionCard">
          <div className="imageDetails">
            <img src={img1} alt="" />
          </div>
          <div className="textDetails">
            <div className="logo">
              <span>
                <DriveFileRenameOutlineIcon />
              </span>
            </div>
            <h3>The Industry Standard Script Writing Software</h3>
            <p>
              Nolan provides a user-friendly interface, advanced formatting
              options, and helpful features such as character and scene
              breakdowns, revision tracking, and collaboration tools.With its
              powerful tools and intuitive design.
            </p>
          </div>
        </div>
      </div>
      <div className="section3">
        <button className="button1">
          <div className="btnLogo">
            <span>
              <ExploreIcon />
            </span>
          </div>
          <div className="btnText">Explore All Features</div>
        </button>
      </div>
    </div>
  );
};

export default Features;
