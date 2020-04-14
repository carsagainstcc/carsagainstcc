import React, { Component } from 'react';
import './Hero.css';

let p1 = "Cars Against Colon Cancer is intended to raise awareness and requests voluntary donations for the American Cancer Society. The donations are targeted for research for colon cancer."
let p2 = "Benjamin established Cars Against Colon Cancer when his grandmother, Ellen Lerman, was diagnosed with colon cancer in 2015. Despite her valiant efforts to combat the disease she passed away June 22, 2018. This year’s car show celebrates her memory."
let p3 = " At the first car show in 2016, Benjamin was a junior at the Kingswood Oxford School in West Hartford. Kingswood Oxford hosted the show on their school grounds in both 2016 and 2017. Last year, as well as this year, New Country Mercedes Benz of Hartford is the venue."
let p4 = "Private car owners, dealerships and car clubs display cars to support Benjamin’s cause. It is expected that, like previous years, cars such as Pagani, Ferrari, Porsche, Mercedes Benz, Jaguar, … will be on exhibit."

class Hero extends Component {

  render() {
    return (
      <div className="hero">

          <h1>About Cars Against Colon Cancer...</h1>
          <p className="heroP">{p1}</p>
          <p className="heroP">{p2}</p>
          <p className="heroP">{p3}</p>
          <p className="heroP">{p4}</p>
      </div>
    );
  }
}

export default Hero;