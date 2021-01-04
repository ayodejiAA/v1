import React, { FC } from 'react';

import { CompassIcon, GithubLinkIcon, ExternalLinkIcon } from '../../assets/static/';

import './FeaturedProject.scss';

interface IFeaturedProject {
  name: string
  description: string
  technologies: string
  imagePath: string
  link: string
  githubLink: string
  reverse: boolean
}

export const FeaturedProject: FC<IFeaturedProject> = ({ name, description, technologies, imagePath, link, githubLink, reverse }) =>
(
  <div className={`featured-project ${reverse && "switch" || ""}`}>
    <div className="image-section">
      <img src={`${imagePath}`} className="image" />
    </div>

    <div className="details">
      <div className="center">
        <div className="featured-heading">
          <span className="project-type-name">FEATURED PROJECT</span>
        </div>
        <div className="featured-body">
          <h2 className="project-name">{name}</h2>
          <p className="description">
            {description}
          </p>
        </div>
        <div className="featured-footer">
          <div className="svg-border"><CompassIcon className="stack-icon" /></div>
          <div className="techs">
            <p>{technologies}</p>
          </div>
        </div>
      </div>

      <div className="sidebar">
        <a href={link} target="_blank" rel="noopener noreferrer" title="External" className="link"><ExternalLinkIcon /></a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" title="Github" className="link"><GithubLinkIcon /></a>
      </div>
    </div>
  </div>
)
