import React, { Component } from 'react';
import style from './Product.css';
import ProductItems from '../ProductItems/ProductItems.jsx'

export default class Product extends Component {
  render(){
    return(
      <div className="Product-Container">
        <ProductItems />
      </div>
    )
  }
}
