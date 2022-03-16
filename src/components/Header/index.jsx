import React from 'react';

import Logo from '../../assets/logo-verde.png';
import { MdMenu } from "react-icons/md";

import { ContentHeader, ContentLogo, NavMenuMobile } from './HeaderStyles';

const Header = () => {
  return (
    <ContentHeader>
      <ContentLogo>
        <img src={Logo} alt="Recover Your Hair logo" />
      </ContentLogo>
      <NavMenuMobile>
        <i>
          <MdMenu />
        </i>
      </NavMenuMobile>
    </ContentHeader>
  )
};

export default Header;
