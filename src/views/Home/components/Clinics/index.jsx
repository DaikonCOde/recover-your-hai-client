import React from 'react'

// components
import Card from '../../../../commons/Card';

// assets
import Insparya from '../../../../assets/insparya.png'
// styles
import { ContentClinics } from './ClinicsStyles.js';

const Clinics = () => {
  return (
    <ContentClinics>
      <div className="header">
        <h2 className="title">Clínicas</h2>
      </div>
      <p className="paragraph">
        Trabajo con las mejores clínicas de España y Turquía para garantizar la mejor opción para realizar injerto capilar
      </p>
      <Card 
        img={Insparya}
        title='Insparya'
        paragraph='Es una de las favoritas en la peninsula. Ha cogido gran nombre por ser la clinica de Cristiano Ronaldo, con...'
      />
    </ContentClinics>
  )
}

export default Clinics