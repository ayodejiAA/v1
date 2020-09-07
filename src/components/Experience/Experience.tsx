import React, { FunctionComponent } from 'react';

import { WorkHistory, DataProps } from "../WorkHistory/WorkHistory";

export const Experience: FunctionComponent<DataProps> = ({ data }) => (
  <div id="work" className="experience container">
    <div className="section-description">
      <span className="tagline">where I have worked</span>
      <p className="section-name">Experience</p>
    </div>
    <WorkHistory data={data} />
  </div >
);
