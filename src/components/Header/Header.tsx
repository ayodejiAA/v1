import React, { FC } from "react";

import { Hamburger } from '../common/Hamburger/Hamburger'

import { SnowManHeadIcon } from "../../assets/static";
import "./Header.scss";

export const Header: FC = () => (
  <header className="header">
    <nav className="nav">
      <div className="menu__list">
        <ul>
          <li><a href="/#work">Work</a></li>
          <li><a href="/#skills">Skills</a></li>
        </ul>
        <SnowManHeadIcon className="logo" />
        <ul>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <div className="hamburger__menu">
          <Hamburger />
        </div>
      </div>
    </nav>
  </header>
);
