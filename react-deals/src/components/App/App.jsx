import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Head from '../Head/Head.jsx'
import Body from '../Body/Body.jsx'
import style from './App.css'

export default class App extends Component {
  render(){
    return(
      <div className="App-Container">
        <h1>Welcome to my App</h1>
        <div className="App-Header">
          <Head />
        </div>
        <div className="App-Body">
          <Body />
        </div>

      </div>

    )
  }
}
