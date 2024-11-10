import React, { useEffect, useRef } from 'react';

const Popular = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6">Popular Food Items</h3>
        <div className="overflow-hidden" ref={carouselRef} style={{ display: 'flex', gap: '20px', scrollBehavior: 'smooth' }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-gray-300 w-48 h-48 rounded-lg flex items-center justify-center">Food Item {i + 1}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
