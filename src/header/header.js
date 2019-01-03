import React, { Component } from 'react';
import './../styles/main_styles.css';
import './../styles/responsive.css';
import './../styles/bootstrap4/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CartContainer from './../client_order/clientorder';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './../client_order/reducers'
import { getAllProducts } from './../client_order/actions'
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

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
  render() {
    return ( 
<div>
	<header className="header">

      <div className="top_bar">
        <div className="top_bar_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                  <ul className="top_bar_contact_list">
                    <li><div className="question">Have any questions?</div></li>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <div>001-1234-88888</div>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      <div>info.deercreative@gmail.com</div>
                    </li>
                    </ul>
                    <div className="social-btns">
                      <a className="btn facebook" href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a className="btn instagram" href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a className="btn whatsapp" href="#">
                        <i className="fa fa-whatsapp"></i>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>				
      </div>
	
  <div className="header_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header_content d-flex flex-row align-items-center justify-content-start">
                <div className="logo_container">
                  <Link to="/home">
                    <div className="logo_text">Ext<span>Neg</span></div>
                  </Link>
                </div>
                <nav className="main_nav_contaner ml-auto">
                  <ul className="main_nav">
                    <li><Link to='/' aria-hidden="true">Home</Link></li>
                    <li><Link to="/shop" aria-hidden="true">Shop</Link></li>
                    <li><Link to="/contact_us" aria-hidden="true">Contact</Link></li>
                    <li><Link to="/about_us" aria-hidden="true">About</Link></li>
                  </ul>

                  <div className="shopping_cart">
                  <a>
                    <i onClick={() => this.setState({ open: !this.state.open })} className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </a>
                  </div>
                  <div className="hamburger menu_mm">
                    <i className="fa fa-bars menu_mm" aria-hidden="true"></i>
                  </div>
                </nav>
              </div>
               <div className="card-body">
                 {this.state.open && <CartContainer />}
                 </div>
            </div>
          </div>
        </div>
      </div>		
    </header>
    <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">

	</div>
</div>
    );
  }
}

export default Header;
