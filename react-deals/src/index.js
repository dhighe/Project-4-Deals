import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
// import App from './components/App/App.jsx';
import Head from './components/Head/Head.jsx'
import Body from './components/Body/Body.jsx'
import Main from './components/Main/Main.jsx'
import style from './components/App/App.css';

// ReactDOM.render(
//   <App />,
//   document.querySelector('#container')
// );

const App = React.createClass({
  render(){
    return(
      <div className="App-Container">
        <ul>
          <li><Link to="/main">Main</Link></li>
        </ul>
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
})

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="main" component={Main} />
    </Route>
  </Router>
), document.querySelector('#container'))
