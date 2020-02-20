import React from 'react';
import SVGIcon from "./SVGIcon";

const Socials = () => (
  <nav className="socials">
    <a className="socials__link" href="https://twitter.com/ctannerweb" aria-label="Cory Tanner’s Twitter">
      <SVGIcon name="twitter" className="socials__social" />
    </a>

    <a className="socials__link" href="https://github.com/ctannerweb" aria-label="Cory Tanner’s Github">
      <SVGIcon name="github" className="socials__social" />
    </a>
  </nav>
)

export default Socials;