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
    <ContentHome 
      as={ motion.section }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:1, delay: 0.2 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Stories />
      <Experience />
      <HairAdvisor />
      <Clinics />
    </ContentHome>
  )
}

export default Home