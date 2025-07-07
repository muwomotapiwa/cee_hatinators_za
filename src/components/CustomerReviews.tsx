import React from 'react';
import { Star } from 'lucide-react';

const CustomerReviews: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jane Doe',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b52ece53?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Absolutely stunning fascinator! It completed my outfit perfectly for the wedding. Received so many compliments!'
    },
    {
      id: 2,
      name: 'Sarah M.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 4,
      text: 'High quality and unique design. It was exactly what I was looking for to wear to the races. Fast shipping too!'
    },
    {
      id: 3,
      name: 'Emily R.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Fantastic customer service and a beautiful product. I\'m so happy with my purchase and will definitely be back!'
    }
  ];

  return (
    <section className="customer-reviews">
      <div className="container">
        <div className="section-card">
          <h2 className="section-title">Customer Reviews & Testimonials</h2>
          
          <div className="overall-rating">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={24} 
                  fill={i < 4 ? '#FCD34D' : 'none'}
                  stroke={i < 4 ? '#FCD34D' : '#D1D5DB'}
                />
              ))}
            </div>
            <span className="rating-text">4.0 out of 5 stars</span>
          </div>
          <p className="reviews-count">Based on 128 customer ratings.</p>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < testimonial.rating ? '#FCD34D' : 'none'}
                      stroke={i < testimonial.rating ? '#FCD34D' : '#D1D5DB'}
                    />
                  ))}
                </div>
                <p className="testimonial-author">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;