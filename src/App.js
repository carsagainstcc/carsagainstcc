import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import ImageCollection from './components/ImageCollection/ImageCollection';
import Contact from './components/Contact/Contact'

import Image4 from './assets/image4.png';
import Image11 from './assets/image11.jpg';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <Logo/>
          <NavBar/>
        </div>
        <div className="appContainerOne">
          <img src={Image4} alt="Pagani" className="appImageOne"/>
          <Hero/>
        </div>
        <div className="appContainerTwo">
          <img src={Image11} alt="Cars Lined Up" className="appImageTwo"/>
        </div>
        <ImageCollection displayNum="0"/>
        <ImageCollection displayNum="1"/>
        <Contact/>
      </div>
    );
  }
}

export default App;
