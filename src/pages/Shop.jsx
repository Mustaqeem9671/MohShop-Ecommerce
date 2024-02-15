import React from 'react';
import { PRODUCTS } from '../Products'
import Product from './Product';

const Shop = () => {
  return (
    <div className='shop'>
        <div className="shoptitle">
            <h1>my shope</h1>
        </div>
        <div className="products">
{" "}
{PRODUCTS.map((product)=>(
    <Product data={product} />
))}
        </div>
    </div>
  )
}

export default Shop