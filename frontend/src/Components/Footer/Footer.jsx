import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../Image/hero_logo (1).webp";
import './Footer.css'

//icons
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerContent">
          <div className="section1">
            <Link to='/' style={{ textDecoration: "none", outline:"none", cursor:"pointer" ,color: "white" }}>
              <img className="footerImg" src={logoImg} alt="logo" />
            </Link>
          </div>
          <div className="section2">
            <div className="content">© NolanAI, Inc. 2024</div>
            <p className="paragrapg">
              <Link style={{ textDecoration: "none", color: "white" }}>
                Privacy Policy
              </Link>
              <span>|</span>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Terms of Service
              </Link>
              <span style={{ textDecoration: "none", color: "white" }}>|</span>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Referral Program
              </Link>
              <span>|</span>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Releases
              </Link>
            </p>
          </div>
          <div className="section3">
            <div className="sectionIcons" style={{gap:"25px"}}>
              <Link style={{ textDecoration: "none", color: "white" }}>
                <FaInstagram />
              </Link>
              <Link style={{ textDecoration: "none", color: "white" }}>
                <FaXTwitter />
              </Link>
              <Link style={{ textDecoration: "none", color: "white" }}>
                <CiYoutube />
              </Link>
              <Link style={{ textDecoration: "none", color: "white" }}>
                <FaThreads />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
