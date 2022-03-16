import React from 'react'
// assset
import Portada from '../../../../assets/portada-jose-mobile.png'
// commos components
import Button from '../../../../commons/ButtonCTA';
// Icons
import { MdPlayArrow } from "react-icons/md";
// Styles
import { ContentHero, Title, ContentCTA } from './HeroStyles'

const Hero = () => {
  return (
    <ContentHero port={Portada}>
      <Title>
        <h1 className="title">
          <span className="subTitle">Conviertete en tu  </span>
          <br />Mejor versión
        </h1>
        <p  className="paragraph">
          Es hora de tomar accion y emprender este en el cual te 
          acompañaremos desde el minuto 0. <br />
          Se parte de nuestros casos de exito e inspira  otros a  tomar 
          accion como lo hiciste tu.
        </p>
      </Title>
      <ContentCTA>
        <Button label='Más Información' />
        <div className='media' >
          <i>
            <MdPlayArrow />
          </i>
          <span>Ver video</span>
        </div>
      </ContentCTA>
    </ContentHero>
  )
}

export default Hero