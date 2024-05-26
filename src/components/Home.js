import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleOrderClick = () => {
    setFormVisible(true);
  };

  const handleCloseClick = () => {
    setFormVisible(false);
  };


  useEffect(() => {
    if (isFormVisible) {
      const script = document.createElement('script');
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.onload = () => {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '46266620',
          formId: 'd23c32d9-88c7-46a6-9bb5-5a1fcd884956',
        });
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isFormVisible]);

  return (
    <section id="home" className="pt-20 pb-12 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-md mb-8 md:mb-0 text-center md:text-left">
            <span className="text-green-600 text-5xl ">Our Special Dish</span>
            <h3 className="text-black text-6xl sm:text-4xl py-5 font-bold">Fried Chicken</h3>
            <p className="text-gray-600 text-xl sm:text-lg mt-4">Golden-crisp perfection with every bite, our fried chicken sets the bar high for flavor and crunch aficionados</p>
            <a onClick={handleOrderClick} className="mt-6 inline-block text-white bg-gray-800 rounded-md cursor-pointer text-lg px-8 sm:px-12 py-2.5 sm:py-2 transition duration-300 ease-in-out hover:bg-green-500 hover:text-black">Order Now</a>
          </div>
          <div className="max-w-md">
            <img src="newimages/fchic-removebg-preview.png" alt="Fried Chicken" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-md mb-8 md:mb-0 text-center md:text-left">
            <span className="text-green-600 text-5xl">Our Special Dish</span>
            <h3 className="text-black text-6xl sm:text-4xl py-5 font-bold">Noodles</h3>
            <p className="text-gray-600 text-xl sm:text-lg mt-4">Each strand of noodles delicately cradles the essence of the broth, inviting a symphony of flavors to dance on your palate with every bite.</p>
            <a onClick={handleOrderClick} className="mt-6 inline-block text-white bg-gray-800 rounded-md cursor-pointer text-lg px-8 sm:px-12 py-2.5 sm:py-2 transition duration-300 ease-in-out hover:bg-green-500 hover:text-black">Order Now</a>
          </div>
          <div className="max-w-md">
            <img src="newimages/noodle-removebg-preview.png" alt="Noodles" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-md mb-8 md:mb-0 text-center md:text-left">
            <span className="text-green-600 text-5xl">Our Special Dish</span>
            <h3 className="text-black text-6xl sm:text-4xl py-5 font-bold">Pizza</h3>
            <p className="text-gray-600 text-xl sm:text-lg mt-4">Indulge in our meticulously crafted pizza perfection, where every bite is a symphony of flavors dancing on your palate</p>
            <a onClick={handleOrderClick} className="mt-6 inline-block text-white bg-gray-800 rounded-md cursor-pointer text-lg px-8 sm:px-12 py-2.5 sm:py-2 transition duration-300 ease-in-out hover:bg-green-500 hover:text-black">Order Now</a>
          </div>
          <div className="max-w-md">
            <img src="newimages/pizz-removebg-preview.png" alt="Pizza" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-3xl">
            <button onClick={handleCloseClick} className="absolute top-2 right-2 text-gray-600 text-2xl">&times;</button>
            <div dangerouslySetInnerHTML={{ __html: `<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
            <script>
              hbspt.forms.create({
                region: "na1",
                portalId: "46266620",
                formId: "d23c32d9-88c7-46a6-9bb5-5a1fcd884956"
              });
            </script>` }} />
          
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
