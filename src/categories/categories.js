import React, { Component } from 'react';
import './../styles/categories.css';
import './../styles/categories_responsive.css';
import './../styles/bootstrap4/bootstrap.min.css';
import ProductsContainer from './../client_order/productlist';
//import './../plugins/colorbox/colorbox.css';
//import './../plugins/OwlCarousel2-2.2.1/animate.css';
//import './../plugins/font-awesome-4.7.0/css/font-awesome.min.css';
//import './../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
//import './../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
//import './../plugins/OwlCarousel2-2.2.1/animate.css';
//import './../plugins/font-awesome-4.7.0/css/font-awesome.min.css';

//import $ from './../js/jquery-3.2.1.min.js';
//import './../styles/boots../client_order/actions
//import * as bootstrap from './../s../client_order/reducers/products
//import './../plugins/gr../client_order/components/ProductItem
//import './../plugins/gre../client_order/components/ProductsList
//import './../plugins/scrollmagic/ScrollMagic.min.js';
//import './../plugins/greensock/animation.gsap.min.js';
//import './../plugins/greensock/ScrollToPlugin.min.js';
//import  './../plugins/OwlCarousel2-2.2.1/owl.carousel.js';
//import './../plugins/easing/easing.js';
//import './../plugins/parallax-js-master/parallax.min.js';
//import './../plugins/colorbox/jquery.colorbox-min.js';
class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Product Category</h5>
        </div>
        <ul className="sidebar_categories">
          <li><a href="#">Men</a></li>
          <li className="active"><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>Women</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Collection</a></li>
          <li><a href="#">Shop</a></li>
        </ul>
      </div>

      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Filter by Price</h5>
        </div>
        <p>
          <input type="text" id="amount" readonly style={{border:0, color:'#f6931f', fontWeight:'bold'}} />
        </p>
        <div id="slider-range"></div>
        <div className="filter_button"><span>filter</span></div>
      </div>

      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Sizes</h5>
        </div>
        <ul className="checkboxes">
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>S</span></li>
          <li className="active"><i className="fa fa-square" aria-hidden="true"></i><span>M</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>L</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>XL</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>XXL</span></li>
        </ul>
      </div>

      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Color</h5>
        </div>
        <ul className="checkboxes">
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Black</span></li>
          <li className="active"><i className="fa fa-square" aria-hidden="true"></i><span>Pink</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
        </ul>
        <div className="show_more">
          <span><span>+</span>Show More</span>
        </div>
      </div>
    </div>
      );
    }
  }
class Categories extends Component {
  render() {
    return (
      <div className="container product_section_container">
       <br/><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/>
      <br/><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/>
      <br/><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/><br /><br/><br/>
      <br/><br/>
      <div className="row">
        <div className="col product_section clearfix">

      <div className="main_content">
      <div className="products_iso">
        <div className="row">
  {/*        <div className="col">

            <div className="product_sorting_container product_sorting_container_top">
              <ul className="product_sorting">
                <li>
                  <span className="type_sorting_text">Default Sorting</span>
                  <i className="fa fa-angle-down"></i>
                  <ul className="sorting_type">
                    <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }'><span>Default Sorting</span></li>
                    <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "price" }'><span>Price</span></li>
                    <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "name" }'><span>Product Name</span></li>
                  </ul>
                </li>
                <li>
                  <span>Show</span>
                  <span className="num_sorting_text">6</span>
                  <i className="fa fa-angle-down"></i>
                  <ul className="sorting_num">
                    <li className="num_sorting_btn"><span>6</span></li>
                    <li className="num_sorting_btn"><span>12</span></li>
                    <li className="num_sorting_btn"><span>24</span></li>
                  </ul>
                </li>
              </ul>
              <div className="pages d-flex flex-row align-items-center">
                <div className="page_current">
                  <span>1</span>
                  <ul className="page_selection">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                  </ul>
                </div>
                <div className="page_total"><span>of</span> 3</div>
                <div id="next_page" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
              </div>
</div>*/}
            <div className="product-grid">
            <div className="new_arrivial_products">
            <ul>
              <ProductsContainer />
            </ul>
            </div>
      </div>
      {/*
      <div className="product_sorting_container product_sorting_container_bottom clearfix">
      <ul className="product_sorting">
        <li>
          <span>Show:</span>
          <span className="num_sorting_text">04</span>
          <i className="fa fa-angle-down"></i>
          <ul className="sorting_num">
            <li className="num_sorting_btn"><span>01</span></li>
            <li className="num_sorting_btn"><span>02</span></li>
            <li className="num_sorting_btn"><span>03</span></li>
            <li className="num_sorting_btn"><span>04</span></li>
          </ul>
        </li>
      </ul>
      <span className="showing_results">Showing 1–3 of 12 results</span>
      <div className="pages d-flex flex-row align-items-center">
        <div className="page_current">
          <span>1</span>
          <ul className="page_selection">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </div>
        <div className="page_total"><span>of</span> 3</div>
        <div id="next_page_1" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
      </div>

    </div>

      </div>*/}
</div>
</div>
</div>
</div>
</div>
</div>
    );
  }
}

export default Categories;
