import React from "react";

const Product = (props) => {
  const { id, price, productNAme, image } = props.data;
  return (
    <div>
      <h1>{id}</h1>
      <h2>{price}</h2>
      <h1>{productNAme}</h1>
      <img src={image} alt="Product" />
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
