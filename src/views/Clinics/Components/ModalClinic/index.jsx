import Modal from "../../../../layout/ModalLayout"
import MedicalPark from "../../../../assets/medical-park.png";

import { ContentModalClinic } from './ModalClinicStyles';

const ModalClinic = ({ onHide }) => {
  return (

    <Modal onHide={onHide} >
      <ContentModalClinic>
        <h2 className="title">Clínica</h2>
        <div className="brand">
          <img src={MedicalPark} alt="" />
        </div>
        <div className="about">
          <h3 className="subTitle">Sobre la clínica</h3>
          <p className="paragraph">
          Una de las favoritas en la península. Ha cogido gran nombre por ser la clínica de Cristiano Ronaldo, con una gran calidad y un precio intermedio. tienen clínicas en Madrid, Marbella, Oporto, Lisboa, Braga y Vilamoura desde 4000€.  
          </p>
        </div>
        <div className="priceRange">
          <h3 className="subTitle">Rango de precios</h3>
          <ul className="list">
            <li className="item">€ 1000</li>
            <li className="item">€ 3500</li>
          </ul>
        </div>
        <div className="location">
          <h3 className="subTitle">Ubicación</h3>
          <div className="map"></div>
        </div>
        <div className="gallery">
          <h3  className="subTitle">Galería</h3>
          <ul className="list">
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
          </ul>
        </div>
      </ContentModalClinic>

    </Modal>
  )
}

export default ModalClinic