import React from 'react';
import '../index';
import { IoLogoFacebook, IoLogoInstagram, IoMdMail, IoLogoLinkedin, IoLogoYoutube, IoMdJournal } from "react-icons/io";

const Links = () => (
  <div className="bottom-layout">
    <a href="https://www.facebook.com/thegeanfu" target="blank"><IoLogoFacebook/></a>
    <a href="https://www.instagram.com/fajri_rahmadi" target="blank"><IoLogoInstagram/></a>
    <a href="https://www.youtube.com/channel/UCOVLR2Qp13FI_W6_C9Yjaxg" target="blank" className="medium-icon"><IoLogoYoutube/></a>
    <a href="https://www.linkedin.com/in/fajri-rahmadi-a06692148/" target="blank"><IoLogoLinkedin/></a>
    <a href="mailto:fajrirahmadi@gmail.com"><IoMdMail/></a>
    <a href="https://fajrirahmadi.wordpress.com" target="blank" className="medium-icon"><IoMdJournal/></a>
  </div>
);

export default Links;
