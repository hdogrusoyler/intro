import React, { Component } from "react";
import CartSummary from "./CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.cart.length}</h3>
        <CartSummary
          removeFromCart={this.props.removeFromCart}
          cart={this.props.cart}
        />
      </div>
    );
  }
}
