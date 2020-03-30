import React from "react";

import { About } from "../About/About";
import { SnowManHeadIcon } from "../../assets/static";
import "./Header.scss";

export const Header = () => (
  <div className="header container">
    <div className="nav">
      <ul>
        <li>ABOUT</li>
        <li>SERVICES</li>
      </ul>
      <SnowManHeadIcon className="logo" />
      <ul>
        <li>CONTACT</li>
        <li>PORTFOLIO</li>
      </ul>
    </div>
    <About />
  </div>
);
