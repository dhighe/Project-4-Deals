import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Home from '../Home/Home.jsx'
import Main from '../Main/Main.jsx'
import style from './App.css'

export default class App extends Component {
  render(){
    return(
      <div className="App-Container">
        {this.props.children}
      </div>
    )
  }
}
// && React.cloneElement(this.props.children, {state:this.state})
