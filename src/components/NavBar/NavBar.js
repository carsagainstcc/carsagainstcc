import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

  scrollToAbout = () => {
    let element = document.getElementById("about")
    if (element != null) {
      element.scrollIntoView()
    }
  }

  scrollToNews = () => {
    let element = document.getElementById("news")
    if (element != null) {
      element.scrollIntoView()
    }
  }

  scrollToPartners = () => {
    let element = document.getElementById("partners")
    if (element != null) {
      element.scrollIntoView()
    }
  }

  scrollToContact = () => {
    let element = document.getElementById("contact")
    if (element != null) {
      element.scrollIntoView()
    }
  }

  openDonation = () => {
    window.open("https://donate3.cancer.org/?lang=en")
  }
  
  render() {
    return (
      <div className="navBar">
          <div className="navBarItemCollection">
            <h1 className="navBarButton" onClick={this.scrollToAbout}>About</h1>
            <h1 className="navBarButton" onClick={this.scrollToPartners}>Partners</h1>
            <h1 className="navBarButton" onClick={this.scrollToNews}> News</h1>
            <h1 className="navBarButton" onClick={this.scrollToContact}>Contact</h1>
            <h1 className="navBarButton" onClick={this.openDonation}>Donate</h1>
          </div>
      </div>
    );
  }
}

export default NavBar;