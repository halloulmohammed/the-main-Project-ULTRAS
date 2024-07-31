import React, { useState } from 'react';
import '../style/PaymentWidget.css'; // Adjust CSS as per your project

export const PaymentWidget = ({ onClose }) => {
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement logic to handle the form submission
    console.log('Buyer Info:', buyerInfo);
    // Reset form fields or close modal after submission
    onClose(); // Close the modal after submission
  };

  return (
    <div className="payment-widget">
      <div className="payment-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Provide Your Information</h2>
        <form onSubmit={handleSubmit} className='payment-form'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={buyerInfo.name}
            onChange={handleInputChange}
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={buyerInfo.email}
            onChange={handleInputChange}
            required
          />
          <br />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={buyerInfo.phone}
            onChange={handleInputChange}
            required
          />
          <br />
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={buyerInfo.address}
            onChange={handleInputChange}
            required
          ></textarea>
          <br />
          <button type="submit">Submit Order</button>
        </form>
      </div>
    </div>
  );
};


