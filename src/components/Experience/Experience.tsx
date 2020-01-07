import React from 'react';

import { WorkHistory, DataProps } from "../WorkHistory/WorkHistory";
import './Experience.scss';

export const Experience = ({ data }: DataProps) => (
  <div className="experience container">
    <div className="section-description">
      <span className="tagline">where I have worked</span>
      <p className="section-name">Experience</p>
    </div>
    <WorkHistory data={data} />
  </div >
);
