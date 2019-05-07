import React from 'react';
import '../index';
import { IoLogoFacebook, IoLogoInstagram, IoMdMail, IoLogoLinkedin, IoLogoYoutube, IoLogoWordpress, IoLogoTwitter } from "react-icons/io";

const Links = () => (
  <div className="bottom-layout">
    <a href="https://www.facebook.com/thegeanfu" target="blank"><IoLogoFacebook/></a>
    <a href="https://www.instagram.com/fajri_rahmadi" target="blank"><IoLogoInstagram/></a>
    <a href="https://twitter.com/Arloji_2213" target="blank" className="medium-icon"><IoLogoTwitter/></a>
    <a href="https://www.youtube.com/channel/UCOVLR2Qp13FI_W6_C9Yjaxg" target="blank" className="medium-icon"><IoLogoYoutube/></a>
    <a href="https://www.linkedin.com/in/fajri-rahmadi-a06692148/" target="blank"><IoLogoLinkedin/></a>
    <a href="mailto:fajrirahmadi@gmail.com"><IoMdMail/></a>
    <a href="https://fajrirahmadi.wordpress.com" target="blank" className="medium-icon"><IoLogoWordpress/></a>
  </div>
);

export default Links;
