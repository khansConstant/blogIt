import React from "react";
import Logo from "../img/logo1.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with <b className="heart">♥️</b> and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
