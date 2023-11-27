import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: '',
    amount: '',
    clientId: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    mdOrder: '',
    bindingId: '',
  });

  const handleOrderDetailsSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://payl-payment.vercel.app/api/payment/test/registerOrderBinding', orderDetails);
      
      console.log('Step 1 Response:', response.data);

      // After receiving the response, proceed to the next step
      handlePaymentDetailsSubmit();
    } catch (error) {
      console.error('Step 1 Error:', error);
    }
  };

  const handlePaymentDetailsSubmit = async () => {
    try {
      const response = await axios.post('https://payl-payment.vercel.app/api/payment/test/orderBinding', {
        mdOrder: paymentDetails.mdOrder,
        bindingId: paymentDetails.bindingId,
      });

      console.log('Step 2 Response:', response.data);
    } catch (error) {
      console.error('Step 2 Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleOrderDetailsSubmit}>
        <label>
          Order Number:
          <input
            type="text"
            value={orderDetails.orderNumber}
            onChange={(e) => setOrderDetails({ ...orderDetails, orderNumber: e.target.value })}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="text"
            value={orderDetails.amount}
            onChange={(e) => setOrderDetails({ ...orderDetails, amount: e.target.value })}
          />
        </label>
        <br />
        <label>
          Client ID:
          <input
            type="text"
            value={orderDetails.clientId}
            onChange={(e) => setOrderDetails({ ...orderDetails, clientId: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Submit Step 1</button>
      </form>

      <form>
        <label>
          mdOrder:
          <input
            type="text"
            value={paymentDetails.mdOrder}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, mdOrder: e.target.value })}
          />
        </label>
        <br />
        <label>
          bindingId:
          <input
            type="text"
            value={paymentDetails.bindingId}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, bindingId: e.target.value })}
          />
        </label>
        <br />
        <button type="button" onClick={handlePaymentDetailsSubmit}>Submit Step 2</button>
      </form>
    </div>
  );
};

export default PaymentForm;
