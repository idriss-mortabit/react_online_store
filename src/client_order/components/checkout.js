import React, { Component } from 'react';
import CartContainer from './../clientorder'
import './../../styles/checkout.css'



class Checkout extends Component {
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
    <div class="input-fields">
      <div class="column-1">
        <label for="cardholder">Cardholder's Name</label>
        <input type="text" id="cardholder" alt='first name'/>

        <div class="column-2">
        <input type="number" id="cardholder" alt='last name'/>
        
        </div>
        <div class="column-3">
        <label for="cardholder">Cardholder's Name</label>
        <input type="email" id="cardholder" alt='E-mail'/>

        </div>

        <div class="column-4">
        <label for="cardholder">Cardholder's Name</label>
        <input type="text" id="cardholder" alt='phone'/>


        </div>
 
      </div>
    </div>
   
   
  </div>
 
  <div className="panel-footer">
    <button className="btn back-btn">Back</button>
    <button className="btn next-btn">Next Step</button>
  </div>
</div>
      )}}

export default Checkout