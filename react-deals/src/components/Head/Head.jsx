import React, { Component } from 'react';
import style from './Head.css';

export default class Body extends Component {
  render() {
    return(
      <div className="Head-container">
        <div className="button-container">
          <button className="buttons" onClick={()=>{document.querySelector('.SignUp-Modal').style.display = "block"}}>Sign Up</button>
          <button className="buttons" onClick={()=>{document.querySelector('.LogIn-Modal').style.display = "block"}}>Log In</button>
          <div className="SignUp-Modal">
            <span className="close" onClick={()=>{document.querySelector('.SignUp-Modal').style.display = "none"}}>×</span>
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
          </div>
          <div className="LogIn-Modal">
          <span className="close" onClick={()=>{document.querySelector('.LogIn-Modal').style.display = "none"}}>×</span>
            <div className="LogIn-Container">
              <h1>Log In Please</h1>
              <input type="text" name="username" placeholder="Username" />
              <input type="text" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
