import React, { Component } from 'react';
import CartContainer from './../clientorder'
import './../../styles/checkout.css'
import { Link } from "react-router-dom";



class Checkout extends Component {
    render() {
      return (
<div className="checkout-panel">
  <div className="panel-body">
    <h2 className="title">Checkout</h2>
    <div className="progress-bar">
      <div className="step active"></div>
      <div className="step"></div>
      <div className="step"></div>
      <div className="step"></div>
    </div>
    <div class="input-fields">
        <form>
      <div className="form-row">
      <div className="form-group col-md-6">
          <label for="inputCity">First Name</label>
          <input type="text" className="form-control" id="inputCity"  placeholder="First Name" required="required"/>
        </div>
        <div className="form-group col-md-6">
          <label for="inputCity">Last Name</label>
          <input type="text" className="form-control" id="inputCity" placeholder="Last Name" required="required" />
        </div>
        <div className="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" className="form-control form-control-lg" id="inputEmail4" placeholder="Email"  />
        </div>
        <div className="form-group col-md-6">
          <label for="inputPassword4">Phone</label>
          <input type="text" className="form-control" id="inputPassword4" placeholder="Phone"  required="required" />
        </div>
      </div>
      <div className="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Address" />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity" placeholder="City" />
        </div>
        <div className="form-group col-md-6">
          <label for="inputCity">State</label>
          <input type="text" className="form-control" id="inputCity" placeholder="State"/>
        </div>

      </div>
    </form>
    </div>
    </div>
  <div className="panel-footer">
    <Link to='/shop'><button className="btn back-btn">Back To Store</button></Link>
    <Link to='/shop/products/checkout/ordersuccess'><button className="btn next-btn">Confirmation</button></Link>
  </div>
</div>
      )}}

class Order extends Component {
  render() {
    return (
<div className="checkout-panel">
<div className="panel-body">
  <h2 className="title">Checkout</h2>
  <div className="progress-bar">
    <div className="step active"></div>
    <div className="step active"></div>
    <div className="step"></div>
    <div className="step"></div>
  </div>
  <div className="alert alert-success alert-dismissible">
  <h2><strong>Success!</strong></h2> 
  <h5>Your order is successfully registered, we will contact you as soon as possible.<br /> Thank you for shopping with us</h5>
</div>
 </div>
<div className="panel-footer">
<a href='/shop'><button className="btn store-btn center-block" >Back To Store</button></a>
</div>
</div>
    )}}
    
export { Checkout, Order}

/*class Test extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if(typeof fields["name"] !== "undefined"){
      if(!fields["name"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["name"] = "Only letters";
      }      	
    }

    //Email
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }



    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Form submitted");
    }else{
      alert("Form has errors.")
    }

  }

  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }

  render(){
    return (
      <div>        	
        <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
          <div className="col-md-6">
            <fieldset>
              <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
              <span className="error">{this.state.errors["name"]}</span>
              <br/>
              <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
              <span className="error">{this.state.errors["email"]}</span>
              <br/>
              <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
              <br/>
              <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
              <br/>
            </fieldset>
          </div>
          <div className="col-md-6">
            <fieldset>
              <textarea refs="message" cols="28" rows="10"
                className="comments" placeholder="Message" onChange={this.handleChange.bind(this, "message")}>{this.state.fields["message"]}</textarea>
            </fieldset>
          </div>
          <div className="col-md-12">
            <fieldset>
              <button className="btn btn-lg pro" id="submit" value="Submit">Send Message</button>
            </fieldset>
          </div>
        </form>
      </div>
    )
  }
}*/