import React, { useRef, useEffect } from "react";

import {
  TwitterIcon,
  GithubLinkIcon,
  LinkedInIcon
} from "../../assets/static/";
import "./Footer.scss";
import { Button } from "../common/Button/Button";
import scrollReveal from "../../utils";

export const Footer = () => {
  const revealSection = useRef(null);

  useEffect(() => {
    scrollReveal(revealSection)
  }, []);

  return (
    <div id="contact" className="footer" ref={revealSection}>
      <div className="top-bar">
        <div className="stripes" />
        <div className="middle light-bar">
          <div className="section-description">
            <span className="tagline custom">
              Have a project or looking for a good developer to join your team?
          </span>
          </div>

          <p className="contact-me-text">
            I am currently seeking for an opportunity to work in a great team or
            on your next project.
        </p>
          <div className="buttons-wrap">
            <a href="/mail" >
              <Button fill={false}>Send me mail</Button>
            </a>
            <a href="/download">
              <Button fill={true}>Download Resume</Button>
            </a>


          </div>
        </div>
        <div className="stripes" />
      </div>
      <div className="footer-container">
        <div className="social-links-wrap">
          <div className="social-icons">
            <a
              href="https://github.com/ayodejiAA"
              className="link"
              title="Github"
            >
              <GithubLinkIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/ayodeji-afolabi/"
              className="link"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.twitter.com/agilejsdev"
              className="link"
              title="Twitter"
            >
              <TwitterIcon />
            </a>
          </div>
          <div className="footer-text">
            <span>Personal Portfolio Website V1 - Github</span>
          </div>
        </div>
      </div>
    </div>
  )
};
