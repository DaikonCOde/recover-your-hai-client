import { useState } from 'react'
// Components
import BeforeAndAfter from '../../components/BeforeAndAfter'
import ButtonCTA from '../../commons/ButtonCTA'
import ModalPatients from './Components/ModalPatients';
// animate
import { motion, AnimatePresence } from 'framer-motion';
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
          <h2 className="title">Algunos de los más de <span>100 casos </span> <br /> que confiaron en <span>Recover Your Hair</span> </h2>
        </div>
        <div className="listPatients">
          <div className="patient">
            <h2 className="title">Caso Erik</h2>
            <BeforeAndAfter 
              urlAfter='https://images.unsplash.com/photo-1647086990103-032e8485c6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
              urlBefore = 'https://images.unsplash.com/photo-1647065149352-5614a2325104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            />
            <ButtonCTA 
              label={'Ver historial'}
              styles={'display: block;   margin: 20px auto 0'}
              handleClick={ () => setIsOpenModal(true) }
            />
          </div>
          <div className="patient">
            <h2 className="title">Caso Erik</h2>
            <BeforeAndAfter 
              urlAfter='https://images.unsplash.com/photo-1647086990103-032e8485c6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
              urlBefore = 'https://images.unsplash.com/photo-1647065149352-5614a2325104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            />
            <ButtonCTA 
              label={'Ver historial'}
              styles={'display: block;   margin: 20px auto 0'}
              handleClick={ () => setIsOpenModal(true) }
            />
          </div>
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