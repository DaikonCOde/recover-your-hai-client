import React from 'react'

import { ContentHome } from './HomeStyles'

// components
import Hero from './components/Hero';
import Stories from './components/Stories';
import Experience from './components/Experience';
import HairAdvisor from './components/HairAdvisor';
import Clinics from './components/Clinics';

const Home = () => {
  return (
    <ContentHome>
      <Hero />
      <Stories />
      <Experience />
      <HairAdvisor />
      <Clinics />
    </ContentHome>
  )
}

export default Home