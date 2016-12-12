import React, { Component } from 'react';
import style from './Head.css';


export default function Head(props){
  const handleSubmit = () => {
    event.preventDefault();

  props.signUpUser(
    event.target.f_name.value,
    event.target.l_name.value,
    event.target.username.value,
    event.target.email.value,
    event.target.password.value,
    event.target.phonenumber.value,
    )
  return false;
};

// export default class Body extends Component {
    return(
      <div className="Head-container">
        <div className="button-container">
          <button className="buttons" onClick={()=>{document.querySelector('.SignUp-Modal').style.display = "block"}}>Sign Up</button>
          <button className="buttons" onClick={()=>{document.querySelector('.LogIn-Modal').style.display = "block"}}>Log In</button>
          <div className="SignUp-Modal">
            <span className="close" onClick={()=>{document.querySelector('.SignUp-Modal').style.display = "none"}}>×</span>
            <div className="SignUp-Container">
              <h1>Sign-Up, it only takes one minute</h1>
              <h5>but the record is 10 seconds...</h5>
              <form onSubmit={handleSubmit}>
                <input type="text" name="f_name" placeholder="First Name" />
                <input type="text" name="l_name" placeholder="Last Name" />
                <input type="text" name="username" placeholder="Username" />
                <input type="text" name="email" placeholder="Email Address" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="confirm" placeholder="Confirm Password" />
                <input type="text" name="phonenumber" placeholder="Phone Number" />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
          <div className="LogIn-Modal">
          <span className="close" onClick={()=>{document.querySelector('.LogIn-Modal').style.display = "none"}}>×</span>
            <div className="LogIn-Container">
              <h1>Log In Please</h1>
              <input type="text" name="username" placeholder="Username" />
              <input type="text" name="password" placeholder="Password" />
              <button type="submit">Log In</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

