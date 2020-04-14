import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <Logo/>
          <NavBar/>
        </div>
        <Hero/>
      </div>
    );
  }
}

export default App;
