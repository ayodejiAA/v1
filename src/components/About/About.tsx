import React, { FunctionComponent } from 'react';

import "./About.scss";

export const About: FunctionComponent = () => (
  <div className="about">
    <div className="about-background" />
    <div className="about-body">
      <div className="my-image">
        Image
      </div>
      <div className="about-me">
        <h1 className="greeting-text">{"< hello world"}<span className="text-pointer">_</span>{" />"}</h1>
        <h3 className="name">Ayodeji Afolabi.</h3>
        <h2 className="title">Full Stack Developer.</h2>
        <div className="description"> <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit impedit alias numquam, quam error voluptatibus pariatur nulla, corrupti qui, magnam assumenda vero maiores quibusdam. Officia itaque corrupti obcaecati perspiciatis!</p> </div>
      </div>
    </div>
  </div>
);
