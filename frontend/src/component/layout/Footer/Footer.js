import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>THRIFT NATION</h1>
        <p>Get Yourself Away with Thrift</p>

        <p>Made with &#128151; by Akshat</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://instagram.com/akshat123436">Instagram</a>
        <a href="https://www.facebook.com/akshat.kothawede.9/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
