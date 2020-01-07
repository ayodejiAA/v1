import React, { FunctionComponent } from 'react';

import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Experience } from './components/Experience/Experience';
import { SkillsSection } from './components/Skills/Skills';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Footer } from './components/Footer/Footer';

import { data } from './data';

const App: FunctionComponent = () => (
  <>
    <Header />
    <About />
    <Experience data={data} />
    <SkillsSection />
    <Portfolio />
    <Footer />
  </>
);

export default App;
