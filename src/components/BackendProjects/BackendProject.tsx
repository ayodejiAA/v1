import React, { FC } from 'react';

import { GithubLinkIcon, DocLinkIcon } from '../../assets/static';
import portrait from '../../assets/images/portrait.png'
import './BackendProject.scss';

interface IBackendProject {
  name: string
  shortDescription: string
  technologies: string[]
  imagePath?: string
  docLink?: string
  githubLink?: string
}


export const BackendProject: FC<IBackendProject> = ({ name, technologies, githubLink, docLink, shortDescription }) => (
  <div className="backend-project-card">
    <div className="background-image" style={{ backgroundImage: `url(${portrait})` }} />
    <div className="content">
      <div className="heading">
        <div className="desc-container">
          <span className="desc">{shortDescription}</span>
        </div>
        <span className="project-title">{name}</span>
      </div>
      <div className="details">
        <div className="techs">
          {
            technologies.map(tech => <span>{tech}</span>)
          }
        </div>
        <div className="links">
          {docLink && <a href={docLink} target="_blank" rel="noopener noreferrer" title="External" className="link"><DocLinkIcon /></a>}
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" title="Github" className="link"><GithubLinkIcon /></a>}
        </div>
      </div>
    </div>
  </div>
);
