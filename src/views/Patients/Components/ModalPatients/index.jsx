import React from 'react'
import Modal from "../../../../layout/ModalLayout"

import MedicalPark from "../../../../assets/medical-park.png";

import BeforeAnfAfter from '../../../../components/BeforeAndAfter';

import { ContentModalPatients } from './ModalPatientsStyles';

const ModalPatients = ({ onHide }) => {
  return (
    <Modal onHide={onHide}>
      <ContentModalPatients>
        <h2 className="title">Caso Erik Villar</h2>
        <div className="clinic">
          <h3 className="subTitle">Clínica</h3>
          <img src={MedicalPark} alt="" />
        </div>
        <div className="result">
          <h3 className="subTitle">Resultado</h3>
          <BeforeAnfAfter 
            urlAfter='https://images.unsplash.com/photo-1647086990103-032e8485c6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
            urlBefore ='https://images.unsplash.com/photo-1647065149352-5614a2325104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          />
        </div>
        <div className="dataPatient">
          <h3 className="subTitle">Datos del paciente</h3>
          <ul className="list">
            <li className="item">
              <span className="label">Paciente:</span>
              <span className="data">Erik Villar</span>
            </li>
            <li className="item">
              <span className="label">Forículos:</span>
              <span className="data">4200</span>
            </li>
            <li className="item">
              <span className="label">Edad:</span>
              <span className="data">32 años</span>
            </li>
            <li className="item">
              <span className="label">Ebicación:</span>
              <span className="data">Santiago de cospotela</span>
            </li>
          </ul>
        </div>
        <div className="beforeTreatment">
          <h3 className="subTitle">Antes de someterse al tratamiento</h3>
          <div className="listPhotos">
            <div className="photo">
            </div>
            <div className="photo">
            </div>
            <div className="photo">
            </div>
          </div>
        </div>
        <div className="afterTreatment">
          <h3 className="subTitle">Después del tratamiento</h3>
          <div className="listPhotos">
            <div className="contentPhoto">
              <div className="photo"></div>
              <span className='timeLater' >10 días</span>
            </div>
            <div className="contentPhoto">
              <div className="photo"></div>
              <span className='timeLater' >4 meses</span>
            </div>
            <div className="contentPhoto">
              <div className="photo"></div>
              <span className='timeLater' >6 meses</span>
            </div>
          </div>
        </div>

        <div className="experience">
          <h3 className="subTitle">Erik te cuenta como fue su experiencia con nosotros</h3>
          <div className="video"></div>
        </div>

      </ContentModalPatients>
    </Modal>
  )
}

export default ModalPatients