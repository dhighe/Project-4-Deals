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
    <div className="Product-Card">
      <h3 className="product-name">{props.title}</h3>
      <h4 className="product-price">{props.price}</h4>
      <img className="product-img" src={props.img} alt={props.title} />
      <a href={props.url} className="purchase-link">Get it here</a>
    </div>
  </div>
);

export default ProductItems;

