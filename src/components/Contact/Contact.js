import React, { Component } from 'react';
import './Contact.css';
import { SocialIcon } from 'react-social-icons';

class Contact extends Component {

  render() {
    return (
      <div className="contact" id="contact">
        <SocialIcon url="mailto:carsagainstagainstcoloncancer@gmail.com " style={{ height: 100, width: 100 }}/>
        <div className="spacer"></div>
        <SocialIcon url="https://www.instagram.com/carsagainstcoloncancer/" style={{ height: 100, width: 100 }}/>
        <div className="spacer"></div>
        <SocialIcon url="https://www.youtube.com/watch?v=KLEp6PIhcFM" style={{ height: 100, width: 100 }}/>
        
      </div>
    );
  }
}

export default Contact;