import React, { Component } from 'react';
import style from './Head.css';

export default class Body extends Component {
  render() {
    return(
      <div className="Head-container">
        <div className="button-container">
          <button className="buttons">Sign Up</button>
          <button className="buttons">Log In</button>
        </div>
      </div>
    )
  }
}
