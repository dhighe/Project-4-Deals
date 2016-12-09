import React, { Component } from 'react';
import Search from '../Search/Search.jsx';
import Filter from '../Filter/Filter.jsx';
import Product from '../Product/Product.jsx';
import style from './Main.css';

export default class Main extends Component {
  render(){
    return(
      <div className="Main-Container">
        <div className="Main-Search">
          <Search />
        </div>
        <div className="Main-Filter">
          <Filter />
        </div>
        <div className="Main-Product">
          <Product />
        </div>
      </div>
    )
  }
}
