import React from 'react';
import '../styles/components/main.css';
import Intro from './modules/intro';
import Calculator from './modules/calculator'


// Stateless React Component
const Main = () => (
  <main className="main">
    <Intro />
    <Calculator />
  </main>
)

export default Main;