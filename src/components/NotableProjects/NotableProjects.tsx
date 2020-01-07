import React, { FunctionComponent } from 'react';

import { OpenFolderIcon, ExternalLinkIcon, GithubLinkIcon } from '../../assets/images/';
import './NotableProjects.scss';

export const NotableProjects: FunctionComponent = () => (
  <div className="notable-projects">
    <p className="section-name">Notable Projects</p>
    <div className="grid">

      <div className="card">
        <div className="body">
          <div className="techs"><span>JavaScript</span>
            <span>React</span><span>Node</span><span>Express</span>
          </div>
          <div className="details">
            <h2>Banka</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem fuga laudantium assumenda quam. Illo voluptatibus vero enim</p>
          </div>
        </div>
        <div className="footer-container">
          <OpenFolderIcon className="open-folder-icon" />
          <div className="links">
            <a href="" title="External" className="link"><ExternalLinkIcon /></a>
            <a href="" title="Github" className="link"><GithubLinkIcon /></a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="body">
          <div className="techs"><span>JavaScript</span>
            <span>React</span><span>Node</span><span>Express</span>
          </div>
          <div className="details">
            <h2>Banka</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem fuga laudantium assumenda quam. Illo voluptatibus vero enim</p>
          </div>
        </div>
        <div className="footer-container">
          <OpenFolderIcon className="open-folder-icon" />
          <div className="links">
            <a href="" title="External" className="link"><ExternalLinkIcon /></a>
            <a href="" title="Github" className="link"><GithubLinkIcon /></a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="body">
          <div className="techs"><span>JavaScript</span>
            <span>React</span><span>Node</span><span>Express</span>
          </div>
          <div className="details">
            <h2>Banka</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem fuga laudantium assumenda quam. Illo voluptatibus vero enim</p>
          </div>
        </div>
        <div className="footer-container">
          <OpenFolderIcon className="open-folder-icon" />
          <div className="links">
            <a href="" title="External" className="link"><ExternalLinkIcon /></a>
            <a href="" title="Github" className="link"><GithubLinkIcon /></a>
          </div>
        </div>
      </div>

    </div>
  </div>
);
