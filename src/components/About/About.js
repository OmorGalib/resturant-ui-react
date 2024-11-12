import React, { useState } from "react";
import aboutImge from "../../assets/about-img.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBox, FaUtensils, FaShoppingBag } from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("About");
  // Tab data
  const tabs = ["About", "Experience", "Contact"];
  // Click handler to change active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="container mx-auto px-10 py-20">
      <div className="container mx-auto ">
        <div className="gap-12 md:flex justify-between">
          <div className="w-full md:w-[1200px] mx-auto">
            <img src={aboutImge} alt="About Image" />
          </div>
          {/* ===================== */}
          <div className="container mx-auto mt-10 md:mt-0">
            {/* Tab Header */}
            <div className="flex space-x-4 border-b-2 border-red-700">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`py-2 px-4 text-sm font-semibold  transition-colors duration-200 ${
                    activeTab === tab
                      ? "bg-red-700 text-white"
                      : "text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              {activeTab === "About" && (
                <div>
                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                    EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
                  </h2>

                  {/* Paragraph */}
                  <p className="mt-6 text-gray-700 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit do eiusmod tempor
                    incididunt ut labore et dolore magna minim veniam nostrud
                    exercitation.
                  </p>

                  {/* Button and Phone Number */}
                  <div className="flex items-center sm:items-center gap-6">
                    {/* Button */}
                    <button className="bg-yellow-400 text-black text-sm md:text-lg text-nowrap font-semibold py-2 px-6 hover:bg-yellow-500 transition">
                      ABOUT MORE
                    </button>

                    {/* Phone Number */}
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt className="text-red-500 text-xl" />
                      <span className="font-semibold text-sm text-gray-800 text-nowrap md:text-lg">
                        +88 3426 739 485
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "Experience" && (
                <div>
                  <h2 className="text-2xl font-bold">Our Experience</h2>
                  <p className="mt-4 text-gray-700">
                    With years of expertise, we bring the finest dining
                    experience. Enjoy a journey of flavors crafted with passion
                    and precision.
                  </p>
                </div>
              )}
              {activeTab === "Contact" && (
                <div>
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                  <p className="mt-4 text-gray-700">
                    Get in touch for reservations and inquiries. We are here to
                    provide you with exceptional service and unforgettable
                    dining experiences.
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* ===================== */}
        </div>
        <div className="flex flex-col mt-16 md:flex-row justify-between items-start gap-8">
          {/* Fast Delivery */}
          <div className="flex items-center gap-4">
            {/* Icon Wrapper */}
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
              <FaBox className="text-red-500 text-2xl" />
            </div>
            {/* Text Content */}
            <div>
              <h3 className="font-bold text-gray-900 text-lg">FAST DELIVERY</h3>
              <p className="text-gray-600 text-sm">Within 30 minutes</p>
            </div>
          </div>

          {/* Absolute Dining */}
          <div className="flex items-center gap-4">
            {/* Icon Wrapper */}
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
              <FaUtensils className="text-red-500 text-2xl" />
            </div>
            {/* Text Content */}
            <div>
              <h3 className="font-bold text-gray-900 text-lg">ABSOLUTE DINING</h3>
              <p className="text-gray-600 text-sm">Best buffet restaurant</p>
            </div>
          </div>

          {/* Pickup Delivery */}
          <div className="flex items-center gap-4">
            {/* Icon Wrapper */}
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
              <FaShoppingBag className="text-red-500 text-2xl" />
            </div>
            {/* Text Content */}
            <div>
              <h3 className="font-bold text-gray-900 text-lg">PICKUP DELIVERY</h3>
              <p className="text-gray-600 text-sm">Grab your food order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
