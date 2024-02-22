import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import img from "../../Image/download.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="container">
        <div className="mainContainer">
          <div className="logoItem">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={img} alt="logo" />
            </Link>
          </div>
          <div className="navItem">
            <div className="navList">
              <ul>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", listStyle: "none" }}
                >
                  <li>About us</li>
                </Link>
                <Link
                  to="/pricing"
                  style={{ textDecoration: "none", listStyle: "none" }}
                >
                  <li>Pricing</li>
                </Link>
                <Link
                  to="/features"
                  style={{ textDecoration: "none", listStyle: "none" }}
                >
                  <li>Features</li>
                </Link>
                <Link
                  to="/for-studio"
                  style={{ textDecoration: "none", listStyle: "none" }}
                >
                  <li>For Studio</li>
                </Link>
                <Link
                  to="/createScript"
                  style={{ textDecoration: "none", listStyle: "none" }}
                >
                  <li>Create Script</li>
                </Link>
                <Link
                  to="/blog"
                  style={{ textDecoration: "none", listStyle: "none" }}
                >
                  <li>Blog</li>
                </Link>
              </ul>
            </div>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className="buttonItem">
                <div className="loginButton">
                  <div className="login">Log in</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
