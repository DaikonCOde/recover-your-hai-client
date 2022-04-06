import React from 'react'
import BeforeAndAfter from '../../../../components/BeforeAndAfter'
import ButtonCTA from '../../../../commons/ButtonCTA'
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../styles/Animations';


const Patient = ({handleModal}) => {
  return (
    <div>
      <motion.div 
        className="patient"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp(1)}
      >
        <h2 className="title">Caso Erik</h2>
        <BeforeAndAfter 
          urlAfter='https://images.unsplash.com/photo-1647086990103-032e8485c6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
          urlBefore = 'https://images.unsplash.com/photo-1647065149352-5614a2325104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        />
        <ButtonCTA 
          label={'Ver historial'}
          styles={'display: block;   margin: 20px auto 0'}
          handleClick={ () => handleModal(true) }
        />
      </motion.div>
    </div>
  )
}

export default Patient