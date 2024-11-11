import React from "react";
import bannerImage from "../../assets/image1.png";
import offerTag from "../../assets/today-offer.png";
import flowerTag from "../../assets/flower.png";
import bgImage from "../../assets/Rectangle4.png";


const Banner = () => (
  <section  className="bg-red-700 -mt-32 pb-32 pt-64 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})`}} >
    <div className="container mx-auto px-10 flex justify-between relative">
      <div className="text-white flex flex-col justify-center">
        <h1 className="bg-gradient-to-r from-transparent to-red-700/50 text-wrap font-bold absolute top-11 left-0 text-8xl z-10  ml-10 uppercase py-4 pr-7 ">Taste The Authentic <br/> Saudi Cuisine</h1>
        <p className="text-xl mb-10  mt-14 text-wrap font-semibold w-9/12">
          Among the best saudi chefs in the world, serving you something beyond
          flavor
        </p>
        <button className="bg-yellow-400 px-8 py-2 text-medium text-black font-semibold uppercase w-fit">
          Explore Menu
        </button>
      </div>
      <div className="relative">
        <img src={bannerImage} alt="Banner Image" />
        <div className="absolute bottom-0 -right-14 bg-yellow-400 rounded-full p-2">
            <img src={offerTag} alt="Today Offer"/>
        </div>
        <img src={flowerTag} alt="Flower Tag" className="absolute -top-7 -right-6"/>
      </div>
    </div>
  </section>
);

export default Banner;
