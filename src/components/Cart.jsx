// Cart.jsx

import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      {cartItems && cartItems.length > 0 ? (
        <div>
          <h2>Selected Items</h2>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>Brand: {item.brand}</p>
              <p>Title: {item.title}</p>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No items selected</p>
      )}
    </div>
  );
};

export default Cart;
