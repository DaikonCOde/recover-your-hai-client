import React from 'react'
// components
import Card from '../../../../commons/Card';
// assets
import Insparya from '../../../../assets/insparya.png'
// animation
import { motion } from 'framer-motion'
import { fadeInUp } from '../../../../styles/Animations';
// styles
import { ContentClinics } from './ClinicsStyles.js';

const Clinics = () => {
  return (
    <ContentClinics>
      <div className="header">
        <motion.h2 
          className="title"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp()}
        >
          Clínicas
        </motion.h2>
      </div>
      <motion.p 
        className="paragraph"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp()}
      >
        Trabajo con las mejores clínicas de España y Turquía para garantizar la mejor opción para realizar injerto capilar
      </motion.p>
      <Card 
        img={Insparya}
        title='Insparya'
        paragraph='Es una de las favoritas en la peninsula. Ha cogido gran nombre por ser la clinica de Cristiano Ronaldo, con...'
      />
    </ContentClinics>
  )
}

export default Clinics