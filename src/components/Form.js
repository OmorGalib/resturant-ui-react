import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', date: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6">Book Your Table</h3>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
          <input type="date" name="date" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
          <button type="submit" className="bg-yellow-500 px-4 py-2 rounded text-white w-full">Book Now</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
