import React, { useState } from "react";
import aboutImge from "../../assets/about-img.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("About");
  // Tab data
  const tabs = ["About", "Experience", "Contact"];
  // Click handler to change active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto ">
        <div className="flex justify-between">
          <div>
            <img src={aboutImge} alt="About Image" />
          </div>
          {/* ===================== */}
          <div className="container mx-auto px-4 py-8">
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
                  <h2 className="text-2xl font-bold">
                    Exceptional Culinary Experience
                  </h2>
                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Omare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus.
                  </p>
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
      </div>
    </section>
  );
};

export default About;
