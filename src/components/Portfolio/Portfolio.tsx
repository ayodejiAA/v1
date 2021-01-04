import React, { FC, useRef, useEffect } from 'react';

import { FeaturedProject } from '../FeaturedProject/FeaturedProject';
import { NotableProject } from '../NotableProjects/NotableProject';
import { BackendProject } from '../BackendProjects/BackendProject';

import scrollReveal from '../../utils';
import { projects } from "../../data";
import "./Portfolio.scss";


export const Portfolio: FC = () => {
  const revealSection = useRef(null);

  const { featured, notable, backend } = projects

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
            {
              featured.map((project, idx) => <FeaturedProject {...project} reverse={Boolean(idx % 2)} />)
            }
          </div>
          <div className="notable-projects">
            <p className="section-name">Notable Projects</p>
            <div className="grid">
              {
                notable.map((project) => <NotableProject {...project} />)
              }
            </div>
          </div>
        </div>
      </div >

      <div className="backend-projects container">
        <div className="section-description">
          <span className="tagline">backend stuff I have built</span>
          <p className="section-name">Backend</p>
        </div>
        <div className="grid-container">
          {
            backend.map(project => <BackendProject {...project} />)
          }

        </div>
      </div >
    </div>
  )
};
