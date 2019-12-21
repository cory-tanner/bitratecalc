import React from 'react';

// Stateless React Component
const Intro = () => (
  <section className="section grid">
    <h3 className="t-section-heading grid__item section__heading">Made For Streamers</h3>
    <p className="t-body grid__item section__copy" data-grid-medium="6">Need an easy calculator for your Mixer/Twitch stream? I got ya <span role="img" aria-label="smile">😁</span>!! The results of <a href="#resultLow" className="t-link">Low</a> and <a href="#resultHigh" className="t-link">High</a> under recommended bitrate are based off industry standards for streaming low movement content like Teamfight Tactics. While the high value will serve you well if you’re playing a game with lots of movement like Modern Warfare and more first person shooters.</p>
    <p className="t-body grid__item section__copy" data-grid-medium="6">Find your sweet spot for the games you’re playing. The recommended allocation of your personal internets upload speed is 60% dedication for streaming. Feel free to change that value below but be careful. The less amount of Mbps you leave for your game the higher chance you have of getting packet loss and having disruptions in your gameplay.</p>
  </section>
)

export default Intro;