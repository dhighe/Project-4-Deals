import React, { Component } from 'react';
import style from './LogIn.css';

export default class LogIn extends Component {
  render(){
    return(
      <div className="LogIn-Container">
        <h1>Sign Up because you know you want to...</h1>
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="password" placeholder="Password" />
      </div>
    )
  }
}
