import React from "react";
import { FiSearch } from "react-icons/fi"; // react-icons ব্যবহার করলে

const Sidebar = ({ categories }) => {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-200 bg-white rounded-full py-2 px-4 focus:outline-none"
        />
        <FiSearch className="absolute right-4 top-3 text-gray-400" />
      </div>

      {/* Categories Card */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-2xl font-serif italic font-bold mb-6 text-[#4a322d]">Categories</h3>
        <ul className="space-y-4">
          {categories.map((cat, index) => (
            <li key={index} className="flex justify-between items-center text-gray-600 hover:text-brown-700 cursor-pointer">
              <span>{cat.name}</span>
              <span className="text-sm">({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;