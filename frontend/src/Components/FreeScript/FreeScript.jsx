import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import scriptImage from '../../Image/scriptImg.webp'
import './FreeScript.css'

const FreeScript = () => {
  return (
    <div className="scriptContainer">
      <div className="scriptContent">
        <div className="scriptText">
          <h2>Free Script Writing Software</h2>
          <h3>And More</h3>
          <p>
            NolanAI isn't just a screenwriting tool, it's a filmmaker's dream
            studio. From crafting your script with AI assistance to seamlessly
            pre-producing your masterpiece, all within one intuitive platform,
            NolanAI empowers you to tell your story without losing your creative
            spark. Imagine ditching siloed tools and having everything at your
            fingertips, from storyboards to shot lists, all fueled by AI smarts
            and user-friendly design. That's the NolanAI advantage - streamlined
            storytelling, from pen to production, with your unique voice always
            in the director's chair.
          </p>
          <button className="btn1">
            <div className="btnText">Explore our premium plan!</div>
            <span className="icon">
              <IoMdArrowForward />
            </span>
          </button>
        </div>
        <div className="scriptVdo">
            <div>
                <div className="scriptImg">
                    <img src={scriptImage} alt="Script " />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FreeScript;
