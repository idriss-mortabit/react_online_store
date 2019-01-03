import React, { Component } from 'react';
import './../styles/newsletter.css';
import './../styles/responsive.css';
import './../styles/bootstrap4/bootstrap.min.css';
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
class Newsletter extends Component {
  render() {
    return ( 
<div className="newsletter">
		<div className="newsletter_background parallax-window" data-parallax="scroll" data-speed="0.8"></div>
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="newsletter_container d-flex flex-lg-row flex-column align-items-center justify-content-start">

						<div className="newsletter_content text-lg-left text-center">
							<div className="newsletter_title">sign up for news and offers</div>
							<div className="newsletter_subtitle">Subcribe to lastest smartphones news & great deals we offer</div>
						</div>
						<div className="newsletter_form_container ml-lg-auto">
							<form action="#" id="newsletter_form" className="newsletter_form d-flex flex-row align-items-center justify-content-center">
								<input type="email" className="newsletter_input" placeholder="Your Email" required="required"/>
								<button type="submit" className="newsletter_button">subscribe</button>
							</form>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
    );
  }
}

export default Newsletter;
