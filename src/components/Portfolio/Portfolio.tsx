import React, { FC, useRef, useEffect } from 'react';

import { FeaturedProject } from '../FeaturedProject/FeaturedProject';
import { NotableProjects } from '../NotableProjects/NotableProjects';
import { BackendProjects } from '../BackendProjects/BackendProjects';

import "./Portfolio.scss";
import scrollReveal from '../../utils';

export const Portfolio: FC = () => {
  const revealSection = useRef(null);

  useEffect(() => {
    scrollReveal(revealSection)
  }, []);

  return (
    <div className="portfolio" id="projects" >
      <div className="frontend-projects">

        <div className="top-bar">
          <div className="stripes" />
          <div className="light-bar" />
        </div>

        <div className="projects-wrap container">
          <div className="section-description inverse">
            <span className="tagline">Some projects I have worked on</span>
            <p className="section-name">Portfolio</p>
          </div>
          <div className="featured-projects load-hidden" ref={revealSection}>
            <FeaturedProject />
          </div>
          <NotableProjects />
        </div>
      </div >

      <BackendProjects />
    </div>
  )
};
