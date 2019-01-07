import React,  { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import About from './about/about';
import Footer from './footer/footer';
import Header from './header/header';
import Newsletter from './newsletter/newsletter';
import Privacy from './privacy_policy/privacy';
import Terms from './term_of_use/terms';
import Faqs from './faqs/faqs';
import Return from './return_policy/return';
import Blog from './blogs/blogs';
import Banner from './banner/banner';
import Bestsellers from './best_sellers/bestsellers';
import Weekdeal from './deal_of_the_week/weekdeal';
import Newarrivials from './new_arrivials/newarrivials';
import Slider from './slider/slider';
import Categories from './categories/categories';
import ProductsRouter from './product/product';
import registerServiceWorker from './registerServiceWorker';
import Contact from './contact/contact';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './client_order/reducers'
import { getAllProducts } from './client_order/actions'
import './styles/index.css';
import  { Redirect } from 'react-router-dom'
//import Terms from './term_of_use/terms';

//import * as serviceWorker from './serviceWorker';
class Home extends Component {
    render(){
        return(
            <div class="super_container">
            <Header />
            <Slider />
            <Banner />
            <Newarrivials />
            <Weekdeal />
            <Bestsellers />
            <Blog />
            <Newsletter />
            <Footer />
            </div>
        );
    }
}
class Contactus extends Component {
    render(){
        return(
            <div class="super_container">
            <Header />
            <Contact />
            <Newsletter />
            <Footer />
            </div>
        );
    }
}
class Returnpolicy extends Component {
    render(){
        return(
            <div class="super_container">
            <Header />
            <Return />
            <Newsletter />
            <Footer />
            </div>
        );
    }
}
class Termsofuse extends Component {
    render(){
        return(
            <div class="super_container">
            <Header />
            <Terms />
            <Newsletter />
            <Footer />
            </div>
        );
    }
}
class Privacypolicy extends Component {
    render(){
        return(
            <div class="super_container">
            <Header />
            <Privacy />
            <Newsletter />
            <Footer />
            </div>
        );
    }
}
class Faq extends Component {
    render(){
        return(
            <div class="super_container">
            <Header />
            <Faqs />
            <Newsletter />
            <Footer />
            </div>
        );
    }
}
class Shop extends Component {
    render(){
        return(
            <div class="super_container">
            <Header />
            <Categories />
            <Newsletter />
            <Footer />
            </div>
        );
    }
}
class Aboutus extends Component {
    render(){
        return(
            <div class="super_container">
            <Header />
            <About />
            <Newsletter />
            <Footer />
            </div>
        );
    }
}
const Redirectionhome = () => {
       return <Redirect to='/home'  />
   }
class App extends Component {
    render(){
        return (
            <div>
                <Route exact path={"/"} component={Redirectionhome} />
                <Route path={"/home"} component={Home} />
                <Route path={"/about_us"} component={Aboutus} />
                <Route path={"/contact_us"} component={Contactus} />
                <Route exact path={"/shop"} component={Shop} />
                <Route path={"/faqs"} component={Faq} />
                <Route path={"/prvacy_policy"} component={Privacypolicy} />
                <Route path={"/term_of_use"} component={Termsofuse} />
                <Route path={"/return_policy"} component={Returnpolicy} />
            </div>
        );
    }
}
export default App
const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

ReactDOM.render(<Provider store={store}>
                    <Router>
                        <ProductsRouter />
                    </Router>
                </Provider>, 
    document.getElementById('root'));
registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
