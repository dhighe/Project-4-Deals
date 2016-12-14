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
        <div className="Home-Header">
          <div className="Welcome-Home">
            <h1>Create your Dreamlist</h1>
            <h3>We'll do the rest</h3>
          </div>
          <Head
            signUpUser={this.props.signUpUser}
          />
        </div>
        <div className="Home-Body">
          <Body
            productCategory={this.props.productCategory}
            getSelectedProdcuts={this.props.getSelectedProdcuts}
            getCameras={this.props.getCameras}
            getHeadphones={this.props.getHeadphones}
          />
        </div>
      </div>
    )
  }
}
