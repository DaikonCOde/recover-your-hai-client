// hooks
import { useState, useEffect } from 'react';
// Component
import BeforeAndAfter from '../../../../components/BeforeAndAfter';
// styles
import { ContentStories } from './StoriesStyles'
// animation
import { motion } from "framer-motion";
import { fadeInUp, zoomIn } from '../../../../styles/Animations';
// icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
// assets
import Celebration from '../../../../assets/celebration-lottie.gif';

const Stories = () => {

  const slideRef = document.querySelector('#resultsSlide');
  const [ traslate, setTraslate ] = useState(0);
  const [ childsSlide, setChildsSlide] = useState(0);

  // change before and after
  useEffect( () => {
    const amount = slideRef?.childElementCount;

    setChildsSlide(amount)
  }, [slideRef] )
  

  // function to change the before and after slide
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
        <motion.img 
          src={Celebration} alt="" 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={zoomIn()}
        />
        <motion.p 
          className="subTitle" 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp()}
        >
          Estos son algunos de nuestros
        </motion.p>
        <motion.h2 
          className="title"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp()}
        >
          Casos de ??xito
        </motion.h2>
      </div>
      <div className="body">
        <motion.p 
          className="paragraph"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp()}
        >
          En Recover creemos en la calidad y el largo plazo. Hacemos un exhaustivo seguimiento de la evoluci??n de nuestros pacientes antes, durante y despues del tratamiento. Desde hacer un estudio sobre tu caso en particular, acompa??arte en el viaje para que todo vaya como hemos prometido con un correcto y seguro seguimiento despu??s del viaje.<br />
          Nos encanta conocer personalmente a nuestros clientes y ense??arles todo el proceso que seguir??n al detalle
        </motion.p>
        <motion.div 
          className="contentSlides"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp()}
        >
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
        </motion.div>
      </div>
    </ContentStories>
  )
}

export default Stories;