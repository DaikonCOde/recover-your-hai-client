import { useState } from 'react';
// Components
import NavMobile from '../NavMobile';
import { Link } from 'react-router-dom'
// Animation
import { motion, AnimatePresence } from 'framer-motion';
// Assets
import Logo from '../../assets/logo-ryh.svg';
import { MdMenu } from "react-icons/md";
// Styles
import { ContentHeader } from './HeaderStyles';

const Header = () => {

  const [ isOpenMenu, setIsOpenMenu ] = useState(false)

  const toggleMenu = () => setIsOpenMenu(!isOpenMenu)

  return (
    <>
      <ContentHeader 
        as={motion.header}
        initial={{ boxShadow: 'none' }}
        animate={{ boxShadow: '0 5px 10px rgba(16, 16, 16, 0.15)' }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        <motion.div className="contentBrand"
          initial={{ x: -160  }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to='/'>
            <img src={Logo} alt="Recover Your Hair logo" />
          </Link>

        </motion.div>

        <motion.div 
          className="navMenuMobile" 
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={ toggleMenu }
        >
          <i>
            <MdMenu />
          </i>
        </motion.div>
      </ContentHeader>

      {/* open menu */}
      <AnimatePresence>
        { 
          isOpenMenu && (
            <NavMobile 
              close={toggleMenu}
            />
          )
        }
      </AnimatePresence>
    </>
  )
};

export default Header;
