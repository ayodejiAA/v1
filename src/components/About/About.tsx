import React, { FunctionComponent } from 'react';
import { Button } from '../common/Button/Button';
import portrait from '../../assets/images/portrait.png'

import "./About.scss";

export const About: FunctionComponent = () => (
  <div className="about container">
    <div className="about-body">
      <div className="image-section">
        <div className="image" style={{ backgroundImage: `url(${portrait})` }} />
      </div>
      <div className="about-me">
        <h1 className="greeting-text">Hi there, my name is <span className="ellipsis">...</span></h1>
        <h1 className="name">Ayodeji Afolabi.</h1>
        <h1 className="title">Software Engineer.</h1>
        <div className="text">
          <p>
            I am a software engineer based in Lagos, Nigeria. I enjoy designing and building
            scalable and meaningful things that live on the internet, whether that be front-facing or backend applications.
          </p>
          <br />
          <p>
            I have a diverse set of skills, ranging from web design tools like HTML + CSS  + Javascript,
            to Python, PHP, all the way to web development frameworks and Linux server administration.
          </p>
        </div>

        <div className="buttons-wrap">
          <a href="mailto:afolabiayodejia@gmail.com" ><Button fill={false}>Send me mail</Button></a>
          <a
            href="https://www.canva.com/design/DAEMl0X5vUM/cRp5DENPimU0bcKN4ZuCDg/view"
            target="_blank"
            rel="noopener noreferrer"><Button fill={true}>Download Resume</Button></a>
        </div>

      </div>
    </div>
  </div>
);
