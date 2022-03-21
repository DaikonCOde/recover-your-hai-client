import { useState } from 'react';
// Components
import NavMobile from '../NavMobile';
// Animation
import { motion, AnimatePresence } from 'framer-motion';
// Assets
import Logo from '../../assets/logo-verde.png';
import { MdMenu } from "react-icons/md";
// Styles
import { ContentHeader, ContentLogo, NavMenuMobile } from './HeaderStyles';

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
        <ContentLogo as={motion.div} 
          initial={{ x: -160  }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={Logo} alt="Recover Your Hair logo" />
        </ContentLogo>
        <NavMenuMobile 
          as={motion.div} 
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          onClick={ toggleMenu }
        >
          <i>
            <MdMenu />
          </i>
        </NavMenuMobile>
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
