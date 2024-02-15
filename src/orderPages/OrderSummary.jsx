// OrderSummary.jsx
import React from 'react';
import "../styles/OrderSummary.css"

const OrderSummary = ({ shippingInfo, onPrevStep, onNextStep }) => {
  // You can display order summary details here

  return (
    <div className='orderSummary-main'>
      <h2>Order Summary</h2>
      {/* Display order items and total here */}

      <button onClick={onPrevStep}>Previous</button>
      <button onClick={onNextStep}>Proceed to Payment</button>
    </div>
  );
};

export default OrderSummary;
