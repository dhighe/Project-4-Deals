import React, { Component } from 'react';
import style from './Filter.css';

export default class Filter extends Component {
  render(){
    return(
      <div className="Filter-Container">
        <select>
          <option value="next"></option>
          <option value="next">A to Z</option>
          <option value="next">Z to A</option>
        </select>

        <select>
          <option value="last"></option>
          <option value="last">Lowest Price</option>
          <option value="last">Highest Price</option>
        </select>

        <select>
          <option value="category">Headphones</option>
          <option value="category">Cameras</option>
          <option value="category">Clothes</option>
          <option value="category">Televisions</option>
          <option value="category">Computers</option>
          <option value="category">Phones</option>
          <option value="category">Furniture</option>
          <option value="category">Games</option>
          <option value="category">Jewerly</option>
          <option value="category">Toys</option>
          <option value="category">Auto Parts</option>
          <option value="category">Applicances</option>
        </select>
      </div>
    )
  }
}

