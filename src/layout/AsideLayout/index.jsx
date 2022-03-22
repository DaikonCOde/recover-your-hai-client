import React from 'react'
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md'

import { ContentAside, Overlay } from './AsideLayoutStyles';

const AsideLayout = ({close, title, children}) => {
  return (
    <>
      <ContentAside
        as ={ motion.nav }
        initial={{ x: 300 }}
        animate={ { x: 0 } }
        transition={ { delay: 0.3, duration: 0.5 } }
        exit={{x: 300  }}
      >
        <div className="top">
          <h4 className="label">{title}</h4>
          <i onClick={ close } >
            <MdClose />
          </i>
        </div>
      
        { children }
      
      </ContentAside>

      <Overlay 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{opacity: 0}}
        transition={{ duration: 0.3 }}
        onClick={close} 
      ></Overlay>
    </>
  )
}

export default AsideLayout