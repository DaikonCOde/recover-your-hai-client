import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { BiChevronRight } from 'react-icons/bi';

import { ContentSelectFilter } from './SelectFilterStyles';

const variants = {
  active: {
    transform: 'rotate(90deg)'
  },
  inactive: {
    transform: 'rotate(0deg)'
  }
}

const SelectFilter = ({ label ,values, change, value, name  }) => {

  const [ isOpenOptions, setIsOpenOptions ] = useState(false)
  // const [ value, setValue ] = useState(undefined);
  const controls = useAnimation();

  const selectOption = (value) => {
    change(value);
    setIsOpenOptions(false)
  }

  useEffect( () => {
    if( isOpenOptions  ) {
      controls.start('active');
    } else {
      controls.start('inactive');
    }
  }, [isOpenOptions] )  

  return (
    <ContentSelectFilter>
      <p className="label">{label}</p>

      <div className="custom-select">
        <input 
          type="text" 
          name="select" 
          placeholder='Selecciona un lugar' 
          onClick={ () => setIsOpenOptions(!isOpenOptions) }
          value= {value}
          readOnly
        />
        <motion.i
          variants={variants} 
          initial="inactive"
          animate={controls}
        >
          <BiChevronRight />
        </motion.i>

        <AnimatePresence>
            {isOpenOptions && (
              <motion.ul 
                className="list"
                initial={{ height: 0, padding: '0 17px' }}
                animate={{ height: 'auto' , padding: '10px 17px'}}
                exit={{ height: 0, padding: '0 17px' }}
                transition = {{ duration: 0.2 }}
              >
                {
                  values.map((item) => (
                    
                    <li key={item.id} className='item' onClick={ () => selectOption(item.label) }  >
                      <span >{item.label}</span>
                    </li>
                    
                  ))
                }
              </motion.ul>
            )}
          </AnimatePresence>

      </div>

    </ContentSelectFilter>
  )
}

export default SelectFilter