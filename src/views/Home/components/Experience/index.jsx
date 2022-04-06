import React from 'react'
// components
import ButtonCTA from '../../../../commons/ButtonCTA';
// styles
import { ContentExperience } from './ExperienceStyles';
// animations
import { motion } from 'framer-motion';
import { fadeInUp, zoomIn } from '../../../../styles/Animations';
// assets
import Stars from '../../../../assets/stars-lottie.gif';



const Experience = () => {
  return (
    <ContentExperience
    >
      <div className="header">
        <motion.img 
          src={Stars} alt="" 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={zoomIn()}
        />
        <motion.p 
          className="subTitle"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp()}
        >
          Mira como es la 
        </motion.p>
        <motion.h2 
          className="title" 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp()}
        > 
          Experiencia de <br /> Recover Your Hair 
        </motion.h2>
      </div>
      <div className="body">
        <motion.div 
          className="video"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp()}
        >
          <iframe src="https://www.youtube.com/embed/ZABEDPRW_3c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </motion.div>
        <motion.h4 
          className="subTitle"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInUp()}
        >
          Lo he vivido y voy ayudarte
        </motion.h4>
        <motion.p 
          className="paragraph"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInUp()}
        >
          Cuando fui a elegir una clínica había tantas opciones que me sentía bloqueado. Como saber si elegía la correcta en algo tan importante. Tras mucho investigar y preguntar me decidí, sin embargo me sentía un poco incomprendido en un país extraño y a la vuelta.<br />
          Por eso me gustaría ayudarte con todo los pasos que fueron dificiles para mi.
        </motion.p>
        <ButtonCTA 
          label='¡Quiero Asesoramiento!'
          styles="display: block; margin: 0 auto;"
          animation={ {delay: 0} }
        />
      </div>
    </ContentExperience>
  )
}

export default Experience