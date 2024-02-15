// PaymentDetails.jsx
import React, { useState } from 'react';
import "../styles/PaymentDetails.css";

const PaymentDetails = ({ onSubmit, onPrevStep }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className='payment-details'>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="expiry">Expiry Date:</label>
        <input
          type="text"
          id="expiry"
          name="expiry"
          value={formData.expiry}
          onChange={handleChange}
          placeholder="MM/YY"
          required
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          required
        />

        <button onClick={onPrevStep}>Previous</button>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default PaymentDetails;
