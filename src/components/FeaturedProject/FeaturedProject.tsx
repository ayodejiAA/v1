import React, { FunctionComponent } from 'react';

import { CompassIcon, GithubLinkIcon, ExternalLinkIcon } from '../../assets/images/';
import './FeaturedProject.scss';

export const FeaturedProject: FunctionComponent = () => (

  <div className="featured-project">
    <div className="image"></div>
    <div className="details">
      <div className="sidebar" />

      <div className="center">
        <span className="project-type-name">FEATURED PROJECT</span>
        <h2 className="project-name"> E-Store</h2>
        <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore minus aut, nulla animi nemo dolor, dolores a aspernatur facere officiis iste excepturi eum optio</p>
        <div className="stack">
          <div className="svg-border"><CompassIcon className="stack-icon" /></div>
          <p> React, Javascript, typecript, webpack, firebase, redux, redux-sagas</p>
        </div>
      </div>

      <div className="sidebar right">
        <a href="" title="External" className="link"><ExternalLinkIcon /></a>
        <a href="" title="Github" className="link"><GithubLinkIcon /></a>
      </div>
    </div>
  </div>
)