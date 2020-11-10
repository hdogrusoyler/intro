import React, { Component } from 'react'

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: [
            { categoryId: 1, categoryName: "Beverages" },
            { categoryId: 2, categoryName: "Condiments" },
          ],
        };
      }
    render() {
        return (
            <div>
                <h3>{this.props.info.title - this.props.currentCategory}</h3>
            </div>
        )
    }
}
