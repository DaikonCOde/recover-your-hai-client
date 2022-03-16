import React from 'react'
import { MdTaskAlt } from 'react-icons/md';

import Before from '../../../../assets/before.png';
import During from '../../../../assets/during.png';
import After from '../../../../assets/after.png';

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
        <h2 className="title">
          ¿Porqué debería de ser tu asesor capilar?
        </h2>
      </div>
      <p className="paragraph">
        Estos son algunos de los beneficios que recibiras por
        tenerme como tu asesor.
      </p>
      <ul className="listBenefits">
        { 
          benefits.map( (benefit) => (
            <li className="item" key={benefit.id}>
              <i> <MdTaskAlt /> </i>
              <span>{benefit.label}</span>
            </li>
          ) )
        }

      </ul>
      <div className="duringProccess" >
        <div className="card">
          <img src={Before} alt="before the proccess" />
          <span>Antes</span>
        </div>
        <div className="card">
          <img src={During} alt="during the proccess" />
          <span>Durante</span>
        </div>
        <div className="card">
          <img src={After} alt="after the proccess" />
          <span>Despues</span>
        </div>
      </div>
    </ContentHairAdvisor>
  )
}

export default HairAdvisor