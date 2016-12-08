import React, { Component } from 'react';
import './Body.css'

export default class Body extends Component {
  render() {
    return(
      <div className="Body-container">
        <div className="Card-container">
          <div className="card-square"></div>
          <div className="card-square"></div>
          <div className="card-vert-rect"></div>
          <div className="card-square"></div>
          <div className="card-horiz-rect"></div>
          <div className="card-square"></div>
          <div className="card-vert-rect"></div>
          <div className="card-square"></div>
          <div className="card-horiz-rect"></div>
          <div className="card-square"></div>
          <div className="card-square"></div>
          <div className="card-square"></div>
        </div>
      </div>
    )
  }
}
