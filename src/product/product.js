
import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import './../styles/product.css';
import {Button} from 'react-bootstrap'
import './../styles/responsive.css';
import './../styles/bootstrap4/bootstrap.min.css';
import PropTypes from 'prop-types'
import Footer from './../footer/footer';
import Header from './../header/header';
import Newsletter from './../newsletter/newsletter';
import {Col, Carousel, ModalBody, Fa, CarouselInner, CarouselItem, Row} from 'mdbreact';
import { connect } from 'react-redux'
import { addToCart } from './../client_order/actions'
import { getVisibleProducts } from './../client_order/reducers/products'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Checkout, { Order } from './../client_order/components/checkout' 
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
/*const ProdctsRouter = ({ products, addToCart }) => (
	<div>
	  {products.map(product => {
	const MyProductPage = (props) => {
		return (
			<Productpage 
			key={product.id} 
			product={product} 
			onAddToCartClicked={() => addToCart(product.id)} 
			/>
		);
		} 
	return(
	  	<Route exact path={product.link} component={MyProductPage}  />
	  )})}
	</div>
	)*/
	import App from './../index' 
	import ScrollToTop from 'react-router-scroll-top'

	const ProductsRouter = ({ products, addToCart }) => (
			<Router>
				<ScrollToTop>
					<App />
					<Route exact path='/shop/products/checkout' component={Checkout}  />
					<Route exact path='/shop/products/checkout/ordersuccess' component={Order}  />
			{products.map(product => (
					<Route exact path={product.link} render={(props) => <Productpage {...props}
					key={product.id} 
					product={product} 
					onAddToCartClicked={() => addToCart(product.id)} 
					/>}  />
			))}
				</ScrollToTop>
			</Router>
		)
  ProductsRouter.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
	  id: PropTypes.number.isRequired,
	  title: PropTypes.string.isRequired,
	  price: PropTypes.number.isRequired,
	  image: PropTypes.string.isRequired,
	  inventory: PropTypes.number.isRequired,
	  images: PropTypes.object.isRequired,
	  link: PropTypes.string.isRequired,
	  description: PropTypes.string.isRequired
	})).isRequired,
	addToCart: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({
	products: getVisibleProducts(state.products)
  })
  
  export default connect(
	mapStateToProps,
	{ addToCart }
  )(ProductsRouter)

const Productpage = ({ product, onAddToCartClicked }) => {
	const image1 = require("./../images/"+product.images['image1'])
	const image2 = require("./../images/"+product.images['image2'])
	const image3 = require("./../images/"+product.images['image3'])
    return (
		<div class="super_container">
		<Header />
		<br/><br/>
		<br/><br/>
		<br/><br/>
		<br/><br/>
		<br/><br/>
		<br/><br/>
		<br/><br/>
		<br/><br/>
		<br/><br/>
		<br/><br/>
		<br/><br/>
		<br/><br/>
			<ModalBody className="d-flex">
			<div className='responsive'>
				<Col className='mt-0' size="3" lg="5">
				<Carousel activeItem={1} length={3} showControls={true} showIndicators={true} thumbnails className="z-depth-1">
					<CarouselInner>
						<CarouselItem itemId="1">
							<img className="d-block w-100" src={image1}
								alt="First slide" />
						</CarouselItem>
						<CarouselItem itemId="2">
							<img className="d-block w-100" src={image2}
								alt="Second slide" />
						</CarouselItem>
						<CarouselItem itemId="3">
							<img className="d-block w-100" src={image3}
								alt="Third slide" />
						</CarouselItem>
					</CarouselInner>
				</Carousel>
				</Col>
				</div>
				<div className='responsive1'>
				<Col size="7" lg="7">
				<h2 className="h2-responsive product-name">
					<br/>
					<strong>{product.title}</strong>
				</h2>
				<h4 className="h4-responsive">
					<span className="green-text">
						<strong>{product.price}</strong>
					</span>
					<span className="grey-text ml-1">
						<small>
							<s>{(product.price*1.1).toFixed(2)}</s>
						</small>
					</span>
				</h4>
				<br></br>
				<div className="tab_title">	
						<h4>Description</h4>		
				</div>
				<div className='tab_text_block' dangerouslySetInnerHTML={{__html: product.description}}>
					
				</div>
				<Row className="justify-content-center">
				<div onClick={onAddToCartClicked}
					disabled={product.inventory > 0 ? '' : 'disabled'}>    
					<Fragment>
					<MDBBtn color="primary">
					{product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
					</MDBBtn>
				  </Fragment>
				  </div>
				</Row>
				</Col>
				</div>
			</ModalBody>
			<Newsletter />
            <Footer />
		</div>
    );
  }

Productpage.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	inventory: PropTypes.number.isRequired,
	images: PropTypes.number.isRequired,
	link: PropTypes.number.isRequired,
	description: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}
