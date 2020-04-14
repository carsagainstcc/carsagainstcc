import React, { Component } from 'react';
import './ImageCollection.css';
import imageOne from '../../assets/image14.png';
import imageTwo from '../../assets/image15.png';
import imageThree from '../../assets/image16.png';

class ImageCollection extends Component {

  render() {
    return (
      <div className="imageCollection">
        <img src={imageOne} alt="West Hartford News"/>
        <img src={imageTwo} alt="Hartford Courant"/>
        <img src={imageThree} alt="we-ha.com"/>
      </div>
    );
  }
}

export default ImageCollection;