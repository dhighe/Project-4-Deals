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
  console.log(props)
  const products = props.products.map((product, i) => {
    // if (product.category === )
    return (
      <ProductItems
        key={i}
        title={product.title}
        price={product.price}
        img={product.img}
        url={product.url}
      />
    );
  });
  return(
    <div className="Product-Container">
      {products}
    </div>
    )
}

export default Product;
