import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from './actions'
import { getVisibleProducts } from './reducers/products'
import ProductItem from './components/ProductItem'
import ProductsList from './components/ProductsList'
import './../styles/newarrivials.css';


const ProductsContainer2 = ({ products, addToCart }) => (
  <ProductsList>

  {products.map(product =>{
    if(product.section==='new_arrivial' && product.row===2){
    return(
  <li>  <ProductItem
      key={product.id}
      product={product}
      onAddToCartClicked={() => addToCart(product.id)} /></li>
  )}})}

</ProductsList>
)

ProductsContainer2.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer2)