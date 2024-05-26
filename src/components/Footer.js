import React from 'react';

const Footer = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="footer-box hover:text-green-400">
          <h3 className="text-lg font-bold md:pl-10 ">Locations</h3>
          <a href="#" className="block text-gray-400 md:pl-10 mt-2 hover:text-green-400">India</a>
          <a href="#" className="block text-gray-400 md:pl-10 mt-2 hover:text-green-400">USA</a>
          <a href="#" className="block text-gray-400 md:pl-10 mt-2 hover:text-green-400">Russia</a>
          <a href="#" className="block text-gray-400 md:pl-10 mt-2 hover:text-green-400">France</a>
          <a href="#" className="block text-gray-400 md:pl-10 mt-2 hover:text-green-400">Japan</a>
        </div>
        <div className="footer-box">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <a href="#" className="block text-gray-400 mt-2 hover:text-green-400">Home</a>
          <a href="#" className="block text-gray-400 mt-2 hover:text-green-400">Dishes</a>
          <a href="#" className="block text-gray-400 mt-2 hover:text-green-400">About</a>
          <a href="#" className="block text-gray-400 mt-2 hover:text-green-400">Review</a>
          <a href="#" className="block text-gray-400 mt-2 hover:text-green-400">Order</a>
        </div>
        <div className="footer-box">
          <h3 className="text-lg font-bold">Contact Info</h3>
          <a href="#" className="block text-gray-400 mt-2 hover:text-green-400">+123-456-7890</a>
          <a href="#" className="block text-gray-400 mt-2 hover:text-green-400">cravehub@gmail.com</a>
          <a href="#" className="block text-gray-400 mt-2 hover:text-green-400">Mumbai, India - 400104</a>
        </div>
        <div className="footer-box">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <a href="#" className="block text-gray-400 mt-2 hover:text-green-400">Facebook</a>
          <a href="#" className="block text-gray-400 mt-2 hover:text-green-400">Twitter</a>
          <a href="#" className="block text-gray-400 mt-2 hover:text-green-400">Instagram</a>
          <a href="#" className="block text-gray-400 mt-2 hover:text-green-400">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
