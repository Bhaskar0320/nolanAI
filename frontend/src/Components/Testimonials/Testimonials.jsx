import React from "react";
import testiImg from "../../Image/testiPhoto.webp";
import imdb from '../../Image/imdb.webp'
import { Link } from "react-router-dom";
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className="testiContainer">
      <div className="testiTag">
        <div className="testiHeading">Testimonials</div>
        <div className="testiSubHeading">What Our Customers Say</div>
      </div>
      <div className="testiparaContent">
        <div className="paraContent">
          <div className="photo">
            <img src={testiImg} alt="testiImg" />
          </div>
          <div className="personDetails">
            <div className="name">Mike Wech</div>
            <div className="details">Producer • Editor • Writer</div>
          </div>
          <div className="paraText">
            <div className="text">
              NolanAI has the ability to be a game changer for producers. What
              used to take days could soon take hours and the technology is
              constantly improving. I was happy that the developers were quick
              to address the issues and eager to learn how the program can
              become more efficient for producers. The incorporated new features
              that we asked for and are eager to help filmmakers streamline
              production. Highly recommended.
            </div>
          </div>
          <div className="paraIcon">
            <Link>
            <img src={imdb} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
