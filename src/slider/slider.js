import React, { Component } from 'react';
import './../styles/slider.css';
import './../styles/responsive.css';
import './../styles/bootstrap4/bootstrap.min.css';
import Background from './../images/slider_1.jpg';
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

class Slider extends Component {
  render() {
    return (
      <div className="main_slider" style={{backgroundImage:'url('+Background+')'}}>
      <div className="container fill_height">
        <div className="row align-items-center fill_height">
          <div className="col">
            <div className="main_slider_content">
              <h6>Spring / Summer Collection 2017</h6>
              <h1>Get up to 30% Off New Arrivals</h1>
              <div className="red_button shop_now_button"><a href="#">shop now</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Slider;
