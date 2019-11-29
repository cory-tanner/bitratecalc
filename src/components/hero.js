import React from 'react';
import '../styles/components/hero.css';
import Socials from './modules/socials';


// Stateless React Component
const Hero = () => (
  <header className="hero">
    <h1 className="t-display hero__display">Bitrate Calc</h1>
    <Socials />
  </header>
)

export default Hero;