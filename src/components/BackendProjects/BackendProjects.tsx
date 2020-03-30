import React, {FunctionComponent} from 'react';

import { ExternalLinkIcon, GithubLinkIcon, DocLinkIcon } from '../../assets/static';
import './BackendProjects.scss';


export const BackendProjects: FunctionComponent = () => (
  <div className="backend-projects container">
      <div className="section-description">
        <span className="tagline">backend stuff I have built</span>
        <p className="section-name">Backend</p>
      </div>

      <div className="grid-container">
        <div className="card">
          <div className="background-image" style={{ backgroundImage: `url(../../assets/images/portrait.png)` }} />
          <div className="content">
            <div className="heading">
              <div className="desc-container">
                <span className="desc">Bank Application</span>
              </div>
              <span className="project-title">Banka </span>
            </div>
            <div className="details">
              <div className="techs">
                <span>Express</span>
                <span>Express</span>
                <span>Express</span>
                <span>Express</span>
              </div>
              <div className="links">
                <a href="" title="External" className="link"><ExternalLinkIcon /></a>
                <a href="" title="Github" className="link"><GithubLinkIcon /></a>
                <a href="" title="Documentation" className="link"><DocLinkIcon /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
  </div >
);
