import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import HeaderAdaptive from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
  const matches = useMediaQuery('(min-width: 820px)');
  return <>{matches ? <HeaderDesktop /> : <HeaderAdaptive />}</>;
};

export default Header;
