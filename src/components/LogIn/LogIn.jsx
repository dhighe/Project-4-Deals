// import React, { Component } from 'react';
// import style from './LogIn.css';

// export default class LogIn extends Component {
//   render(){
//     return(
//       <div className="LogIn-Container">
//         <h1>Sign Up because you know you want to...</h1>
//         <input type="text" name="username" placeholder="Username" />
//         <input type="text" name="password" placeholder="Password" />
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';
import AuthActions from '../AuthAPI/auth_actions.js';
import SessionStore from '../AuthAPI/session_store.js';
import style from './LogIn.css'

let LogIn = React.createClass({
  handleLogin(e) {
    e.preventDefault();
    let username = this.refs.username.getDOMNode().value.trim();
    let password = this.refs.password.getDOMNode().value.trim();
    AuthActions.login(username, password);
  },

  renderAuthErrors() {
    // let errors = SessionState.getAuthErrors();
    if (SessionStore.getAuthErrors().length === 0) { return null; }
    return (
      <ul className='AuthErrors'>{ SessionStore.getAuthErrors().map((err) => ( <li>{err}</li> )) }</ul>
    );
  },

  render() {
    // let buttonText = SessionStore.isAuthRequestInProgress() ? 'Submitting...' : 'Login';
    return (
      <form onSubmit={this.handleLogin}>
        { this.renderAuthErrors() }
        <input type='text' name='username' ref='username' />
        <input type='password' name='password' ref='password' />
        <button disabled={SessionStore.isAuthRequestInProgress()}>{SessionStore.isAuthRequestInProgress() ? 'Submitting...' : 'Login'}</button>
      </form>
    );
  }
});

export default LogIn;
