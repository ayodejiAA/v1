import React, { FC } from 'react';

import { OpenFolderIcon, ExternalLinkIcon, GithubLinkIcon } from '../../assets/static';
import './NotableProject.scss';

interface INotableProject {
  name: string
  description: string
  link?: string
  githubLink?: string
  technologies: string
}

export const NotableProject: FC<INotableProject> = ({ name, technologies, description, link, githubLink }) => (
  <div className="notable-project-card">
    <div className="body">
      <div className="techs">
        <span>{technologies}</span>
      </div>
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
    <div className="footer-container">
      <OpenFolderIcon className="open-folder-icon" />
      <div className="links">
        {link && <a href={link} target="_blank" rel="noopener noreferrer" title="External" className="link"><ExternalLinkIcon /></a>}
        {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" title="Github" className="link"><GithubLinkIcon /></a>}
      </div>
    </div>
  </div>
);
