import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.cart.length}</h3>
        <Link to="/">Products</Link> / 
         <Link to="form1">From Demo 1</Link> / 
         <Link to="form2">From Demo 2</Link> 
        <CartSummary
          removeFromCart={this.props.removeFromCart}
          cart={this.props.cart}
        />
      </div>
    );
  }
}
