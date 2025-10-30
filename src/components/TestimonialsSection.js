import React from 'react';

function TestimonialsSection() {
  const testimonials = [
    { name: 'Pooja Yadav', quote: '"What a delightful stay at Ram Bagicha! The garden setting is truly magical, especially during sunrise when you can enjoy your morning chai surrounded by flowers. The rooms are spotlessly clean and the staff treated us like family. Special thanks to the manager for arranging our local sightseeing."' },
    { name: 'Rajesh Sharma', quote: '"As a business traveler who frequently visits the area, I\'ve finally found my go-to accommodation. Ram Bagicha Guest House offers the perfect balance of professional service and homely comfort. The high-speed WiFi and quiet atmosphere made it ideal for work, while the home-cooked meals were a wonderful bonus.' },
    { name: 'Meenakshi', quote: '"We chose Ram Bagicha for our family reunion and couldn\'t be happier! The sprawling garden was perfect for our children to play in, and the kitchen staff graciously accommodated our various dietary preferences. The rooms are spacious and well-maintained. We\'ve already booked our next stay!"' },
    { name: 'Shrikant Manik', quote: '"A peaceful retreat in the heart of the city. The traditional architecture and modern amenities blend seamlessly. The morning birds in the garden were a lovely alarm clock! Just a minor suggestion - some rooms could use better water pressure. Otherwise, a wonderful experience."' },
  ];

  return (
    <section className="u-clearfix u-white u-section-6" id="testimonials">
      <div className="u-clearfix u-sheet u-valign-bottom-sm u-valign-bottom-xs u-sheet-1">
        <h2 className="u-align-center u-custom-font u-text u-text-default u-text-1">Testimonials</h2>
        <div className="u-expanded-width u-list u-list-1">
          <div className="u-repeater u-repeater-1">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className={`u-border-2 u-border-grey-75 u-container-style u-list-item u-palette-1-light-3 u-radius-50 u-repeater-item u-shape-round u-list-item-${index + 1}`}>
                <div className="u-container-layout u-similar-container u-container-layout-1">
                  <h3 className="u-align-left u-custom-font u-font-merriweather u-text u-text-2">{testimonial.name}</h3>
                  <p className="u-align-left u-text u-text-3">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;