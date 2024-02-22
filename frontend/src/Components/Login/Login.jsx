import React from "react";
import imgLogin from "../../Image/loginPage.webp";
import { Link } from "react-router-dom";
import "./Login.css";
//icons
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";

const Login = () => {
  return (
    <div className="imgContainer">
      <img className="loginImage" src={imgLogin} alt="" />
      <div className="loginContainer">
        <div className="loginPadding">
          <div className="loginItem">
            <div className="loginContent">
              <div className="loginTitle">
                Unlock
                <br />
                the full NOLAN Experience
              </div>
            </div>
            <div className="loginFormContent">
              <div className="loginFormPadding">
                <div className="loginHeading">LOG IN</div>
                <div className="loginTabs">
                  <Link to="/signin">
                    <button className="btn1">
                      <div className="loginLogo">
                        <FaGoogle />
                      </div>
                      <div className="loginMethods">Login with google</div>
                    </button>
                  </Link>
                  <Link to="/signin">
                    <button className="btn1">
                      <div className="loginLogo">
                        <FaFacebook />
                      </div>
                      <div className="loginMethods">Login with Facebook</div>
                    </button>
                  </Link>
                  <Link to="/signin">
                    <button className="btn1">
                      <div className="loginLogo">
                        <MdOutlineMail />
                      </div>
                      <div className="loginMethods">Login with Email</div>
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="btn1">
                      <div className="loginLogo">
                        <MdAccountBox />
                      </div>
                      <div className="loginMethods">Create an account</div>
                    </button>
                  </Link>
                </div>
                <div className="forgetMenu">
                  <div className="forgetContent">
                    <div className="ForgetButton">Forget Password</div>
                  </div>
                </div>

                <div className="loginPolicy">
                  By signing up, you agree to the
                  <a href="https://www.nolanai.app/terms-of-service">
                    Terms of Service
                  </a>
                  and
                  <a href="https://www.nolanai.app/privacy-policy">
                    Privacy Policy.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
