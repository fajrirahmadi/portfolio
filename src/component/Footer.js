import React from 'react';
import '../index';
import { IoLogoFacebook, IoLogoInstagram, IoMdMail, IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";

const Links = () => (
  <div className="bottom-layout">
    <a href="https://api.whatsapp.com/send?phone=6285364368226" target="black"><IoLogoWhatsapp/></a>
    <a href="https://www.facebook.com/thegeanfu" target="blank"><IoLogoFacebook/></a>
    <a href="https://www.instagram.com/fajri_rahmadi" target="blank"><IoLogoInstagram/></a>
    <a href="https://twitter.com/Arloji_2213" target="blank" className="medium-icon"><IoLogoTwitter/></a>
    <a href="https://www.linkedin.com/in/fajri-rahmadi-a06692148/" target="blank"><IoLogoLinkedin/></a>
    <a href="mailto:fajrirahmadi@gmail.com"><IoMdMail/></a>
  </div>
);

export default Links;
