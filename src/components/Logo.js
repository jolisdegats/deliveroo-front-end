import React from "react";
import logo from "../img/Deliveroo_logo.svg.png";

const Logo = ({ data }) => {
  return (
    <div className="logoHeader">
      <div className="container">
        <img src={logo} alt="Logo deliveroo" />
      </div>
    </div>
  );
};

export default Logo;
