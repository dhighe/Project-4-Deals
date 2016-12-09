import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Head from '../Head/Head.jsx'
import Body from '../Body/Body.jsx'
// import Main from '../Main/Main.jsx'
import style from './Home.css'

export default class Home extends Component {
  render(){
    return(
      <div className="Home-Container">
        <ul>
          <li><Link to="/main">Main</Link></li>
        </ul>
        <h1>Welcome</h1>
        <div className="Home-Header">
          <Head />
        </div>
        <div className="Home-Body">
          <Body />
        </div>
      </div>
    )
  }
}
// && React.cloneElement(this.props.children, {state:this.state})
