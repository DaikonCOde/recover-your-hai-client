import React from 'react'
// hooks
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
// components
import Hero from './components/Hero';
import Stories from './components/Stories';
import Experience from './components/Experience';
import HairAdvisor from './components/HairAdvisor';

import Clinics from './components/Clinics';
// styles
import { ContentHome } from './HomeStyles'

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