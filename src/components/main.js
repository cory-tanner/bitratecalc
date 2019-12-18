import React from 'react';
import Intro from './modules/intro';
import Calculator from './modules/calculator';

const Main = () => (
  <main className="main">
    <Intro />
    <section className="section">
      <h3 className="t-section-heading section__heading">Enter Your Streaming Settings</h3>
      <Calculator />
    </section>
  </main>
)

export default Main;