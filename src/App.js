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

  openInsta = () => {
    window.open("https://www.instagram.com/carsagainstcoloncancer/")
  }

  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <Logo/>
          <NavBar/>
        </div>
        <div className="appContainerOne">
          <img src={Image4} alt="Pagani" className="appImageOne" onClick={this.openInsta}/>
          <Hero/>
        </div>
        <ImageCollection displayNum="1"/>
        <div className="appContainerTwo">
          <img src={Image11} alt="Cars Lined Up" className="appImageTwo"/>
        </div>
        <ImageCollection displayNum="0"/>
        <Contact/>
      </div>
    );
  }
}

export default App;
