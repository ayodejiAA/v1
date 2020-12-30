import React, { FC, useRef, useEffect } from 'react';

import {
  CheckIcon,
  ToolsIcon,
  RecycleIcon,
  OthersIcon,
  JavaScriptIcon,
  NodejsIcon,
  TypeScriptIcon,
  ReactIcon,
  PythonIcon,
  DjangoIcon,
  ApolloGraphqlIcon,
  HtmlIcon,
  CssIcon,
  PhpIcon,
  NestjsIcon
} from '../../assets/static/';
import SkillGridIcon from '../common/SkillGridIcon/SkillGridIcon';
import scrollReveal from '../../utils';
import { skills as data } from "../../data";

import './Skills.scss';

export const SkillsSection: FC = () => {
  const revealSection = useRef(null);

  useEffect(() => {
    scrollReveal(revealSection)
  }, []);

  return (
    <div id="skills" className="skills container load-hidden" ref={revealSection}>
      <div className="section-description">
        <span className="tagline">Technologies I have worked with</span>
        <p className="section-name">Skills</p>
      </div>
      <div className="skills-section">
        <div className="grid-container">
          <SkillGridIcon name="JavaScript" SVGIcon={JavaScriptIcon} bgColor="#F7DF1E" fill />
          <SkillGridIcon name="TypeScript" SVGIcon={TypeScriptIcon} bgColor="#3178C6" />
          <SkillGridIcon name="Python" SVGIcon={PythonIcon} bgColor="#3776AB" />
          <SkillGridIcon name="PHP" SVGIcon={PhpIcon} bgColor="#777BB4" />
          <SkillGridIcon name="Node.js" SVGIcon={NodejsIcon} bgColor="#339933" />
          <SkillGridIcon name="React" SVGIcon={ReactIcon} bgColor="#61DAFB" fill />
          <SkillGridIcon name="Nest.js" SVGIcon={NestjsIcon} bgColor="#E0234E" />
          <SkillGridIcon name="HTML5" SVGIcon={HtmlIcon} bgColor="#E34F26" />
          <SkillGridIcon name="CSS3" SVGIcon={CssIcon} bgColor="#1572B6" />
          <SkillGridIcon name="Django" SVGIcon={DjangoIcon} bgColor="#092E20" />
          <SkillGridIcon name="Apollo GraphQL" SVGIcon={ApolloGraphqlIcon} bgColor="#311C87" />
        </div>
        <div className="tools-section">
          <div className="skills-wrap">
            <h3 className="skills-heading"><ToolsIcon className="header-icon" />
            TOOLS
            </h3>
            {
              data.tools.map((item, index) => (
                <p key={index}><span><CheckIcon /></span>{item}</p>
              ))
            }
          </div>
          <div className="skills-wrap">
            <h3 className="skills-heading"><RecycleIcon className="header-icon" />
            TESTING
            </h3>
            {
              data.testing.map((item, index) => (
                <p key={index}><span><CheckIcon /></span>{item}</p>
              ))
            }
          </div>
          <div className="skills-wrap">
            <h3 className="skills-heading"><OthersIcon className="header-icon" />
            OTHERS
            </h3>
            {
              data.others.map((item, index) => (
                <p key={index}><span><CheckIcon /></span>{item}</p>
              ))
            }
          </div>
          <div className="skills-wrap">
            {
              data.others2.map((item, index) => (
                <p key={index}><span><CheckIcon /></span>{item}</p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};
