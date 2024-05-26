import React, { useState, useEffect } from 'react';

const dishes = [
  {
    img: "newimages/burgs.jpg",
    name: "Burger",
    description: "Tasty and yummy dish, place your order soon. Get the best food at low price!",
    price: "$10"
  },
  {
    img: "newimages/fchic.jpg",
    name: "Fried Chicken",
    description: "Tasty and yummy dish, place your order soon. Get the best food at low price!",
    price: "$12"
  },
  {
    img: "newimages/noodle.jpg",
    name: "Noodle",
    description: "Tasty and yummy dish, place your order soon. Get the best food at low price!",
    price: "$15"
  },
  {
    img: "newimages/pizz.jpg",
    name: "Pizza",
    description: "Tasty and yummy dish, place your order soon. Get the best food at low price!",
    price: "$15"
  },
  {
    img: "newimages/spages.jpg",
    name: "Pasta",
    description: "Tasty and yummy dish, place your order soon. Get the best food at low price!",
    price: "$15"
  },
  {
    img: "newimages/rolls.jpg",
    name: "Veg roll",
    description: "Tasty and yummy dish, place your order soon. Get the best food at low price!",
    price: "$15"
  },
  {
    img: "newimages/waffles.jpg",
    name: "Waffle",
    description: "Tasty and yummy dish, place your order soon. Get the best food at low price!",
    price: "$15"
  },
  {
    img: "newimages/ice.jpg",
    name: "Ice Cream",
    description: "Tasty and yummy dish, place your order soon. Get the best food at low price!",
    price: "$15"
  },
  {
    img: "newimages/shaw.jpg",
    name: "Shawarma",
    description: "Tasty and yummy dish, place your order soon. Get the best food at low price!",
    price: "$15"
  },

];

const Dishes = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const handleOrderClick = (dish) => {
    setSelectedDish(dish);
    setFormVisible(true);
  };

  const handleCloseClick = () => {
    setFormVisible(false);
    setSelectedDish(null);
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
    <section id="dishes" className="py-12 bg-purple-200">
      <h3 className="text-center text-green-600 text-2xl pt-4">Our Dishes</h3>
      <h3 className="text-center text-black text-4xl pb-8 uppercase">Popular Dishes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {dishes.map((dish, index) => (
          <div key={index} className="box p-4 bg-white rounded-lg shadow-md">
            <img src={dish.img} alt={dish.name} className="w-full h-40 object-cover rounded-t-lg"/>
            <div className="p-4">
              <h3 className="text-xl font-bold">{dish.name}</h3>
              <p className="text-gray-600 mt-2">{dish.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold">{dish.price}</span>
                <button 
                  onClick={() => handleOrderClick(dish)}
                  className="px-4 py-2 mt-6 inline-block text-white bg-gray-800 rounded-md cursor-pointer text-lg transition duration-300 ease-in-out hover:bg-green-500 hover:text-black text-white rounded-lg"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-3xl">
            <button onClick={handleCloseClick} className="absolute top-2 right-2 text-gray-600 text-2xl">&times;</button>
            <h3 className="text-2xl mb-4">{selectedDish ? `Order ${selectedDish.name}` : 'Order Form'}</h3>
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

export default Dishes;
