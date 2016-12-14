import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Main from '../Main/Main.jsx'
import style from './Body.css';

export default class Body extends Component {
  render() {
  console.log(this.props.productCategory)
    return(
      <div className="Body-container">
        <div className="Card-container">
          <Link to="/main">
            <div
              onClick={event => this.props.productCategory(event)}
              className="card-square"
              id="headphones">
              Headphones
            </div>
          </Link>
          <Link to="/main">
          <div
            onClick={event => this.props.productCategory(event)}
            className="card-square"
            id="cameras">
            Cameras
          </div>
          </Link>
          <div
            onClick={event => this.props.productCategory(event)}
            className="card-square"
            id="clothes">
            Clothes
          </div>
          <div
            onClick={event => this.props.productCategory(event)}
            className="card-square"
            id="televisions">
            Televisions
          </div>
          <div
            onClick={event => this.props.productCategory(event)}
            className="card-square"
            id="computers">
            Computers
          </div>
          <div
            onClick={event => this.props.productCategory(event)}
            className="card-square"
            id="phones">
            Phones
          </div>
          <div
            onClick={event => this.props.productCategory(event)}
            className="card-square"
            id="furniture">
            <p>Furniture</p>
          </div>
          <div
            onClick={event => this.props.productCategory(event)}
            className="card-square"
            id="games">
            Games
          </div>
          <div
            onClick={event => this.props.productCategory(event)}
            className="card-square"
            id="jewerly">
            Jewerly
          </div>
          <div
            onClick={event => this.props.productCategory(event)}
            className="card-square"
            id="toys">
            Toys
          </div>
          <div
            onClick={event => this.props.productCategory(event)}
            className="card-square"
            id="autoparts">
            Auto Parts
          </div>
          <div
            onClick={event => this.props.productCategory(event)}
            className="card-square"
            id="applicances">
            Applicances
          </div>
        </div>
      </div>
    )
  }
}
