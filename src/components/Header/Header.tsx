import React, { FC } from "react";

import { Hamburger } from '../common/Hamburger/Hamburger'

import { SnowManHeadIcon } from "../../assets/static";
import "./Header.scss";

export const Header: FC = () => (
  <header className="header">
    <nav className="nav">
      <div className="menu__list">
        <ul>
          <li>ABOUT</li>
          <li>SERVICES</li>
        </ul>
        <SnowManHeadIcon className="logo" />
        <ul>
          <li>CONTACT</li>
          <li>PORTFOLIO</li>
        </ul>
        <div className="hamburger__menu">
          <Hamburger />
        </div>
      </div>
    </nav>
  </header>
);
