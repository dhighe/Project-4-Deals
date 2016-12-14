import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App/App.jsx';
import Home from './components/Home/Home.jsx'
import Main from './components/Main/Main.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="main" component={Main}/>
    </Route>
  </Router>
), document.querySelector('#container'))
