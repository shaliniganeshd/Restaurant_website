import React, { useState } from 'react';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="fixed top-0 left-0 right-0 p-4 flex items-center justify-between z-50 shadow-lg bg-gray-900">
      <a href="#" className="text-white text-2xl font-bold flex items-center">
        <i className="fas fa-utensils text-green-600"></i> CraveHub.
      </a>
      <div className="hidden md:flex space-x-4 items-center justify-center">
        <nav>
          <a href="#home" className="text-gray-100  hover:bg-green-600 hover:text-white p-2 rounded transition">Home</a>
          <a href="#dishes" className="text-gray-100 hover:bg-green-600 hover:text-white p-2 rounded transition">Dishes</a>
          <a href="#about" className="text-gray-100 hover:bg-green-600 hover:text-white p-2 rounded transition">About</a>
          <a href="#review" className="text-gray-100 hover:bg-green-600 hover:text-white p-2 rounded transition">Review</a>
          <a href="#order" className="text-gray-100 hover:bg-green-600 hover:text-white p-2 rounded transition">Order</a>
        </nav>
      </div>
      <div className="flex md:hidden space-x-4">
        <i className={`${menuVisible ? 'fas fa-times' : 'fas fa-bars'} text-black bg-gray-200 p-3 rounded-full hover:bg-green-600 hover:text-white cursor-pointer`} onClick={toggleMenu}></i>
      </div>
      {menuVisible && (
        <div className="md:hidden w-full bg-gray-900 py-2">
          <nav className="flex flex-row items-center">
            <a href="#home" className="text-gray-100 hover:bg-green-600 hover:text-white p-2 rounded transition">Home</a>
            <a href="#dishes" className="text-gray-100 hover:bg-green-600 hover:text-white p-2 rounded transition">Dishes</a>
            <a href="#about" className="text-gray-100 hover:bg-green-600 hover:text-white p-2 rounded transition">About</a>
            <a href="#review" className="text-gray-100 hover:bg-green-600 hover:text-white p-2 rounded transition">Review</a>
            <a href="#order" className="text-gray-100 hover:bg-green-600 hover:text-white p-2 rounded transition">Order</a>
          </nav>
        </div>
      )}
      <form action="" id="search-form" className="hidden">
        <input type="search" placeholder="search here..." name="" id="search-box" className="p-2 rounded"/>
        <label htmlFor="search-box" className="fas fa-search p-2"></label>
        <i className="fas fa-times p-2" id="close"></i>
      </form>
    </header>
  );
}

export default Header;
