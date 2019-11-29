import React from 'react';
import '../../styles/components/socials.css';
import SVGIcon from "./SVGIcon";


// Stateless React Component
const Socials = () => (
  <nav className="socials">
    <a className="socials__link" href="https://twitter.com/Ctannerweb" aria-label="Cory Tanner’s Twitter">
      <SVGIcon name="twitter" className="socials__social" />
    </a>

    <a className="socials__link" href="https://github.com/Ctannerweb" aria-label="Cory Tanner’s GitHub">
      <SVGIcon name="github" className="socials__social" />
    </a>

    <a className="socials__link" href="https://linkedin.com/in/cory-tanner/" aria-label="Cory Tanner’s LinkedIn">
      <SVGIcon name="linkedin" className="socials__social" />
    </a>
  </nav>
)

export default Socials;