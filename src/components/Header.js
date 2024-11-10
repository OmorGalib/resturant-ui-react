import React from "react";
import logo from "../assets/logo.png";

const Header = () => (
  <header className="sticky top-0 bg-red-700 px-4 py-5 z-10 text-white">
    <div className="container mx-auto px-10 flex justify-between items-center">
      <div className="flex items-center gap-20">
        <div className="flex gap-1 items-center">
          <img src={logo} alt="Logo" className="w-6 h-6" />
          <h1 className="text-2xl font-semibold">
            Restau<span className="font-medium">rant</span>
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6 text-normal">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Clients</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <button className="bg-yellow-400 px-6 py-2 text-base text-black font-semibold uppercase">
        Book A Table
      </button>
    </div>
  </header>
);

export default Header;
