import React, { Component } from 'react';
import './../styles/weekdeal.css';
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

class Weekdeal extends Component {
	constructor() {
		super();
		this.state = { time: {}, seconds: 345600 };
		this.newMethod();
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
		if (this.timer == 0 && localStorage.getItem('s') > 0) {
			this.timer = setInterval(this.countDown, 1000);
		  }
	  }
	
	newMethod() {
		if (localStorage.getItem("s") === null) {
			localStorage.setItem('s', this.state.seconds);
		}
	}

	  secondsToTime(secs){
		localStorage.setItem('s', secs);
		let days = Math.floor(secs/(60*60*24));

		let divisor_for_hours = secs % (60*60*24);
		let hours = Math.floor(divisor_for_hours / (60*60));
	
		let divisor_for_minutes = divisor_for_hours % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);
	
		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);
		localStorage.setItem('s', secs);
	
		let obj = {
		  "h": hours,
		  "m": minutes,
		  "s": seconds,
		  "d": days
		};
		return obj;
	  }
	
	  componentDidMount() {
		let timeLeftVar = this.secondsToTime(localStorage.getItem('s'));
		this.setState({ time: timeLeftVar });
	  }
	
	  startTimer() {
		if (this.timer == 0 && localStorage.getItem('s') > 0) {
		  this.timer = setInterval(this.countDown, 1000);
		}
	  }
	
	  countDown() {
		// Remove one second, set state so a re-render happens.
		let seconds = localStorage.getItem('s') - 1;
		this.setState({
		  time: this.secondsToTime(seconds),
		  seconds: seconds,
		});
		
		// Check if we're at zero.
		if (seconds == 0) { 
		  clearInterval(this.timer);
		}
	  }
	
  render() {
    return (
      <div className="deal_ofthe_week">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-6">
					<div className="deal_ofthe_week_img">
						<img src={ require("./../images/deal_ofthe_week.png")} alt=""/>
					</div>
				</div>
				<div className="col-lg-6 text-right deal_ofthe_week_col">
					<div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
						<div className="section_title">
							<h2>Deal Of The Week</h2>
						</div>
						<ul className="timer">
							<li className="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="day" className="timer_num">03</div>
								<div className="timer_unit">Day</div>
							</li>
							<li className="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="hour" className="timer_num">{this.state.time.h}</div>
								<div className="timer_unit">Hours</div>
							</li>
							<li className="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="minute" className="timer_num">{this.state.time.m}</div>
								<div className="timer_unit">Mins</div>
							</li>
							<li className="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="second" className="timer_num">{this.state.time.s}</div>
								<div className="timer_unit">Sec</div>
							</li>
						</ul>
						<div className="red_button_deal_ofthe_week_button"><a href="#">shop now</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>

    );
  }
}

export default Weekdeal;
