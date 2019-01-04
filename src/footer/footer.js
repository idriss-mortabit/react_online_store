import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './../styles/footer.css';
import './../styles/responsive.css';
import './../styles/bootstrap4/bootstrap.min.css';
import Background from './../images/footer_background.png';
//import './../plugins/colorbox/colorbox.css';
//import './../plugins/OwlCarousel2-2.2.1/animate.css';
import './../plugins/font-awesome-4.7.0/css/font-awesome.min.css';
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
class Footer extends Component {
  render() {
    return ( 
      <footer className="footer">
      <div className="footer_background" style={{backgroundImage: `url(${Background})`}}></div>
      <div className="container">
        <div className="row footer_row">
          <div className="col">
            <div className="footer_content">
              <div className="row">
  
                <div className="col-lg-3 footer_col">

                  <div className="footer_section footer_about">
                    <div className="footer_logo_container">
                      <a href="#">
                        <div className="footer_logo_text">Ext<span>Neg</span></div>
                      </a>
                    </div>
                    <div className="footer_about_text">
                      <p>Lorem ipsum dolor sit ametium, consectetur adipiscing elit.</p>
                    </div>
                    <div className="footer_social">
                      <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
  
                <div className="col-lg-3 footer_col">
            

                  <div className="footer_section footer_contact">
                    <div className="footer_title">Contact Us</div>
                    <div className="footer_contact_info">
                      <ul>
                        <li>Email: Info.deercreative@gmail.com</li>
                        <li>Phone:  +(88) 111 555 666</li>
                        <li>40 Baria Sreet 133/2 New York City, United States</li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
  
                <div className="col-lg-3 footer_col">
 
                  <div className="footer_section footer_links">
                    <div className="footer_title">Contact Us</div>
                    <div className="footer_links_container">
                      <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about_us">About</Link></li>
                        <li><Link to="/contact_us">Contact</Link></li>
                        <li><Link to="/return_policy">Return Policy</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
  
                <div className="col-lg-3 footer_col clearfix">

                  <div className="footer_section footer_mobile">
                    <div className="footer_title">Mobile</div>
                    <div className="footer_mobile_content">
                      <div className="footer_image"><a href="#"><img src={ require("./../images/mobile_1.png")} alt=""/></a></div>
                      <div className="footer_image"><a href="#"><img src={ require("./../images/mobile_2.png")} alt=""/></a></div>
                    </div>
                  </div>
                  
                </div>
  
              </div>
            </div>
          </div>
        </div>
  
        <div className="row copyright_row">
          <div className="col">
            <div className="copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
              <div className="cr_text">

               Copyright 2018-{(new Date().getFullYear())} Extentia Negoce - All rights reserved.
               
              </div>
              </div>
              </div>
              <div className="col">
              <div className="copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
              <div className="ml-lg-auto cr_links">
                <ul className="cr_list">
                  <li><Link to="/term_of_use">Terms of Use</Link></li>
                  <li><Link to="/prvacy_policy">Privacy Policy</Link></li>
                </ul>
              </div>
              </div>
              </div>
          </div>
        </div>
    </footer>
    );
  }
}

export default Footer;
