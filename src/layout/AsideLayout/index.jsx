import React from 'react'
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md'

import { ContentAside } from './AsideLayoutStyles';

const AsideLayout = ({close, title, children}) => {
  return (
    <>
      <ContentAside
        as ={ motion.nav }
        initial={{ x: 300 }}
        animate={ { x: 0, transition: { delay: 0.5, duration: 0.5 } } }
        exit={{x: 300, transition: { duration: 0.5 }  }}
      >
        <div className="top">
          <h5 className="label">{title}</h5>
          <i onClick={ close } >
            <MdClose />
          </i>
        </div>
      
        { children }
      
      </ContentAside>

      <motion.div className='overlay'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{opacity: 0, transition: { delay: 0.5, duration: 0.5 }}}
        transition={{ duration: 0.5}}
        onClick={close} 
      ></motion.div>
    </>
  )
}

export default AsideLayout