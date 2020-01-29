import React from 'react';

import { SnowManHeadIcon } from '../../assets/static'
import './Header.scss';

export const Header = () => (
  <div className="header">
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
);
