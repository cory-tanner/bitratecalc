import React from 'react';
import './App.css';
import Hero from './components/hero';
import Main from './components/main';
import Footer from './components/footer';
import ReactGA from 'react-ga';

function initializeAnalytics() {
  ReactGA.initialize('UA-154481477-2');
  ReactGA.pageview('/index');
}

function App() {
  initializeAnalytics()
  return (
    <div className="App">
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
