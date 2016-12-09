import React, { Component } from 'react';
import style from './SignUp.css';

export default class SignUp extends Component {
  render(){
    return(
      <div className="SignUp-Container">
        <h1>Sign Up because you know you want to...</h1>
        <input type="text" name="f_name" placeholder="First Name" />
        <input type="text" name="l_name" placeholder="Last Name" />
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="email" placeholder="Email Address" />
        <input type="text" name="password" placeholder="Password" />
        <input type="text" name="confirm" placeholder="Confirm Password" />
        <input type="text" name="phonenumber" placeholder="Phone Number" />
      </div>
    )
  }
}
