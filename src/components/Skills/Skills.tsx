import React, { FunctionComponent } from 'react';

import { ToolsIcon, RecycleIcon, OthersIcon, JavaScriptIcon, Nodejs } from '../../assets/static/';

import './Skills.scss';

export const SkillsSection: FunctionComponent = () => (
  <div className="skills container">
    <div className="section-description">
      <span className="tagline">Technologies I have worked with</span>
      <p className="section-name">Skills</p>
    </div>
    <div className="skills-section">
      <div className="grid-container">
        <div><Nodejs className="icon" /></div>
        <div><JavaScriptIcon className="icon" /> </div>
        <div><Nodejs className="icon" /> </div>
        <div><JavaScriptIcon className="icon" /> </div>
        <div><Nodejs className="icon" /> </div>
        <div><JavaScriptIcon className="icon" /> </div>
        <div><Nodejs className="icon" /> </div>
        <div><JavaScriptIcon className="icon" /> </div>
        <div><Nodejs className="icon" /> </div>
        <div><JavaScriptIcon className="icon" /> </div>
        <div><Nodejs className="icon" /> </div>
        <div><JavaScriptIcon className="icon" /> </div>
      </div>
      <div className="tools-section">

        <div className="skills-wrap">
          <h3 className="skills-heading">
            <RecycleIcon className="header-icon" />
            TESTING</h3>
          <p>Mocha</p>
          <p>Chai</p>
          <p>Postman </p>
        </div>
        <div className="skills-wrap">
          <h3 className="skills-heading"><OthersIcon className="header-icon" />
            OTHERS</h3>
          <p>Wordpress</p>
          <p>Figma</p>
          <p>Photoshop</p>
          <p>Swagger doc</p>
        </div>
        <div className="skills-wrap">
          <h3 className="skills-heading"><ToolsIcon className="header-icon" />
            TOOLS</h3>
          <p>Git & Github</p>
          <p>Command Line</p>
          <p>Chrome DevTools</p>
          <p>Travis CI </p>
        </div>
        <div className="skills-wrap">

        </div>
      </div>
    </div>
  </div>
);
