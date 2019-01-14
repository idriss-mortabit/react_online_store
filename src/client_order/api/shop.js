/**
 * Mocking client-server processing
 */
import _products from './products.json'
import Loadproducts from './products'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(Loadproducts()), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
