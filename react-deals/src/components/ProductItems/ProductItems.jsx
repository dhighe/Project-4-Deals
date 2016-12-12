import React, { Component } from 'react';
import style from './ProductItems.css';

// export default class ProductItems extends Component {
//   render(){
//     return(
//       <div className="ProductItems-Container">
//         <div className="Card-container">
//           <div className="card-square"></div>
//           <div className="card-square"></div>
//           <div className="card-square"></div>
//           <div className="card-square"></div>
//           <div className="card-square"></div>
//           <div className="card-square"></div>
//           <div className="card-square"></div>
//           <div className="card-square"></div>
//           <div className="card-square"></div>
//           <div className="card-square"></div>
//           <div className="card-square"></div>
//           <div className="card-square"></div>
//         </div>
//       </div>
//     )
//   }
// }

const ProductItems = props => (
  <div className="ProductItems-Container">
    <h3>{props.title}</h3>
    <h4>{props.price}</h4>
    <img src={props.img} alt={props.title} />
    <a href={props.url}>See it here</a>
  </div>
);

export default ProductItems;

