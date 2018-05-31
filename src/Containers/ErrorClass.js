import React, { Component } from 'react'
import ErrorBoundary from '../Components/Common/ErrorBoundary'
import Product from '../Components/Error'

export default class ProductList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [{
        name: 'iPhone 7',
        price: 'Price: 650$'
      }, {
        name: 'Tesla',
        price: 'Price: 950$'
      }, {
        name: 'Iron',
        price: 'Price: 50$'
      }, {
        name: 'The Kite Runner',
        price: 'Price: 30$'
      }, {
        price: 'Price: 950$'
      }]
    }
  }

  render () {
    return this.state.products && this.state.products.map((product) => {
      return (
        <ErrorBoundary key={product.name}>
          <Product product={product} />
        </ErrorBoundary>
      )
    })
  }
}
