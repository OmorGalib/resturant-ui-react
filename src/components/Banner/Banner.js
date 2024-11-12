import React from "react";
import bannerImage from "../../assets/image1.png";
import offerTag from "../../assets/today-offer.png";
import flowerTag from "../../assets/flower.png";
import bgImage from "../../assets/Rectangle4.png";

const Banner = () => (
  <section
    className="bg-red-700 -mt-32 pb-5 sm:pb-32 pt-40 sm:pt-64 bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="container mx-auto px-4 sm:px-10 sm:flex justify-between relative">
      <div className="text-white flex flex-col justify-center">
        <h1 className="sm:bg-gradient-to-r from-transparent to-red-700/50 text-wrap font-bold sm:absolute top-11 left-0 text-5xl sm:text-8xl sm:z-10  sm:ml-10 uppercase sm:py-4 sm:pr-7 ">
          Taste The Authentic <br /> Saudi Cuisine
        </h1>
        <p className="text-lg sm:text-2xl my-6 sm:mb-10  sm:mt-32 text-wrap font-medium sm:w-9/12">
          Among the best saudi chefs in the world, serving you something beyond
          flavor
        </p>
        <button className="bg-yellow-400 mb-6 px-8 py-2 text-base text-black font-semibold uppercase w-fit">
          Explore Menu
        </button>
      </div>
      <div className="relative">
        <img src={bannerImage} alt="Banner Image" />
        <div className="absolute bottom-2 right-2 sm:-right-14 bg-yellow-400 rounded-full p-2">
          <img src={offerTag} alt="Today Offer" className="w-14 sm:w-32"/>
        </div>
        <img
          src={flowerTag}
          alt="Flower Tag"
          className="absolute sm:-top-7 sm:-right-6 -top-4 -right-4"
        />
      </div>
    </div>
  </section>
);

export default Banner;
