import React from 'react';

const reviews = [
  {
    img: "newimages/b1.jpg",
    name: "John Doe",
    rating: 4.5,
    review: "Our culinary adventure at CraveHub was an absolute delight! From the first bite to the last, each dish was a masterpiece of flavor and presentation. The attention to detail in every element of the meal was evident, showcasing the chef's passion for creating unforgettable gastronomic experiences.."
  },
  {
    img: "newimages/b2.jpg",
    name: "Jane Smith",
    rating: 4,
    review: "Our culinary adventure at CraveHub was an absolute delight! From the first bite to the last, each dish was a masterpiece of flavor and presentation. The attention to detail in every element of the meal was evident, showcasing the chef's passion for creating unforgettable gastronomic experiences.."
  },
  {
    img: "newimages/b3.jpg",
    name: "Mark Johnson",
    rating: 5,
    review: "Our culinary adventure at CraveHub was an absolute delight! From the first bite to the last, each dish was a masterpiece of flavor and presentation. The attention to detail in every element of the meal was evident, showcasing the chef's passion for creating unforgettable gastronomic experiences."
  },
 
];

const Review = () => {
  return (
    <section id="review" className="py-12 bg-purple-200">
     <h3 class="text-center text-green-600 text-2xl pt-4">Customer's Review</h3>
<h3 class="text-center text-black text-4xl pb-8 uppercase">What They Say</h3>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {reviews.map((review, index) => (
          <div key={index} className="box p-4 bg-white rounded-lg shadow-md">
            <img src={review.img} alt={`Review ${index + 1}`} className="w-20 h-20 rounded-full mx-auto"/>
            <h3 className="mt-4 text-xl font-bold">{review.name}</h3>
            <div className="stars text-yellow-500 mt-2">
              {[...Array(Math.floor(review.rating))].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
              {review.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
            </div>
            <p className="text-gray-600 mt-2">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;
