import React from "react";

import { SnowManHeadIcon } from "../../assets/static";
import "./Header.scss";

export const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul>
        <li>ABOUT</li>
        <li>SERVICES</li>
      </ul>
      <SnowManHeadIcon className="logo" />
      <ul>
        <li>CONTACT</li>
        <li>PORTFOLIO</li>
      </ul>
    </nav>
  </header>
);
