import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <h3 className="text-center text-green-600 text-2xl pt-4">About Us</h3>
      <h3 className="text-center text-black text-4xl pb-8 uppercase">Why choose us?</h3>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img src="newimages/big2.jpg" alt="About Us" className="w-full rounded-lg shadow-lg"/>
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h3 className="text-black text-3xl font-bold">Best Food in the Country</h3>
          <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius ipsam, autem laudantium totam voluptatem similique cumque. Ex sunt officiis corporis unde reiciendis laborum quibusdam possimus, quod tenetur culpa?</p>
          <p className="text-gray-600 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellat autem numquam quibusdam nostrum quidem eius ipsa doloremque cum nam amet odit nemo perferendis dolor ex vero repudiandae reiciendis inventore.</p>
          <p className="text-gray-600 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellat autem numquam quibusdam nostrum quidem eius ipsa doloremque cum nam amet odit nemo perferendis dolor ex vero repudiandae reiciendis inventore.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <div className="flex items-center">
              <i className="fas fa-shipping-fast text-green-600 text-2xl"></i>
              <span className="ml-2 text-gray-600">Free Delivery</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-dollar-sign text-green-600 text-2xl"></i>
              <span className="ml-2 text-gray-600">Easy Payment</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-headset text-green-600 text-2xl"></i>
              <span className="ml-2 text-gray-600">24/7 Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
