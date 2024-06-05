import React from "react";
import logoFooter from "../assets/logo/logofooter.png";

const Footer = () => {
  return (
    <footer>
      <div className="logo_footer">
        <img src={logoFooter} alt="logo kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
