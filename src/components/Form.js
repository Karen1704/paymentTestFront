// src/components/Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [orderNumber, setOrderNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [clientId, setClientId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'orderNumber') {
      setOrderNumber(value);
    } else if (name === 'amount') {
      setAmount(value);
    } else if (name === 'clientId') {
      setClientId(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ orderNumber, amount, clientId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Order Number:
        <input type="text" name="orderNumber" value={orderNumber} onChange={handleChange} />
      </label>
      <label>
        Amount:
        <input type="text" name="amount" value={amount} onChange={handleChange} />
      </label>
      <label>
        Client ID:
        <input type="text" name="clientId" value={clientId} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
