import React, { FC, useEffect } from 'react';

import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Experience } from './components/Experience/Experience';
import { SkillsSection } from './components/Skills/Skills';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Footer } from './components/Footer/Footer';

import { TOGGLER } from './constants';
import data from './data';

const App: FC = () => {
  const handleResize = (toggler: HTMLInputElement) => {
    if (innerWidth > 600 && toggler.checked) {
      toggler.checked = false;
    }
  }

  useEffect(() => {
    const toggler: HTMLInputElement = document.querySelector(TOGGLER)
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
