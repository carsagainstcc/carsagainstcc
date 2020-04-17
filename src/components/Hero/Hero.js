import React, { Component } from 'react';
import './Hero.css';

let p1 = "Cars Against Colon Cancer is holding its 5th annual event in 2020. Benjamin Lerman Coady, a Junior at Union College, conceived, organized and runs this event."
let p2 = "Cars Against Colon Cancer is intended to raise awareness and requests voluntary donations for the American Cancer Society. The donations are targeted for research for colon cancer."
let p3 = "Benjamin established Cars Against Colon Cancer when his grandmother, Ellen Lerman, was diagnosed with colon cancer in 2015. Despite her valiant efforts to combat the disease she passed away June 22, 2018. This year’s car show celebrates her memory."
let p4 = "At the first car show in 2016, Benjamin was a junior at the Kingswood Oxford School in West Hartford. Kingswood Oxford hosted the show on their school grounds in both 2016 and 2017. In 2018 and 2019 New Country Mercedes Benz of Hartford is the venue. Due to the COVID-19 pandemic details are still being sorted out where the 5 th annual show will be held."

class Hero extends Component {

  render() {
    return (
      <div className="hero">

          <h1 className="heroH1" id="about">About Cars Against Colon Cancer:</h1>
          <p className="heroP">{p1}</p>
          <p className="heroP">{p2}</p>
          <p className="heroP">{p3}</p>
          <p className="heroP">{p4}</p>
      </div>
    );
  }
}

export default Hero;