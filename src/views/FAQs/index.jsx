import React from 'react'
import { motion } from 'framer-motion'
import { ContentFAQs } from './FAQsStyles';
import Accordion from '../../components/Accordion'

const dataQuestion = [
  {
    idTab: 9087897123,
    label: '¿Porqué es más barato el transplante en Turquía?',
    response: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, cupiditate',
  },
  {
    idTab: 651233431,
    label: '¿Puede fallar el injerto capilar?',
    response: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, cupiditate',
  },
  {
    idTab: 12378673,
    label: '¿Cuál es el máximo de folículos injertados por sesión?',
    response: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, cupiditate',
  },
  {
    idTab: 343149871,
    label: '¿Volverá a crece pelo extraido de la zona donante?',
    response: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, cupiditate',
  },
]

const FAQs = () => {
  return (
    <ContentFAQs
      as={ motion.section }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      exit={{ opacity: 0}}
    >
      <div className="header">
        <h2 className="title">Preguntas frecuentes </h2>
        <p className="paragraph">
          En este apartado podras sacarte muchas dudas comunes que surgen a la hora de investigar sobre estos tratamientos. En el caso de tener dudas sobre algo que no aparece entre estas preguntas no dudes con comunicarte y te asesoro con gusto.
        </p>
      </div>
      
      <div className="listQuestions">
        <h3 className="subTitle">Antes de un injerto capilar</h3>
        <div class="contentAccordion">
          <Accordion
            data={dataQuestion}
          />
        </div>
      </div>

    </ContentFAQs>
  )
}

export default FAQs