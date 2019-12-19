import React from 'react';
import SVGIcon from "./SVGIcon";

const Socials = () => (
  <nav className="socials">
    <a className="socials__link" href="https://twitter.com/squirt11e" aria-label="Cory Tanner’s Twitter">
      <SVGIcon name="twitter" className="socials__social" />
    </a>

    <a className="socials__link" href="https://mixer.com/squirt1e" aria-label="Cory Tanner’s Mixer">
      <SVGIcon name="mixer" className="socials__social" />
    </a>
  </nav>
)

export default Socials;