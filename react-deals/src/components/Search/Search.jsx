import React, { Component } from 'react';
import style from './Search.css';

export default class Search extends Component {
  render(){
    return(
      <div className="Search-Container">
        <form action="">
          <input type="text" name="product" placeholder="Find what you want..." />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
