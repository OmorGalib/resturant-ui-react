import React, { useState } from 'react';

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    "Customer 1: Amazing food!",
    "Customer 2: Great service!",
    "Customer 3: Best experience!"
  ];

  const nextTestimonial = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6">What Some of My Customers Say</h3>
        <div className="p-4 bg-yellow-500 text-white rounded-lg">
          <p>{testimonials[index]}</p>
        </div>
        <button onClick={nextTestimonial} className="mt-4 bg-yellow-500 px-4 py-2 rounded text-white">Next</button>
      </div>
    </section>
  );
};

export default Testimonial;
