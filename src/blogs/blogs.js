import React, { Component } from 'react';
import './../styles/blogs.css';
import './../styles/responsive.css';
import './../styles/bootstrap4/bootstrap.min.css';
import Background from './../images/blog_1.jpg';
import Background1 from './../images/blog_2.jpg';
import Background2 from './../images/blog_3.jpg';
import Background3 from './../images/banner_1.jpg';
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

class Blog extends Component {
  render() {
    return ( 
      <div className="blogs">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="section_title">
              <h2>Latest Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row blogs_container">
          <div className="col-lg-4 blog_item_col">
            <div className="blog_item">
              <div className="blog_background" style={{backgroundImage:'url(' + Background + ')'}}></div>
              <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                <h4 className="blog_title">Here are the trends I see coming this fall</h4>
                <span className="blog_meta">by admin | dec 01, 2017</span>
                <a className="blog_more" href="#">Read more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 blog_item_col">
            <div className="blog_item">
              <div className="blog_background" style={{backgroundImage:"url("+Background1+")"}}></div>
              <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                <h4 className="blog_title">Here are the trends I see coming this fall</h4>
                <span className="blog_meta">by admin | dec 01, 2017</span>
                <a className="blog_more" href="#">Read more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 blog_item_col">
            <div className="blog_item">
              <div className="blog_background" style={{backgroundImage:"url("+Background2+")"}}></div>
              <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                <h4 className="blog_title">Here are the trends I see coming this fall</h4>
                <span className="blog_meta">by admin | dec 01, 2017</span>
                <a className="blog_more" href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Blog;


class Singleblog extends Component {
  render() {
    return ( 
      
	<div className="blog">
  <div className="container">
    <div className="row">


      <div className="col-lg-8">
        <div className="blog_content">
          <div className="blog_title">‘I Kept Thinking of Antioch’: Long Before #MeToo, a times Video Journalist Remembered</div>
          <div className="blog_meta">
            <ul>
              <li>Post on <a href="#">May 5, 2018</a></li>
              <li>By <a href="#">admin</a></li>
            </ul>
          </div>
          <div className="blog_image"><img src={ require("./../images/blog_single.jpg")} alt="" /></div>
          <p>Times Insider delivers behind-the-scenes insights into how news, features and opinion come together at The New York Times.Before I could spend the night in my younger sister’s dorm room at Antioch College in Yellow Springs, Ohio — before I could read the spines of her textbooks or drink a disgusting but lovingly prepared vodka/sparkling wine/Red Bull — I had to report to security:</p>
          <div className="blog_quote d-flex flex-row align-items-center justify-content-start">
            <i className="fa fa-quote-left" aria-hidden="true"></i>
            <div>“All sexual interactions at Antioch College must be consensual. Consent means verbally asking and verbally giving or denying consent.”</div>
          </div>
          <p>It was 2004, a decade before the phrase “affirmative consent” made it onto news shows or big university campuses. I was 21, a junior at another college. I think it was the first time I had heard people talk about consent as something you could ask for verbally. It was definitely the first time I’d ever seen it written out like that.</p>
          <p>The first-of-its-kind affirmative consent policy was written by students in 1990 as a response to campus rape. But the first thing anyone who was at Antioch in the ’90s wanted to talk to me about was the media mayhem. When The Associated Press ran an article on the policy with the headline “No huggy, no kissy without a ‘yes’ at Antioch College,” it ignited a cultural firestorm.</p>
          <div className="blog_subtitle">All the current students</div>
          <p>I followed up with for the video told me that being sexual with an Antioch student is different from being sexual with someone else. They spoke of a common language everyone is taught beginning at orientation, so that when one student starts asking questions of another student in the midst of sexual activity, it doesn’t seem so out there.</p>
          <div className="blog_images">
            <div className="row">
              <div className="col-lg-6 blog_images_col"><div className="blog_image_small"><img src={ require("./../images/blog_images_1.jpg")} alt="" /></div></div>
              <div className="col-lg-6 blog_images_col"><div className="blog_image_small"><img src={ require("./../images/blog_images_2.jpg")} alt="" /></div></div>
            </div>
          </div>
          <p>But what is it like to be an 18-year-old and have the expectation set that you will talk during sex? I, for one, have never been part of a community with that expectation. Spending time at Antioch’s orientation, I thought about how that might change your sexual interactions for the rest of your life.</p>
        </div>
        <div className="blog_extra d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
          <div className="blog_tags">
            <span>Tags: </span>
            <ul>
              <li><a href="#">Education</a>, </li>
              <li><a href="#">Math</a>, </li>
              <li><a href="#">Food</a>, </li>
              <li><a href="#">Schools</a>, </li>
              <li><a href="#">Religion</a>, </li>
            </ul>
          </div>
          <div className="blog_social ml-lg-auto">
            <span>Share: </span>
            <ul>
              <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="comments_container">
          <div className="comments_title"><span>30</span> Comments</div>
          <ul className="comments_list">
            <li>
              <div className="comment_item d-flex flex-row align-items-start jutify-content-start">
                <div className="comment_image"><div><img src={ require("./../images/comment_1.jpg")} alt="" /></div></div>
                <div className="comment_content">
                  <div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
                    <div className="comment_author"><a href="#">Jennifer Aniston</a></div>
                    <div className="comment_rating"><div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
                    <div className="comment_time ml-auto">October 19,2018</div>
                  </div>
                  <div className="comment_text">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humour.</p>
                  </div>
                  <div className="comment_extras d-flex flex-row align-items-center justify-content-start">
                    <div className="comment_extra comment_likes"><a href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i><span>108</span></a></div>
                    <div className="comment_extra comment_reply"><a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i><span>Reply</span></a></div>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  <div className="comment_item d-flex flex-row align-items-start jutify-content-start">
                    <div className="comment_image"><div><img src={ require("./../images/comment_2.jpg")} alt="" /></div></div>
                    <div className="comment_content">
                      <div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
                        <div className="comment_author"><a href="#">John Smith</a></div>
                        <div className="comment_rating"><div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
                        <div className="comment_time ml-auto">October 19,2018</div>
                      </div>
                      <div className="comment_text">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humour.</p>
                      </div>
                      <div className="comment_extras d-flex flex-row align-items-center justify-content-start">
                        <div className="comment_extra comment_likes"><a href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i><span>108</span></a></div>
                        <div className="comment_extra comment_reply"><a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i><span>Reply</span></a></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div className="comment_item d-flex flex-row align-items-start jutify-content-start">
                <div className="comment_image"><div><img src={ require("./../images/comment_3.jpg")} alt="" /></div></div>
                <div className="comment_content">
                  <div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
                    <div className="comment_author"><a href="#">Jane Austen</a></div>
                    <div className="comment_rating"><div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
                    <div className="comment_time ml-auto">October 19,2018</div>
                  </div>
                  <div className="comment_text">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humour.</p>
                  </div>
                  <div className="comment_extras d-flex flex-row align-items-center justify-content-start">
                    <div className="comment_extra comment_likes"><a href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i><span>108</span></a></div>
                    <div className="comment_extra comment_reply"><a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i><span>Reply</span></a></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="add_comment_container">
            <div className="add_comment_title">Write a comment</div>
            <div className="add_comment_text">Your email address will not be published. Required fields are marked *</div>
            <form action="#" className="comment_form">
              <div>
                <div className="form_title">Review*</div>
                <textarea className="comment_input comment_textarea" required="required"></textarea>
              </div>
              <div className="row">
                <div className="col-md-6 input_col">
                  <div className="form_title">Name*</div>
                  <input type="text" className="comment_input" required="required"/>
                </div>
                <div className="col-md-6 input_col">
                  <div className="form_title">Email*</div>
                  <input type="text" className="comment_input" required="required"/>
                </div>
              </div>
              <div className="comment_notify">
                <input type="checkbox" id="checkbox_notify" name="regular_checkbox" className="regular_checkbox checkbox_account" checked/>
                <label for="checkbox_notify"><i className="fa fa-check" aria-hidden="true"></i></label>
                <span>Notify me of new posts by email</span>
              </div>
              <div>
                <button type="submit" className="comment_button trans_200">submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>


      <div className="col-lg-4">
        <div className="sidebar">

          <div className="sidebar_section">
            <div className="sidebar_section_title">Categories</div>
            <div className="sidebar_categories">
              <ul className="categories_list">
                <li><a href="#" className="clearfix">Art & Design<span>(25)</span></a></li>
                <li><a href="#" className="clearfix">Business<span>(10)</span></a></li>
                <li><a href="#" className="clearfix">IT & Software<span>(22)</span></a></li>
                <li><a href="#" className="clearfix">Languages<span>(12)</span></a></li>
                <li><a href="#" className="clearfix">Programming<span>(18)</span></a></li>
              </ul>
            </div>
          </div>

          <div className="sidebar_section">
            <div className="sidebar_section_title">Latest Courses</div>
            <div className="sidebar_latest">

              <div className="latest d-flex flex-row align-items-start justify-content-start">
                <div className="latest_image"><div><img src={ require("./../images/latest_1.jpg")} alt="" /></div></div>
                <div className="latest_content">
                  <div className="latest_title"><a href="course.html">How to Design a Logo a Beginners Course</a></div>
                  <div className="latest_date">november 11, 2017</div>
                </div>
              </div>

              <div className="latest d-flex flex-row align-items-start justify-content-start">
                <div className="latest_image"><div><img src={ require("./../images/latest_2.jpg")} alt="" /></div></div>
                <div className="latest_content">
                  <div className="latest_title"><a href="course.html">Photography for Beginners MasterclassName</a></div>
                  <div className="latest_date">november 11, 2017</div>
                </div>
              </div>

              <div className="latest d-flex flex-row align-items-start justify-content-start">
                <div className="latest_image"><div><img src={ require("./../images/latest_3.jpg")} alt="" /></div></div>
                <div className="latest_content">
                  <div className="latest_title"><a href="course.html">The Secrets of Body Language</a></div>
                  <div className="latest_date">november 11, 2017</div>
                </div>
              </div>

            </div>
          </div>

          <div className="sidebar_section">
            <div className="sidebar_section_title">Instagram</div>
            <div className="sidebar_gallery">
              <ul className="gallery_items d-flex flex-row align-items-start justify-content-between flex-wrap">
                <li className="gallery_item">
                  <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
                  <a className="colorbox" href="./../images/gallery_1_large.jpg">
                    <img src={ require("./../images/gallery_1.jpg")} alt="" />
                  </a>
                </li>
                <li className="gallery_item">
                  <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
                  <a className="colorbox" href="./../images/gallery_2_large.jpg">
                    <img src={ require("./../images/gallery_2.jpg")} alt="" />
                  </a>
                </li>
                <li className="gallery_item">
                  <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
                  <a className="colorbox" href="./../images/gallery_3_large.jpg">
                    <img src={ require("./../images/gallery_3.jpg")} alt="" />
                  </a>
                </li>
                <li className="gallery_item">
                  <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
                  <a className="colorbox" href="./../images/gallery_4_large.jpg">
                    <img src={ require("./../images/gallery_4.jpg")} alt="" />
                  </a>
                </li>
                <li className="gallery_item">
                  <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
                  <a className="colorbox" href="./../images/gallery_5_large.jpg">
                    <img src={ require("./../images/gallery_5.jpg")} alt="" />
                  </a>
                </li>
                <li className="gallery_item">
                  <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
                  <a className="colorbox" href="./../images/gallery_6_large.jpg">
                    <img src={ require("./../images/gallery_6.jpg")} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sidebar_section">
            <div className="sidebar_section_title">Tags</div>
            <div className="sidebar_tags">
              <ul className="tags_list">
                <li><a href="#">creative</a></li>
                <li><a href="#">unique</a></li>
                <li><a href="#">photography</a></li>
                <li><a href="#">ideas</a></li>
                <li><a href="#">wordpress</a></li>
                <li><a href="#">startup</a></li>
              </ul>
            </div>
          </div>

          <div className="sidebar_section">
            <div className="sidebar_banner d-flex flex-column align-items-center justify-content-center text-center">
              <div className="sidebar_banner_background" style={{backgroundImage:"url("+Background3+")"}}></div>
              <div className="sidebar_banner_overlay"></div>
              <div className="sidebar_banner_content">
                <div className="banner_title">Free Book</div>
                <div className="banner_button"><a href="#">download now</a></div>
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
//export default Singleblog;
