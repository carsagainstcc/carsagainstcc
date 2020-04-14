import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

  render() {
    return (
      <div className="navBar">
          <div className="navBarItemCollection">
              <button className="navBarButton">About</button>
              <button className="navBarButton">Donate</button>
              <button className="navBarButton">Contact</button>
          </div>
      </div>
    );
  }
}

export default NavBar;