import React, { useEffect } from 'react';

import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Experience } from './components/Experience/Experience';
import { SkillsSection } from './components/Skills/Skills';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Footer } from './components/Footer/Footer';

import data from './data';

const FREEZE = 'freeze'
const CLASS_ATTR = 'class'
const TOGGLER = ".toggler"

const App = () => {
  const freezeBody = (toggler: HTMLInputElement) => {
    if (toggler.checked) document.body.className = FREEZE;
    else document.body.removeAttribute(CLASS_ATTR)
  }

  const handleResize = (toggler: HTMLInputElement) => {
    if (innerWidth > 600 && toggler.checked) {
      toggler.checked = false;
      freezeBody(toggler)
    }
  }

  useEffect(() => {
    const toggler: HTMLInputElement = document.querySelector(TOGGLER)
    toggler.addEventListener('change', () => freezeBody(toggler))
    window.addEventListener('resize', () => handleResize(toggler));
    return () => window.removeEventListener('resize', () => handleResize(toggler))
  }, [])

  return (
    <>
      <Header />
      <About />
      <Experience data={data} />
      <SkillsSection />
      <Portfolio />
      <Footer />
    </>
  )
};

export default App;
