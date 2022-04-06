import { useState } from 'react'
// Components
import Card from '../../commons/Card';
import NavFilter from './Components/NavFilter';
import ModalClinic from './Components/ModalClinic';
// assets
import Insparya from '../../assets/insparya.png';
import { MdFilterAlt } from 'react-icons/md';
// Animate
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../../styles/Animations';
// Styles
import { ContentClinics } from './ClinicsStyles.js';

const Clinics = () => {

  const [ isOpenFilter, setIsOpenFilter ] = useState(false);
  const [ isOpenModal, setIsOpenModal ] = useState(false);

  const toogleFilter = () => setIsOpenFilter(!isOpenFilter);

  return (
    <>
      <ContentClinics
        as={ motion.section }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        exit={{ opacity: 0}}
      >
        <div className="header">
          <motion.h2 
            className="title"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp(0.6)}
          >
            Clínicas
          </motion.h2>
        </div>
        <motion.div 
          className="flag" onClick={toogleFilter}
          initial={{ x: 100 }} 
          animate={{ x: 0}}  
          transition={{ delay: 2, duration: 0.5 }} 
        >
          <i >
            <MdFilterAlt />
          </i>
        </motion.div>
        <div className="listClinics">
          <Card 
            img={Insparya}
            title={'Insparya'}
            paragraph='Una de las favoritas en la península. Ha cogido gran nombre por ser la clínica de Cristiano Ronaldo, con una gran calidad y un precio intermedio. tienen clínicas en Madrid, Marbella, Oporto, Lisboa, Braga y Vilamoura desde 4000€.'
            handleClick={() => setIsOpenModal(true)}
            animation={{delay: 1.5}}
          />
          <Card 
            img={Insparya}
            title={'Insparya'}
            paragraph='Una de las favoritas en la península. Ha cogido gran nombre por ser la clínica de Cristiano Ronaldo, con una gran calidad y un precio intermedio. tienen clínicas en Madrid, Marbella, Oporto, Lisboa, Braga y Vilamoura desde 4000€.'
            handleClick={() => setIsOpenModal(true)}
          />
          <Card 
            img={Insparya}
            title={'Insparya'}
            paragraph='Una de las favoritas en la península. Ha cogido gran nombre por ser la clínica de Cristiano Ronaldo, con una gran calidad y un precio intermedio. tienen clínicas en Madrid, Marbella, Oporto, Lisboa, Braga y Vilamoura desde 4000€.'
            handleClick={() => setIsOpenModal(true)}
          />
        </div>
      </ContentClinics>

      <AnimatePresence>
        {
          isOpenFilter && (
            <NavFilter close={toogleFilter} />
          )
        }
        {
          isOpenModal && (
            <ModalClinic onHide={ () => setIsOpenModal(false) }/>
          )
        }
      </AnimatePresence>
    </>

  )
}

export default Clinics