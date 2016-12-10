import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
// import AuthActions from '../AuthAPI/auth_actions.js';
// import SessionStore from '../AuthAPI/session_store.js';
import Head from '../Head/Head.jsx'
import Body from '../Body/Body.jsx'
import style from './Home.css'

export default class Home extends Component {
  render(){
    return(
      <div className="Home-Container">
          <button><Link to="/main">Main</Link></button>
        <h1>Welcome</h1>
        <div className="Home-Header">
          <Head />
        </div>
        <div className="Home-Body">
          <Body />
        </div>
        <div className="SignUp-Modal">
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
            <div className="LogIn-Container">
              <h1>Log In Please</h1>
              <input type="text" name="username" placeholder="Username" />
              <input type="text" name="password" placeholder="Password" />
            </div>
          </div>
      </div>
    )
  }
}
// && React.cloneElement(this.props.children, {state:this.state})
