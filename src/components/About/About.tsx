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
        <h1 className="greeting-text">Hi there, I am ... </h1>
        <h3 className="name">Ayodeji Afolabi.</h3>
        <h2 className="title">Software Engineer.</h2>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit impedit alias numquam, quam error voluptatibus pariatur nulla, corrupti qui, magnam assumenda vero maiores quibusdam. Officia itaque corrupti obcaecati perspiciatis!</p>

        <div className="buttons-wrap">
        <a href="/mail" ><Button fill={false}>Send me mail</Button></a>
        <a href="/download" ><Button fill={true}>Download Resume</Button></a>
        </div>

      </div>
    </div>
  </div>
);
