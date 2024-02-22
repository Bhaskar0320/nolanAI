import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import nolenImage from "../../Image/hero_logo.webp";
import bgImage from "../../Image/background1.webp";
import { FaPen } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import ThreeCard from "../ThreeCard/ThreeCard";
import Secure from "../Secure/Secure";
import FreeScript from "../FreeScript/FreeScript";
import Testimonials from "../Testimonials/Testimonials";
import Number from "../Numbers/Number";
import Features from "../Features/Features";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <img src={bgImage} alt="" />
        <div className="homeItem">
          <div className="home">
            <div className="homeLogo">
              <img src={nolenImage} alt="nolenLogo" />
            </div>
            <h1 className="h1Tag">Film Industry Service Hub</h1>
            <h2 className="h2Tag">Helping bring the next masterpiece to the big screens.</h2>
            <div className="buttons">
              <Link to= '/pricing'>
                <button className="btn1">
                  {" "}
                  <FaPen /> Get NolanAI Free
                </button>
              </Link>
              <Link to='/login' >
                <button className="btn2">
                  {" "}
                  <CiLogin /> Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ThreeCard />
      <Secure />
      <FreeScript />
      <Testimonials />
      <Number />
      <Features />
    </>
  );
};

export default Home;
