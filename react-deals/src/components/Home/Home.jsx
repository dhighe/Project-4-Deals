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
        <h1>Welcome to My App...</h1>
        <div className="Home-Header">
          <Head
            signUpUser={this.props.signUpUser}
          />
        </div>
        <div className="Home-Body">
          <Body
            productCategory={this.props.productCategory}
          />
        </div>
      </div>
    )
  }
}
