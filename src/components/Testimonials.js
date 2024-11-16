import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    { name: 'John Doe', text: 'Amazing quality products! Highly recommend.' },
    { name: 'Jane Smith', text: 'I love the variety and the styles.' },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p>{review.text}</p>
            <strong>- {review.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
