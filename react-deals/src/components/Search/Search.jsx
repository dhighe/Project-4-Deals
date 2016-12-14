import React, { Component } from 'react';
import style from './Search.css';

export default class Search extends Component {
  render(){
    return(
      <div className="Search-Container">
        <form onSubmit={this.props.handleSubmitSearch}>
          <input
            type="text"
            name="product"
            value={this.props.searchTerm}
            placeholder="Find what you want..."
            onChange={event => this.props.handleUpdateSearch(event)}
            />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}
