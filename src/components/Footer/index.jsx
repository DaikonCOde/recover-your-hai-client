import React from 'react'

import { ContentFooter } from './FooterStyles';
import ButtonCTA from '../../commons/ButtonCTA';

import { MdPlace, MdPhone, MdMail,  } from 'react-icons/md';
import { FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <ContentFooter>
      <h3 className="title">Contáctanos</h3>
      <p className="paragraph">
        Es hora de tomar accion y emprender este cambio en el cual te acompañaremos desde el minuto 0. <br /><br /> 
        Se parte de nuestros casos de exito e inspira a otros a tomar accion como lo hiciste tú.
      </p>
      <form className="form">
        <input type="text" placeholder='Tu nombre' />
        <input type="text" placeholder='Tu correo electrónico' />
        <input type="text" placeholder='WhatsApp' />
        <textarea type="text" placeholder='Tu mensaje' />
        <ButtonCTA  
          label='Enviar'
          styles='display:block; margin:10px auto 0; width: 100%;'
        />
      </form>
      <div className="networks">
        <div className="location">
            <p className="title">Ubicación</p>
            <ul className="contact">
              <li className="item">
                <i>
                  <MdPlace />
                </i>
                <span>Madrid, España</span>
              </li>
              <li className="item">
                <i>
                  <MdPhone />
                </i>
                <span>+34 685 32 13 99</span>
              </li>
              <li className="item">
                <i>
                  <MdMail />
                </i>
                <span>sepeto2000@gmail.com</span>
              </li>
            </ul>
        </div>
        <div className="socials">
          <p className="title">Redes Sociales</p>
          <ul className="contact">
            <li className="item">
              <i>
                <MdPlace />
              </i>
              <span>Facebook</span>
            </li>
            <li className="item">
              <i>
                <FaInstagramSquare />
              </i>
              <span>Instagram</span>
            </li>
            <li className="item">
              <i>
                <FaYoutube />
              </i>
              <span>Youtube</span>
            </li>
          </ul>
        </div>
      </div>
    </ContentFooter>
  )
}

export default Footer