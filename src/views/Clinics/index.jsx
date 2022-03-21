import React from 'react'
// Components
import Card from '../../commons/Card';
// assets
import Insparya from '../../assets/insparya.png';
// Styles
import { ContentClinics } from './ClinicsStyles.js';

const Clinics = () => {
  return (
    <ContentClinics>
      <div className="header">
        <h2 className="title">Clínicas</h2>
      </div>
      <div className="listClinics">
        <Card 
          img={Insparya}
          title={'Insparya'}
          paragraph='Una de las favoritas en la península. Ha cogido gran nombre por ser la clínica de Cristiano Ronaldo, con una gran calidad y un precio intermedio. tienen clínicas en Madrid, Marbella, Oporto, Lisboa, Braga y Vilamoura desde 4000€.'
        />
        <Card 
          img={Insparya}
          title={'Insparya'}
          paragraph='Una de las favoritas en la península. Ha cogido gran nombre por ser la clínica de Cristiano Ronaldo, con una gran calidad y un precio intermedio. tienen clínicas en Madrid, Marbella, Oporto, Lisboa, Braga y Vilamoura desde 4000€.'
        />
        <Card 
          img={Insparya}
          title={'Insparya'}
          paragraph='Una de las favoritas en la península. Ha cogido gran nombre por ser la clínica de Cristiano Ronaldo, con una gran calidad y un precio intermedio. tienen clínicas en Madrid, Marbella, Oporto, Lisboa, Braga y Vilamoura desde 4000€.'
        />
      </div>
    </ContentClinics>
  )
}

export default Clinics