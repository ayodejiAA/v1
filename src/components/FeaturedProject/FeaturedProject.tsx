import React, { FunctionComponent } from 'react';

import { CompassIcon, GithubLinkIcon, ExternalLinkIcon } from '../../assets/static/';
import portrait from '../../assets/images/portrait.png'

import './FeaturedProject.scss';

export const FeaturedProject: FunctionComponent = () => (
  <>
    <div className="featured-project">
      <div className="image-section">
        <div className="image" style={{ backgroundImage: `url(${portrait})` }} />
      </div>
      <div className="details">

        <div className="center">
          <div className="featured-heading">
            <span className="project-type-name">FEATURED PROJECT</span>
          </div>
          <div className="featured-body">
            <h2 className="project-name">E-Store</h2>
            <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore minus aut, nulla animi nemo dolor, dolores a aspernatur facere officiis iste excepturi eum optio</p>
          </div>
          <div className="featured-footer">
            <div className="svg-border"><CompassIcon className="stack-icon" /></div>
            <div className="techs">
              <p> React, Javascript, Webpack, firebase, redux, redux-sagas</p>
            </div>

          </div>
        </div>

        <div className="sidebar">
          <a href="" title="External" className="link"><ExternalLinkIcon /></a>
          <a href="" title="Github" className="link"><GithubLinkIcon /></a>
        </div>
      </div>
    </div>

    <div className="featured-project switch">
      <div className="image-section">
        <div className="image" style={{ backgroundImage: `url(${portrait})` }} />
      </div>
      <div className="details">

        <div className="center">
          <div className="featured-heading">
            <span className="project-type-name">FEATURED PROJECT</span>
          </div>
          <div className="featured-body">
            <h2 className="project-name">E-Store</h2>
            <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore minus aut, nulla animi nemo dolor, dolores a aspernatur facere officiis iste excepturi eum optio</p>
          </div>
          <div className="featured-footer">
            <div className="svg-border"><CompassIcon className="stack-icon" /></div>
            <div className="techs">
              <p> React, Javascript, Webpack, firebase, redux, redux-sagas</p>
            </div>

          </div>
        </div>

        <div className="sidebar">
          <a href="" title="External" className="link"><ExternalLinkIcon /></a>
          <a href="" title="Github" className="link"><GithubLinkIcon /></a>
        </div>
      </div>
    </div>
  </>
)
