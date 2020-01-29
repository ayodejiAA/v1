import React, { FunctionComponent } from 'react';

import "./About.scss";

export const About: FunctionComponent = () => (
  <div className="about">
    <div className="about-background" />
    <div className="about-body">
      <div className="image-section">
        <div className="image" style={{ backgroundImage: `url(../../assets/images/portrait.png)` }} />
      </div>
      <div className="about-me">
        <h1 className="greeting-text">{"< hello world"}<span className="text-pointer">_</span>{" />"}</h1>
        <h3 className="name">Ayodeji Afolabi.</h3>
        <h2 className="title">Full Stack Developer.</h2>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit impedit alias numquam, quam error voluptatibus pariatur nulla, corrupti qui, magnam assumenda vero maiores quibusdam. Officia itaque corrupti obcaecati perspiciatis!</p>
        {/* <div className="description"> </div> */}
      </div>
    </div>
  </div>
);
