import React from "react";

import { TwitterIcon, GithubLinkIcon, LinkedInIcon } from '../../assets/images/';
import "./Footer.scss";

export const Footer = () => (
  <div className="footer">
    <div className="top-bar">
      <div className="stripes" />
      <div className="middle light-bar">

        <div className="section-description">
          <span className="tagline custom">Have a project or looking for a good developer to join your team?</span>
        </div>

        <p className="contact-me-text">I am currently seeking for an opportunity to work in a great team or on your next project.</p>
        <div className="buttons-wrap">
          <a href="" className="mail-me-button">send me mail</a>
          <a href="" className="download-cv-button">Download Resume</a>
        </div>
      </div>
      <div className="stripes" />
    </div>
    <div className="footer-container">
      <div className="social-links-wrap">
        <div className="social-icons">
          <a href="https://github.com/ayodejiAA" className="link" title="Github"><GithubLinkIcon /></a>
          <a href="https://www.linkedin.com/in/ayodeji-afolabi/" className="link" title="LinkedIn"><LinkedInIcon /></a>
          <a href="https://www.twitter.com/agilejsdev" className="link" title="Twitter"><TwitterIcon /></a>
        </div>
        <div className="footer-text">
          <span>Personal Portfolio Website V1 - Github</span>
        </div>
      </div>
    </div>
  </div>
);
