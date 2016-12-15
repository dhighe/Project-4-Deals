import React, { Component } from 'react';
import style from './Filter.css';

export default class Filter extends Component {
  render(){
    return(
      <div className="Filter-Container">
        Sort
        <select className="first">
          <option value="next" className="first"></option>
          <option value="next">Sort A to Z</option>
          <option value="next">Sort Z to A</option>
        </select>
        Pice
        <select className="second">
          <option value="last"></option>
          <option value="last">Lowest Price</option>
          <option value="last">Highest Price</option>
        </select>
        Category
        <select className="third">
          <option value="category"></option>
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
        Company
        <select className="fourth">
          <option value="Company"></option>
          <option value="Company">Sony</option>
          <option value="Company">Bose</option>
          <option value="Company">Sennheiser</option>
          <option value="Company">Skullcandy</option>
          <option value="Company">Beats</option>
          <option value="Company">Audio Technica</option>
          <option value="Company">Beyerdynamic</option>
          <option value="Company">Fuji</option>
          <option value="Company">Canon</option>
          <option value="Company">Nikon</option>
          <option value="Company">Panasonic</option>
          <option value="Company">Hasselblad</option>
        </select>
      </div>
    )
  }
}

