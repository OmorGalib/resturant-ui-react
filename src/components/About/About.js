import React, { useState } from 'react';
import aboutImge from "../assets/about-img.png";

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto ">
        <div className="flex justify-between">
          <div>
            <img src={aboutImge} alt='About Image'/>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-6">Exceptional Culinary Experience</h3>
            <div className="flex justify-center space-x-4 mb-6">
              <button onClick={() => setActiveTab('overview')} className={activeTab === 'overview' ? 'font-bold' : ''}>Overview</button>
              <button onClick={() => setActiveTab('menu')} className={activeTab === 'menu' ? 'font-bold' : ''}>Menu</button>
              <button onClick={() => setActiveTab('services')} className={activeTab === 'services' ? 'font-bold' : ''}>Services</button>
            </div>
            <div>{activeTab === 'overview' ? "Overview content" : activeTab === 'menu' ? "Menu content" : "Services content"}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
