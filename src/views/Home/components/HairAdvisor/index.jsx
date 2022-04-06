import React from 'react'
// icons
import { MdTaskAlt } from 'react-icons/md';
// assets
import Before from '../../../../assets/before.png';
import During from '../../../../assets/during.png';
import After from '../../../../assets/after.png';
import Check from '../../../../assets/check-lottie.gif';
// animation
import { motion } from 'framer-motion'
import { fadeInUp, fadeInRight, zoomIn } from '../../../../styles/Animations';
// styles
import { ContentHairAdvisor } from './HairAdvisorStyles';

const benefits = [
  { 
    id: 1,
    label: 'Te daré conocimiento y confianza en todo el proceso.'
  },
  { 
    id: 2,
    label: 'Selección de calidad de clínicas capilares.'
  },
  { 
    id: 3,
    label: 'Cobertura médica con sanitas en toda España.'
  },
  { 
    id: 4,
    label: 'Contar conmigo no tiene costos extras pero si beneficios.'
  },
  { 
    id: 5,
    label: 'Guío grupos hasta estambul, con atención 24 hs.'
  },
  { 
    id: 6,
    label: 'Te presentare pacientes de tu ciudad.'
  },
]

const HairAdvisor = () => {
  return (
    <ContentHairAdvisor>
      <div className="header">
        <motion.h2 
          className="title"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          ¿Porqué debería de ser tu asesor capilar?
        </motion.h2>
      </div>
      <motion.p 
        className="paragraph"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        Estos son algunos de los beneficios que recibiras por
        tenerme como tu asesor.
      </motion.p>
      <ul className="listBenefits">
        { 
          benefits.map( (benefit) => (
            <motion.li 
              className="item" 
              key={benefit.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInRight}
            >
              <img src={Check} alt="" />
              <span>{benefit.label}</span>
            </motion.li>
          ) )
        }

      </ul>
      <div className="duringProccess" >
        <motion.div 
          className="card"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.7 }}
          variants={zoomIn}
        >
          <img src={Before} alt="before the proccess" />
          <span>Antes</span>
        </motion.div>
        <motion.div 
          className="card"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.7 }}
          variants={zoomIn}
        >
          <img src={During} alt="during the proccess" />
          <span>Durante</span>
        </motion.div>
        <motion.div 
          className="card"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.7 }}
          variants={zoomIn}
        >
          <img src={After} alt="after the proccess" />
          <span>Despues</span>
        </motion.div>
      </div>
    </ContentHairAdvisor>
  )
}

export default HairAdvisor