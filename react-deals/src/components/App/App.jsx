import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import AjaxAdapter from '../Ajax/AjaxAdapter.js';
import Main from '../Main/Main.jsx'
import style from './App.css'

export default class App extends Component {

constructor(props) {
  super();

  this.state = {
    searchTerm: '',
    products: '',
    currentPage: 1,
    totalResults: 0,
    category: '',
    users: {}
  };
  this.signUpUser = this.signUpUser.bind(this);
  this.productCategory = this.productCategory.bind(this);
}

// Handle what is in the input box that will be rendered on the page => Allow users to type in search term
handleUpdateSearch(event) {
  this.setState({
    searchTerm: event.target.value
  });
}

// handleSubmitSearch() {
//   fetch(`/api/products`)
//   .then(r => r.json())
//   .then((data) => {
//     this.setState({
//       products: data.findItemsByKeywordsResponse[0].searchResult.count,
//       totalResults: data.findItemsByKeywordsResponse[0].searchResult.item,
//     });
//   })
//   .catch(err => console.log('Error: ',err));
// }

productCategory(event){
  console.log(event.target.innerText)
  // this.setState({
    // category: event.target.value,
  // })
}

handleSubmitSearch() {
   const API_KEY = process.env.API_KEY;

   const authorization = () => 'Basic ' + (window.btoa(`${API_KEY}`));

   const authParameters = {
     headers: {
       Authorization: authorization()
     }
   };

   const EBAY_URL = `https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=${API_KEY}&OPERATION-NAME=findItemsByKeywords&callback=_cb_findItemsByKeywords&keywords=${this.state.search}&paginationInput.entriesPerPage=15&GLOBAL-ID=EBAY-US&siteid=0`;

   fetch(EBAY_URL, authParameters)
   .then(r => r.json())
   .then(result => {
     this.setState({
        products: result.findItemsByKeywordsResponse[0].searchResult.count,
        totalResults: result.findItemsByKeywordsResponse[0].searchResult.item,
     });
   });
 }

// Edit display information on page with new search items from fetch call
displayNext() {
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
  AjaxAdapter.signUpUser({ f_name, l_name, username, email, password, phonenumber })
    .then((newUser) => {
      // clone existing state
      newState[newUser.id] = newUser;
      this.setState({ user: newState });
    })
    .catch((error) => {
      throw error;
    });
}

componentDidMount() {
  AjaxAdapter.getAllProducts()
  .then(data =>
    this.setState({ products: data })
  )
  .catch((error) => {
    throw error
  });
}

getSelectedProdcuts() {
    AjaxAdapter.getSelectedProdcuts()
    .then(data =>
      this.setState({
        products: data
      })
    )
    .catch((error) => {
      throw error;
    });
  }

  render(){
    return(
      <div className="App-Container">
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet" />
        {this.props.children && React.cloneElement(this.props.children, {
          state:this.state,
          signUpUser: this.signUpUser.bind(this),
          productCategory: this.productCategory.bind(this),
          signUpUser: this.signUpUser.bind(this)
        })}
      </div>
    )
  }
}
// && React.cloneElement(this.props.children, {state:this.state})
