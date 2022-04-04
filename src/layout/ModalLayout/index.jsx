import { ContentModal } from './ModalStyles';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

const Modal = ({ children, onHide }) => {
  return (
    <> 
      <ContentModal 
        as={motion.div} 
      >
        <motion.div 
          className="modal"
          initial= {{ opacity: 0, scale: 0  }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0 } }}
        >
          <i className='close'  onClick={onHide} >
            <MdClose />
          </i>
          {children}
        </motion.div>

      </ContentModal>
      <motion.div className='overlay'
        initial= {{ opacity: 0  }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: {delay: 0.5} }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </>
  )
}

export default Modal