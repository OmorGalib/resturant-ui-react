import React, { useEffect, useState } from 'react';
import berger from "../../assets/food1.png";
import pizza from "../../assets/food2.png";
import frenchFry from "../../assets/food3.png";
import chicken from "../../assets/food4.png";
import boxShape from "../../assets/red-small-box.png";
import nextIcon from "../../assets/angle-right.png";
import previousIcon from "../../assets/angle-left.png";
import saladShape from "../../assets/populer-outer.png";

const Popular = () => {
  const items = [
    { id: 1, image: berger, title: "VEGETABLES BURGER", description: "Barbecue Italian cuisine pizza" },
    { id: 2, image: pizza, title: "SPACIAL PIZZA", description: "Barbecue Italian cuisine pizza" },
    { id: 3, image: frenchFry, title: "SPACIAL FRENCH FRIES", description: "Barbecue Italian cuisine" },
    { id: 4, image: chicken, title: "CUISINE CHICKEN", description: "Japanese Cuisine Chicken" },
    { id: 5, image: berger, title: "VEGETABLES BURGER", description: "Barbecue Italian cuisine pizza" },
    { id: 6, image: pizza, title: "SPACIAL PIZZA", description: "Barbecue Italian cuisine pizza" },
    { id: 7, image: frenchFry, title: "SPACIAL FRENCH FRIES", description: "Barbecue Italian cuisine" },
    { id: 8, image: chicken, title: "CUISINE CHICKEN", description: "Japanese Cuisine Chicken" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <section className="py-28 bg-[#f9f4ef] relative">
      <div className="container mx-auto px-10 relative">
        <div className="flex items-center gap-2 mb-4">
          <img src={ boxShape } />
          <h2 className="text-red-600 text-lg font-semibold"> Crispy, Every Bite Taste</h2>
        </div>
        <h1 className="text-5xl font-bold mb-8 uppercase">Popular Food Items</h1>
        
        <div className="flex items-center justify-center">
          {/* Carousel */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex % items.length) * (100 / itemsToShow)}%)` }}
            >
              {items.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-1/4 p-4 ">
                  <div className="bg-white shadow-lg rounded-lg px-3 py-8 text-center">
                    <img src={item.image} alt={item.title} className="mx-auto mb-4 w-25 h-24 object-cover" />
                    <hr className="my-4 border-t-2 border-red-600 w-8 mx-auto" />
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-6 right-16 flex space-x-2">
            <button
              onClick={handlePrevious}
              className="bg-white rounded-full py-5 px-6 shadow-lg hover:bg-gray-100 focus:outline-none"
            >
              <img src={previousIcon}/>
            </button>
            <button
              onClick={handleNext}
              className="bg-white rounded-full py-5 px-6 shadow-lg hover:bg-gray-100 focus:outline-none"
            >
              <img src={nextIcon}/>
            </button>
          </div>
        </div>
      </div>
      <img src={saladShape} className="absolute left-0 top-1/4"/>
    </section>
  );
};

export default Popular;
