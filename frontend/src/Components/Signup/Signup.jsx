import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imgLogin from "../../Image/loginPage.webp";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //toast function
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const PostData = () => {
    if (!emailRegex.test(email)) {
      notifyA("Invalid Email");
      return;
    } else if (!passRegex.test(password)) {
      notifyA(
        "Password must be 8 string or longer and contain atleast 1 lowercase, 1 uppercase alphabetical character, 1 numeric character and 1 special character."
      );
      return
    }

    console.log({ name, email, password });

    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          navigate("/login");
          notifyB(data.message);
          console.log(data);
        }
      });
  };

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
                <div className="loginHeading">SIGN UP</div>
                <div className="loginTabs">
                  <label htmlFor="name">
                    Enter your name <br />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </label>
                  <label htmlFor="name">
                    Enter your email <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </label>
                  <label htmlFor="name">
                    Enter your password <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </label>
                  <button
                    className="btn1"
                    onClick={() => {
                      PostData();
                    }}
                  >
                    Sign Up
                  </button>
                </div>

                <div className="loginPolicya">
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

export default Signup;
