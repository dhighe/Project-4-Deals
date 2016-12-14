import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Main from '../Main/Main.jsx'
import style from './Body.css';

export default class Body extends Component {
  render() {
  console.log(this.props.getSelectedProdcuts)
    return(
      <div className="Body-container">
        <button className="Main-Button"><Link to="/main" className="phil-winningchester" >Let me Browse</Link></button>
        <div className="Card-container">
            <div
              onClick={() => this.props.getHeadphones()}
              onClick={event => this.props.productCategory(event)}
              className="card-square"
              id="headphones">
              Headphones
            </div>
          <div
            onClick={() => this.props.getCameras()}
            onClick={event => this.props.productCategory(event)}
            className="card-square"
            id="cameras">
            Cameras
          </div>
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
