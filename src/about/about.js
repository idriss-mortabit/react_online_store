import React, { Component } from 'react';
import './../styles/about.css';
import './../styles/about_responsive.css';
import './../styles/bootstrap4/bootstrap.min.css';
import Background from './../images/courses_background.jpg';
import Background1 from './../images/video.jpg';
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
class About extends Component {
  render() {
    return ( 
<div>  
<div className="about">
<br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/>
<br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/>
<br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/>
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="section_title_container text-center">
          <h2 className="section_title">Welcome To Extentia Negoce</h2>
          <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu Vestibulum</p></div>
        </div>
      </div>
    </div>
    <div className="row about_row">
      
      <div className="col-lg-4 about_col about_col_left">
        <div className="about_item">
          <div className="about_item_image">
          <img src={ require("./../images/about_1.jpg")} alt=""/>
          </div>
          <div className="about_item_title"><a href="#">Our Stories</a></div>
          <div className="about_item_text">
            <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
          </div>
        </div>
      </div>


      <div className="col-lg-4 about_col about_col_middle">
        <div className="about_item">
          <div className="about_item_image"><img src={ require("./../images/about_2.jpg")} alt=""/></div>
          <div className="about_item_title"><a href="#">Our Mission</a></div>
          <div className="about_item_text">
            <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 about_col about_col_right">
        <div className="about_item">
          <div className="about_item_image"><img src={ require("./../images/about_3.jpg")} alt=""/></div>
          <div className="about_item_title"><a href="#">Our Vision</a></div>
          <div className="about_item_text">
            <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>



<div className="about">
  <div className="feature_background" styles= {{backgroundImage:'url(' + Background + ')'}}></div>
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="section_title_container text-center">
          <h2 className="section_title">Why Choose Us</h2>
          <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
        </div>
      </div>
    </div>
    <div className="row feature_row">


      <div className="col-lg-6 feature_col">
        <div className="feature_content">

          <div className="accordions">
            
            <div className="elements_accordions">

             gtgtgtgtgtgtg


            </div>

          </div>

        </div>
      </div>

     
    </div>
  </div>
</div>


<div className="about">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="section_title_container text-center">
          <h2 className="section_title">The Best Tutors in Town</h2>
          <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
        </div>
      </div>
    </div>
    <div className="row team_row">
      

      <div className="col-lg-3 col-md-6 team_col">
        <div className="team_item">
          <div className="team_image"><img src={ require("./../images/team_1.jpg")} alt=""/></div>
          <div className="team_body">
            <div className="team_title"><a href="#">Jacke Masito</a></div>
            <div className="team_subtitle">Marketing & Management</div>
            <div className="social_list">
              <ul>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="col-lg-3 col-md-6 team_col">
        <div className="team_item">
          <div className="team_image"><img src={ require("./../images/team_2.jpg")} alt=""/></div>
          <div className="team_body">
            <div className="team_title"><a href="#">William James</a></div>
            <div className="team_subtitle">Designer & Website</div>
            <div className="social_list">
              <ul>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="col-lg-3 col-md-6 team_col">
        <div className="team_item">
          <div className="team_image"><img src={ require("./../images/team_3.jpg")} alt=""/></div>
          <div className="team_body">
            <div className="team_title"><a href="#">John Tyler</a></div>
            <div className="team_subtitle">Quantum mechanics</div>
            <div className="social_list">
              <ul>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="col-lg-3 col-md-6 team_col">
        <div className="team_item">
          <div className="team_image"><img src={ require("./../images/team_4.jpg")} alt=""/></div>
          <div className="team_body">
            <div className="team_title"><a href="#">Veronica Vahn</a></div>
            <div className="team_subtitle">Math & Physics</div>
            <div className="social_list">
              <ul>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
  }
}

export default About;
