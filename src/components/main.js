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
      <p className="section__support-copy t-body">Support the developer by sending a tip!</p>

      <div className="section__crypto">
        <div className="section-support__address">
          <img src="./btc.svg" alt="btc-address" />
          <p className="t-body section__crypto__heading">BTC</p>
        </div>

        <div className="section-support__address">
          <img src="./eth.svg" alt="btc-address" />
          <p className="t-body section__crypto__heading">ETH</p>
        </div>
      </div>
      
    </section>
  </main>
)

export default Main;