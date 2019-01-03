import React, { Component } from 'react';
import './../styles/banner.css';
import './../styles/responsive.css';
import './../styles/bootstrap4/bootstrap.min.css';
import image from './../images//banner_1.jpg';
import image1 from './../images//banner_2.jpg';
import image2 from './../images//banner_3.jpg';
//import './../plugins/colorbox/colorbox.css';
//import './../plugins/OwlCarousel2-2.2.1/animate.css';
//import './../plugins/font-awesome-4.7.0/css/font-awesome.min.css';
//import './../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
//import './../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
//import './../plugins/OwlCarousel2-2.2.1/animate.css';
//import './../plugins/font-awesome-4.7.0/css/font-awesome.min.css';

//import $ from './../js/jquery-3.2.1.min.js';
//import './../styles/bootstrap4/popper.js';
//import * as bootstrap from './../styles/bootstrap4/bootstrap.min.js';
//import './../plugins/greensock/TweenMax.min.js';
//import './../plugins/greensock/TimelineMax.min.js';
//import './../plugins/scrollmagic/ScrollMagic.min.js';
//import './../plugins/greensock/animation.gsap.min.js';
//import './../plugins/greensock/ScrollToPlugin.min.js';
//import  './../plugins/OwlCarousel2-2.2.1/owl.carousel.js';
//import './../plugins/easing/easing.js';
//import './../plugins/parallax-js-master/parallax.min.js';
//import './../plugins/colorbox/jquery.colorbox-min.js';
//import './../js/about.js';
class Banner extends Component {
  render() {
    return (
      <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="banner_item align-items-center" style={{backgroundImage:"url("+image+")"}}>
              <div className="banner_category">
                <a href="categories.html">women's</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="banner_item align-items-center" style={{backgroundImage:"url("+image1+")"}}>
              <div className="banner_category">
                <a href="categories.html">accessories's</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="banner_item align-items-center" style={{backgroundImage:"url("+image2+")"}}>
              <div className="banner_category">
                <a href="categories.html">men's</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Banner;

