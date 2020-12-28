import React, { FC, useEffect, useRef } from 'react';
import scrollReveal from '../../utils';

import { WorkHistory } from "../WorkHistory/WorkHistory";



export const Experience: FC = () => {
  const revealSection = useRef(null);

  useEffect(() => {
    scrollReveal(revealSection)
  }, []);

  return (
    <div id="work" className="experience container load-hidden" ref={revealSection}>
      <div className="section-description">
        <span className="tagline">where I have worked</span>
        <p className="section-name">Experience</p>
      </div>
      <WorkHistory />
    </div >

  );
}
