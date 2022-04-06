import { useState } from 'react'
// Components
import BeforeAndAfter from '../../components/BeforeAndAfter'
import ButtonCTA from '../../commons/ButtonCTA'
import ModalPatients from './Components/ModalPatients';
import Patient from './Components/Patient';
// animate
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../../styles/Animations';
// styles
import { ContentPatients } from './PatientsStyles'


const Patients = () => {

  const [ isOpenModal, setIsOpenModal ] = useState(false);

  return (
    <>
      <ContentPatients
        as={ motion.section }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        exit={{ opacity: 0}}
      >
        <div className="header">
          <motion.h2 
            className="title"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp(0.8)}
          >
            Algunos de los más de <span>100 casos </span> <br /> que confiaron en <span>Recover Your Hair</span> 
          </motion.h2>
        </div>
        <div className="listPatients">
          <Patient handleModal={setIsOpenModal} />
          <Patient handleModal={setIsOpenModal} />
        </div>
      </ContentPatients>
      <AnimatePresence>
        {
          isOpenModal && (
            <ModalPatients onHide={ () => setIsOpenModal(false) }/>
          )
        }
      </AnimatePresence>
    </>
  )
}

export default Patients