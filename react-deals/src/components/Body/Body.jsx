import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Main from '../Main/Main.jsx'
import style from './Body.css';

export default class Body extends Component {
  render() {
    return(
      <div className="Body-container">
        <div className="Card-container">
          <Link to="/main">
            <div className="card-square" id="headphones">
              <p>Headphones</p>
            </div>
          </Link>
          <Link to="/main">
          <div className="card-square" id="cameras">
            <p>Cameras</p>
          </div>
          </Link>
          <div className="card-square" id="clothes">
            <p>Clothes</p>
          </div>
          <div className="card-square" id="televisions">
            <p>Televisions</p>
          </div>
          <div className="card-square" id="computers">
            <p>Computers</p>
          </div>
          <div className="card-square" id="phones">
            <p>Phones</p>
          </div>
          <div className="card-square" id="furniture">
            <p>Furniture</p>
          </div>
          <div className="card-square" id="games">
            <p>Games</p>
          </div>
          <div className="card-square" id="jewerly">
            <p>Jewerly</p>
          </div>
          <div className="card-square" id="toys">
            <p>Toys</p>
          </div>
          <div className="card-square" id="autoparts">
            <p>Auto Parts</p>
          </div>
          <div className="card-square" id="applicances">
            <p>Applicances</p>
          </div>
        </div>
      </div>
    )
  }
}
