import React, { useState } from 'react';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    dishName: '',
    quantity: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validate form fields
    if (formData.name.trim() === '') {
      newErrors.name = 'Please fill in this field';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Please fill in this field';
    }
    if (formData.number.trim() === '') {
      newErrors.number = 'Please fill in this field';
    }
    if (formData.address.trim() === '') {
      newErrors.address = 'Please fill in this field';
    }
    if (formData.dishName.trim() === '') {
      newErrors.dishName = 'Please fill in this field';
    }
    if (formData.quantity.trim() === '') {
      newErrors.quantity = 'Please fill in this field';
    }
    if (formData.message.trim() === '') {
      newErrors.message = 'Please fill in this field';
    }

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      alert('Order placed successfully!');
      // Reset form
      setFormData({
        name: '',
        email: '',
        number: '',
        address: '',
        dishName: '',
        quantity: '',
        message: '',
      });
    } else {
      // Form has errors
      setErrors(newErrors);
    }
  };

  return (
    <section id="order" className="py-12 bg-gray-100">
      <h3 className="text-center text-green-600 text-2xl pt-4">Order now</h3>
      <h3 className="text-center text-black text-4xl pb-8 uppercase">free and fast</h3>
      <form className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"/>
          <p className="text-red-500">{errors.name}</p>
        </div>
        <div className="form-group">
  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
  <p className="text-red-500">{errors.email}</p>
</div>
<div className="form-group">
  <input type="tel" name="number" placeholder="Your Number" value={formData.number} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" pattern="[0-9]{10}" />
  <p className="text-red-500">{errors.number}</p>
</div>
        <div className="form-group">
          <input type="text" name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"/>
          <p className="text-red-500">{errors.address}</p>
        </div>
        <div className="form-group">
          <input type="text" name="dishName" placeholder="Dish Name" value={formData.dishName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"/>
          <p className="text-red-500">{errors.dishName}</p>
        </div>
        <div className="form-group">
          <input type="text" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"/>
          <p className="text-red-500">{errors.quantity}</p>
        </div>
        <div className="form-group md:col-span-2">
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
          <p className="text-red-500">{errors.message}</p>
        </div>
        <div className="form-group md:col-span-2">
          <button type="submit" className="w-full p-3 bg-gray-800 text-white rounded-lg hover:bg-green-700">Place Order</button>
        </div>
      </form>
    </section>
  );
}

export default Order;
