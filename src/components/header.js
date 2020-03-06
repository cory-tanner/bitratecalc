import React from 'react';
import Socials from './modules/socials';
import SVGIcon from './modules/SVGIcon';

const Header = () => (
  <header className="header">
    <SVGIcon name="logo" className="header__logo" />
    <h1 className="t-display header__display">Bitrate Calc</h1>
    <Socials />
  </header>
)

export default Header;