import React, { Component } from 'react';
import Head from '../Head/Head.jsx'
import Body from '../Body/Body.jsx'
import './App.css'

export default class App extends Component {
  render() {
    return(
      <div className="App-container">
        <div className="App-head">
          <Head />
        </div>
        <div className="App-body">
          <Body />
        </div>
      </div>
    )
  }
}
