import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <ListGroup>
        {this.props.cart.map((cartItem) => (
          <ListGroupItem key={cartItem.product.id}>
            <Badge
              color="danger"
              onClick={() => this.props.removeFromCart(cartItem.product)}
            >
              X
            </Badge>
            {cartItem.product.productName}
            <Badge color="success">{cartItem.quantity}</Badge>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
  renderEmptyCart() {
    return (
      <ListGroup>
        <ListGroupItem>Empty Cart</ListGroupItem>
      </ListGroup>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
