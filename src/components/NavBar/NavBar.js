import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

  scrollToAbout = () => {
    let element = document.getElementById("about")
    if (element != null) {
      element.scrollIntoView()
    }
  }

  scrollToDonate = () => {
    let element = document.getElementById("donate")
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
  
  render() {
    return (
      <div className="navBar">
          <div className="navBarItemCollection">
            <h1 className="navBarButton" onClick={this.scrollToAbout}>About</h1>
            <h1 className="navBarButton" onClick={this.scrollToDonate}>Donate</h1>
            <h1 className="navBarButton" onClick={this.scrollToContact}>Contact</h1>
          </div>
      </div>
    );
  }
}

export default NavBar;