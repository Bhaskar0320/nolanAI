import React from "react";
import './Secure.css'
import SecureImg from "../../Image/secure.webp";


const Secure = () => {
  return (
    <div className="secureContainer">
      <div className="secureItem">
        <div className="secureImg">
          <div className="secureLogo">
            <img src={SecureImg} alt="SecurePhoto" />
          </div>
        </div>
        <div className="secureContent">
          <div className="secureTag">
            <div className="secureHeading">Secure</div>
            <div className="securePara">
              Don’t worry, your data is secure and encrypted with NOLAN
            </div>
          </div>
          <div className="secureText">
            We take your privacy and the ownership of your work very seriously.
            We respect your creative content and have no rights over it. We do
            not use your work for training our models or for any other purposes
            without your explicit consent. Your scripts and content remain your
            intellectual property. So, when you create/upload or edit content
            using our software, you retain full ownership of the intellectual
            property. We do not claim any rights to your scripts or any other
            content you produce. Your creative work is yours and yours alone
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secure;
