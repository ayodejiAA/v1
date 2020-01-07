import React, { FunctionComponent } from 'react';

import { FeaturedProject } from '../FeaturedProject/FeaturedProject';
import { NotableProjects } from '../NotableProjects/NotableProjects';
import { BackendProjects } from '../BackendProjects/BackendProjects';
import "./Portfolio.scss";

export const Portfolio: FunctionComponent = () => (
  <div className="portfolio">
    <div className="frontend-projects">

      <div className="top-bar">
        <div className="stripes" />
        <div className="light-bar" />
      </div>

      <div className="projects-wrap">
        <div className="section-description inverse">
          <span className="tagline">Some projects I have worked on</span>
          <p className="section-name">Portfolio</p>
        </div>
        <div className="featured-projects">
          <FeaturedProject />
        </div>
        <NotableProjects />
      </div>
    </div >

    <BackendProjects />
  </div>
);
