import React, { Component } from 'react';
import Search from '../Search/Search.jsx';
import Filter from '../Filter/Filter.jsx';
import Product from '../Product/Product.jsx';
import style from './Main.css';


export default class Main extends Component {

  render(){
    // const props = {...this.props.state}
    return(
      <div className="Main-Container">
        <div className="Main-Search">
          <Search
            searchTerm={this.props.state.searchTerm}
            handleUpdateSearch={event => this.props.state.handleUpdateSearch(event)}
            handleSubmitSearch={()=> this.props.state.handleSubmitSearch()}
          />
        </div>
        <div className="Main-Style">
          <div className="Main-Filter">
            <Filter />
          </div>
          <div className="Main-Product">
            {/*<Product
              products={this.props.state.products}
            />*/}
          </div>
        </div>
      </div>
    )
  }
}
