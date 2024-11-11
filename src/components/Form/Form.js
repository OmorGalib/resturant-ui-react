import React, { useState } from 'react';
import boxShape from "../../assets/red-small-box.png";
import bgForm from "../../assets/bg-form.png";

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', person:'',message:'' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <section className="py-28 bg-repeat bg-cover" style={{ backgroundImage: `url(${bgForm})`}}>
      <div className="container mx-auto px-10 text-white">
        <div className="flex items-center gap-2 mb-4">
          <img src={ boxShape } />
          <h2 className="text-red-600 text-base font-semibold ">Book Now</h2>
        </div>
        <h3 className="text-6xl font-semibold mb-6 uppercase ">Book Your Table</h3>
        <p className="text-lg font-light mb-6 w-5/12">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
        <form onSubmit={handleSubmit} className="space-y-5 w-2/4">
          <div className="flex gap-5">
            <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="w-full p-2 border border-gray-300 bg-transparent h-12" />
            <input type="email" name="email" placeholder="Your Email" onChange={handleChange} className="w-full p-2 border border-gray-300 bg-transparent h-12" />
          </div>
          <div className="flex gap-5">
            <input type="date" name="date" placeholder="Reservation Date" onChange={handleChange} className="w-full p-2 border border-gray-300 bg-transparent h-12" />
            <input type="number" name="number" placeholder="Total People" onChange={handleChange} className="w-full p-2 border border-gray-300 bg-transparent h-12" />
          </div>
          <input type="text" name="message" placeholder="Message" onChange={handleChange} className="w-full p-2 border border-gray-300 bg-transparent h-28" />
          <button type="submit" className="bg-yellow-400 px-8 py-3 text-black w-fit uppercase font-semibold text-lg">Book Now</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
