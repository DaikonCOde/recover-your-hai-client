import React from 'react'
import { ContentExperience } from './ExperienceStyles'

import ButtonCTA from '../../../../commons/ButtonCTA';

const Experience = () => {
  return (
    <ContentExperience>
      <div className="header">
        <p className="subTitle">Mira como es la </p>
        <h2 className="title">Experiencia de <br /> Recover Your Hair</h2>
      </div>
      <div className="body">
        <div className="video">

        </div>
        <h4 className="subTitle">
          Lo he vivido y voy ayudarte
        </h4>
        <p className="paragraph">
          Cuando fui a elegir una clínica había tantas opciones que me sentía bloqueado. Como saber si elegía la correcta en algo tan importante. Tras mucho investigar y preguntar me decidí, sin embargo me sentía un poco incomprendido en un país extraño y a la vuelta.<br />
          Por eso me gustaría ayudarte con todo los pasos que fueron dificiles para mi.
        </p>
        <ButtonCTA 
          label='¡Quiero Asesoramiento!'
          styles="display: block; margin: 0 auto;"
        />
      </div>
    </ContentExperience>
  )
}

export default Experience