import { useState, useEffect } from 'react';
import BeforeAndAfter from '../../../../components/BeforeAndAfter';

import { ContentStories } from './StoriesStyles'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Stories = () => {

  const slideRef = document.querySelector('#resultsSlide');
  const [ traslate, setTraslate ] = useState(0);
  const [ childsSlide, setChildsSlide] = useState(0);

  useEffect( () => {
    const amount = slideRef?.childElementCount;

    setChildsSlide(amount)
  }, [slideRef] )
  

  const handleArrows = (e, position) => {
    // porcent to tranlate
    const amountTraslate = ((100 / childsSlide) )

    // max and min porcent to traslate
    const max = Math.round(amountTraslate * (childsSlide - 1));
    const min = 0

    // from which arrow comes the event
    if (position === 'right') {
      // value to traslate
      const arrowRightTraslate = amountTraslate + traslate;
      // exceed the max?
      if( arrowRightTraslate > max) return;
      // set the new position of traslate
      setTraslate(arrowRightTraslate);
    }
    
    if (position === 'left') {
      // value to traslate
      const arrowLeftTraslate = traslate - amountTraslate ;
      // exceed the min?
      if( arrowLeftTraslate < min) return;
      // set the new value of traslate
      setTraslate(arrowLeftTraslate);
    }
  }


  return (
    <ContentStories>
      <div className="header">
        <p className="subTitle">Estos son algunos de nuestros</p>
        <h2 className="title">Casos de Éxito</h2>
      </div>
      <div className="body">
        <p className="paragraph">
          En Recover creemos en la calidad y el largo plazo. Hacemos un exhaustivo seguimiento de la evolución de nuestros pacientes antes, durante y despues del tratamiento. Desde hacer un estudio sobre tu caso en particular, acompañarte en el viaje para que todo vaya como hemos prometido con un correcto y seguro seguimiento después del viaje.<br />
          Nos encanta conocer personalmente a nuestros clientes y enseñarles todo el proceso que seguirán al detalle
        </p>
        <div className="contentSlides">
          <div 
            className="resultsSlide"
            id='resultsSlide'
            css={ ` 
              width: ${ childsSlide }00%; 
              transform: translateX(-${traslate}%)` }
          >
            <BeforeAndAfter 
              urlAfter='https://images.unsplash.com/photo-1647086990103-032e8485c6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'

              urlBefore = 'https://images.unsplash.com/photo-1647065149352-5614a2325104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            />
            <BeforeAndAfter 
              urlAfter='https://images.unsplash.com/photo-1647086990103-032e8485c6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'

              urlBefore = 'https://images.unsplash.com/photo-1647065149352-5614a2325104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            />
            <BeforeAndAfter 
              urlAfter='https://images.unsplash.com/photo-1647086990103-032e8485c6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'

              urlBefore = 'https://images.unsplash.com/photo-1647065149352-5614a2325104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            />
            <BeforeAndAfter 
              urlAfter='https://images.unsplash.com/photo-1647086990103-032e8485c6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'

              urlBefore = 'https://images.unsplash.com/photo-1647065149352-5614a2325104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            />
          </div>
          <i className="arrowLeft arrow" onClick={ (e) => handleArrows(e, 'left') } >
            <MdKeyboardArrowLeft />
          </i>
          <i  className="arrowRight arrow" onClick={ (e) => handleArrows(e, 'right') } >
            <MdKeyboardArrowRight />
          </i>
          <div className="contentArrows">
          </div>
        </div>
      </div>
    </ContentStories>
  )
}

export default Stories;