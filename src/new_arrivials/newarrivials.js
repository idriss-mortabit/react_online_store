import React, { Component } from 'react';
import './../styles/newarrivials.css';
import './../styles/responsive.css';
import './../styles/bootstrap4/bootstrap.min.css';
import ProductsContainer1 from './../client_order/productlistNewArrRow1';
import ProductsContainer2 from './../client_order/productlistNewArrRow2';
import { Carousel, CarouselInner, CarouselItem, Container, Row, Mask} from "mdbreact";
import {BrowserRouter as Router, Link } from 'react-router-dom';
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

class Newarrivials extends Component {
  render() {
    return (
      <div className="new_arrivals">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="section_title new_arrivals_title">
              <h2>New Arrivals</h2>
            </div>
          </div>
        </div>
        <div className="new_arrivial_products">
        <ul>
        <Container>
        <Carousel activeItem={1} length={2} slide={true} showControls={false} showIndicators={false} multiItem className="z-depth-1">
          <CarouselInner>
            <Row>
              <CarouselItem itemId="1">
              <ProductsContainer1 />
              <Mask overlay="black-light" />
              </CarouselItem>
              <CarouselItem itemId="2">
              <ProductsContainer2 />                
              </CarouselItem>
            </Row>
          </CarouselInner>
        </Carousel>
      </Container>
        </ul>
        </div>
		</div>
	</div>
    );
  }
}

export default Newarrivials;
