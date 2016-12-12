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
          <Search
            searchTerm={this.state.searchTerm}
            handleUpdateSearch={event => this.handleUpdateSearch(event)}
            handleSubmitSearch={()=> this.handleSubmitSearch()}
          />
        </div>
        <div className="Main-Style">
          <div className="Main-Filter">
            <Filter />
          </div>
          <div className="Main-Product">
            <Product
              products={this.state.products}
            />
          </div>
        </div>
      </div>
    )
  }
}
