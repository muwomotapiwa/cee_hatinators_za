import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-card">
          <h2 className="section-title">About Cee Hatinators</h2>
          <p className="section-text">
            Cee Hatinators is your premier destination for exquisite and luxurious headwear. We believe that a perfect hat or fascinator can transform any outfit into a statement of elegance and style. Our collection is meticulously curated to bring you unique designs, crafted with attention to detail and quality.
          </p>
          <p className="section-text">
            From the grandeur of the Melbourne Cup to the intimate charm of a garden wedding, our pieces are designed to make you feel confident and beautiful. We are passionate about helping you find the perfect accessory that reflects your unique personality and complements every special occasion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;