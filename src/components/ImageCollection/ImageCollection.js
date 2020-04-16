import React, { Component } from 'react';
import './ImageCollection.css';
import imageOne from '../../assets/image14.png';
import imageTwo from '../../assets/image15.png';
import imageThree from '../../assets/image16.png';
import imageFour from '../../assets/image14.png';
import imageFive from '../../assets/image15.png';
import imageSix from '../../assets/image16.png';

class ImageCollection extends Component {

  openWebsite1 = () => {
    if (this.props.displayNum === "0") {
      window.open("https://www.courant.com/community/hc-ugc-article-kingswood-oxford-student-raises-6000-for-ca-2017-08-22-story.html")
    } else if (this.props.displayNum === "1") {
      window.open("https://www.newcountrymercedes.com/")
    }
  }

  openWebsite2 = () => {
    if (this.props.displayNum === "0") {
      window.open("http://www.westhartfordnews.com/news/local-student-raises-funds-for-the-american-cancer-society-colon-cancer-research/article_3c7559ba-ee30-5934-bbcd-08f059a21b64.html")
    } else if (this.props.displayNum === "1") {
      window.open("https://www.millermotorcars.com/")
    }
  }

  openWebsite3 = () => {
    if (this.props.displayNum === "0") {
      window.open("https://we-ha.com/west-hartford-student-hold-second-annual-cars-colon-cancer/")
    } else if (this.props.displayNum === "1") {
      window.open("https://www.data-mail.com/")
    }
  }

  render() {

    let id, displayText, images, displayItem1, displayItem2, displayItem3
    if (this.props.displayNum === "0") {
      id = "news"
      displayText = "In The News"
      images = [[imageOne, "Hartford Courant"], [imageTwo, "West Hartford News"],[imageThree, "we-ha.com"]]
      displayItem1 = <img className="imageCollectionImage" src={images[0][0]} alt={images[0][1]} onClick={this.openWebsite1}/>
      displayItem2 = <img className="imageCollectionImage" src={images[1][0]} alt={images[1][1]} onClick={this.openWebsite2}/>
      displayItem3 = <img className="imageCollectionImage" src={images[2][0]} alt={images[2][1]} onClick={this.openWebsite3}/>
    } else if (this.props.displayNum === "1") {
      id = "partners"
      displayText = "Our Valued Partners"
      images = [[imageFour, "New Country Mercedes-Benz Hartford"], [imageFive, "Miller Motorcars of Greenwich"], [imageSix, "Data-Mail"]]
      displayItem1 = <h1 className="imageCollectionH1" onClick={this.openWebsite1}>New Country Mercedes-Benz Hartford</h1>
      displayItem2 = <h1 className="imageCollectionH1" onClick={this.openWebsite2}>Miller Motorcars of Greenwich</h1>
      displayItem3 = <h1 className="imageCollectionH1" onClick={this.openWebsite3}>Data-Mail</h1>
    }

    return (
      <div className="imageCollection" id={id}>
        <h1>{displayText}</h1>
        <div className="imageCollectionContainerOne">
          {displayItem1}
          {displayItem2}
          {displayItem3}
        </div>
      </div>
    );
  }
}

export default ImageCollection;