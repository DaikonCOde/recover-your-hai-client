import React from 'react'
// assset
import Portada from '../../../../assets/portada-jose-mobile.png'
// commos components
import Button from '../../../../commons/ButtonCTA';
// animate
import { motion } from 'framer-motion';
import { fadeInUp, fadeInRight, zoomIn } from '../../../../styles/Animations';
// Icons
import { MdPlayArrow } from "react-icons/md";
// Styles
import { ContentHero } from './HeroStyles'


const Hero = () => {
  return (
    <ContentHero port={Portada}>
      <div className='top'>
        <motion.span 
          className="subTitle"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInRight()}
        >
          Conviertete en tu  
        </motion.span>
        <br />
        <motion.h1 
          className="title"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInRight(0.5)}
        >
          Mejor versión
        </motion.h1>
        <motion.p  
          className="paragraph"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeInRight(1)}
        >
          Es hora de tomar accion y emprender este cambio en el cual te 
          acompañaremos desde el minuto 0. <br />
          Se parte de nuestros casos de exito e inspira  otros a  tomar 
          accion como lo hiciste tu.
        </motion.p>
      </div>
      <div className='contentCTA'>
        <Button label='Más Información' 
          animation ={ { delay: 1.5 } }
        />
        <motion.div 
          className='media' 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={zoomIn(2)}
        >
          <i>
            <MdPlayArrow />
          </i>
          <span>Ver video</span>
        </motion.div>
      </div>
    </ContentHero>
  )
}

export default Hero