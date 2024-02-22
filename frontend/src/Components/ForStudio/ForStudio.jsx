import React from "react";
import ForStudioimg from "../../Image/forStudio.webp";
import secureNote from "../../Image/notebook.webp";
import "./ForStudio.css";
import { MdOutlinePsychology } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { MdOutlineWavingHand } from "react-icons/md";



const ForStudio = () => {
  return (
    <div className="mainForStudio">
      <div className="heroHomePage">
        <img className="heroimage" src={ForStudioimg} alt="ForStudioImage" />
        <div className="heroPageSection">
          <div className="heroPageIntroAction">
            <h1 id="actionh1">
              For Film And Entertainment
              <br />
              Production Companies
            </h1>
            <h2 id="actionh2">
              All in one software for small and medium studios
            </h2>
          </div>
        </div>
      </div>
      <div className="keyThingsContainer">
        <div className="keyThingContentWrapper">
          <div className="keyThingsContent">
            <div className="keyThingsContentItem">
              <div className="keyThingsIcon">
                <div className="keyThingIconWrapper">
                  <span
                    className="material-icons-outlined notranslate  MaterialIcon_label-default__y3PXn undefined"
                    style={{ fontSize: "32px" }}
                  >
                    <MdOutlinePsychology />
                  </span>
                </div>
              </div>
              <div className="keyThingsText">
                <h3 id="h3Heading">All-in-One Editor</h3>
                <p id="keyHeading">
                  Experience the future of script editing with our AI-powered
                  co-pilot. Enhance your creative projects with intelligent
                  assistance that simplifies the editing process, making it
                  faster and more precise.
                </p>
              </div>
            </div>
          </div>
          <div className="keyThingsContent">
            <div className="keyThingsContentItem">
              <div className="keyThingsIcon">
                <div className="keyThingIconWrapper">
                  <span
                    className="material-icons-outlined notranslate  MaterialIcon_label-default__y3PXn undefined"
                    style={{ fontSize: "32px" }}
                  >
                    <MdAnalytics />
                  </span>
                </div>
              </div>
              <div className="keyThingsText">
                <h3>Analytics & Pre-Production Management</h3>
                <p id="keyHeading">
                  Streamline your pre-production process with comprehensive
                  analytics. Make data-driven decisions, plan your projects
                  effectively, and ensure every element of your production is
                  optimized for success.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="keyThingsContent">
            <div className="keyThingsContentItem">
              <div className="keyThingsIcon">
                <div className="keyThingIconWrapper">
                  <span
                    className="material-icons-outlined notranslate  MaterialIcon_label-default__y3PXn undefined"
                    style={{ fontSize: "32px" }}
                  >
                   <MdOutlineWavingHand />
                  </span>
                </div>
              </div>
              <div className="keyThingsText">
                <h3>Customization & Integration</h3>
                <p id="keyHeading">
                  {" "}
                  Tailor NolanAI to suit your studio's unique needs. Our
                  platform offers seamless integration with industry-standard
                  tools, ensuring that it fits perfectly into your existing
                  workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="keyThingSecureContainer">
        <div className="keyThingsSecureWrapper">
          <div className="secureIconsContent">
            <div className="secureIconWrap">
              <img
                className="secureNoteBook"
                src={secureNote}
                alt="Secure NoteBook"
              />
              <div className="secureIconBackground"></div>
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
            </div>
          </div>
          <div className="secureRightContainer">
            <div className="rightWrapper">
              <div className="secureText">Library of 2000+ Stories</div>
              <div className="secureRightText">
                Access a vast collection of unique stories with full copyright
                transfer for further development. Unlock a wealth of creative
                possibilities and seamlessly transform your next blockbuster
                screenplay from these stories.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="studiosContainer">
        <div className="studioBlog">
          <div className="studioBlogContent">
            <div className="studioPara">
              <div>
                <p className="studioItemText">
                  If you are looking for a way to implement creativity and
                  unique storytelling with just a few clicks, then look no
                  further than NolanAI. Unlock efficiency for your team in an
                  instant.
                  <br />
                  Join NolanAI Enterprise.
                  <br />
                  For more details, contact us.
                </p>
              </div>
              <div>
                <h2 className="studiolink">
                  <a href="mailto:enterprise@nolanai.app">
                    enterprise @ nolanai.app
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForStudio;
