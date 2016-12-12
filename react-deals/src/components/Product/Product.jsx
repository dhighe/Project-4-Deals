import React, { Component } from 'react';
import style from './Product.css';
import ProductItems from '../ProductItems/ProductItems.jsx'

// export default class Product extends Component {
//   render(){
//     return(
//       <div className="Product-Container">
//         <ProductItems
//         />
//       </div>
//     )
//   }
// }

const Product = props => {
  const products = props.products.map((product, i) => {
    return (
      <ProductItems
        key={i}
        title={product.title}
        img={product.galleryURL}
        url={product.viewItemURL}
        price={product.sellingStatus[0].currentPrice[0].__value__}
      />
    );
  });
  <div className="Product-Container">
    {products}
  </div>
}

