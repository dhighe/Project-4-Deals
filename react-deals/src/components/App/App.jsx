import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import AjaxAdapter from '../Ajax/AjaxAdapter';
import Home from '../Home/Home.jsx'
import Main from '../Main/Main.jsx'
import style from './App.css'

export default class App extends Component {

constructor(props) {
  super();

  this.state = {
    searchTerm: '',
    products: [],
    currentPage: 1,
    totalResults: 0
  };
  this.signUpUser = this.signUpUser.bind(this);
}

// Handle what is in the input box that will be rendered on the page => Allow users to type in search term
handleUpdateSearch(event) {
  this.setState({
    searchTerm: event.target.value
  });
}


// Handle the call to the OMDB api
handleSubmitSearch(page=1) {
  fetch(`http://www.omdbapi.com/?s=${this.state.searchTerm}&page=${page}`)
  .then(r => r.json())
  .then((data) => {
    this.setState({
      movies: data.findItemsByKeywordsResponse[0].searchResult.count,
      totalResults: data.findItemsByKeywordsResponse[0].searchResult.item,
      currentPage: page
    });
  })
  .catch(err => console.log('Error: ',err));
}

// Edit display information on page with new search items from fetch call
displayNext() {
// If the search results are more then 10 (as only 10 objects are rendered at a time) allow for more results to be retrieve
  if (this.state.totalResults > this.state.currentPage * 15) {
      return (
// Create button if the above condition is true
        <button
          id="next-button"
          onClick={() => this.handleSubmitSearch(this.state.currentPage + 1)}
        >
          Next Page
        </button>
      );
  }
}

// Edit state to move back to previous page as fetch only calls 10 search items at a time
displayPrev() {
// Checks to make sure there are pages to go back to, set current page > 1
  if (this.state.currentPage > 1) {
    return (
//create button if the above condition is met
        <button
          id="prev-button"
          onClick={() => this.handleSubmitSearch(this.state.currentPage - 1)}
        >
          Previous Page
        </button>
      );
  }
}

signUpUser(f_name, l_name, username, email, password, phonenumber) {
  AjaxAdapter.createTask({ f_name, l_name, username, email, password, phonenumber })
    .then((newUser) => {
      // clone existing state
      const newState = { ...this.state.user };
      newState[newUser.id] = newUser;
      this.setState({ user: newState });
    })
    .catch((error) => {
      throw error;
    });
}

  render(){
    return(
      <div className="App-Container">
        {this.props.children && React.cloneElement(this.props.children, {state:this.state})}
      </div>
    )
  }
}
// && React.cloneElement(this.props.children, {state:this.state})
