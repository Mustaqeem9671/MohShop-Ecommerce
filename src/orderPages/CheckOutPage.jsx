// CheckoutPage.jsx
import React, { useState } from 'react';
import ShippingInfo from './ShippingInfo';
import OrderSummary from './OrderSummary';
import PaymentDetails from './PaymentDetails';
import "../styles/CheckOut.css"

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    email: '',
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleShippingInfoSubmit = (data) => {
    setShippingInfo(data);
    handleNextStep();
  };

  const handlePaymentDetailsSubmit = (data) => {
    setPaymentDetails(data);
    // Handle the final submission logic here
    console.log('Order placed with the following details:', {
      shippingInfo,
      paymentDetails,
    });
  };

  return (
    <div className="checkout-container">
      {step === 1 && (
        <ShippingInfo onSubmit={handleShippingInfoSubmit} />
      )}
      {step === 2 && (
        <OrderSummary
          shippingInfo={shippingInfo}
          onPrevStep={handlePrevStep}
          onNextStep={handleNextStep}
        />
      )}
      {step === 3 && (
        <PaymentDetails
          onSubmit={handlePaymentDetailsSubmit}
          onPrevStep={handlePrevStep}
        />
      )}
    </div>
  );
};

export default CheckoutPage;
