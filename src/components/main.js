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
    <section className="section section-support">
      <h3 className="section__support-heading t-body-heading">Was this useful?</h3>
      <p className="section__support-copy t-body">Support the developer by using my <a href="https://brave.com/cor272" className="t-link">Brave Referral Link</a> and give the web browser a try!</p>
    </section>
  </main>
)

export default Main;