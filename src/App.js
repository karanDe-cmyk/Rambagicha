import React from 'react';
import './App.css'
import './css/index.css'
import './css/nicepage.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AmenitiesSection from './components/AmenitiesSection';
import RoomsSection from './components/RoomsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactMapSection from './components/ContactMapSection';
import Footer from './components/Footer';
import FixedContactButtons from './components/FixedContactButtons';

// Note: You will need to import and use the actual CSS files
// or convert the Nicepage/index.css styles to a CSS-in-JS solution
// or a global stylesheet in your React project.

function App() {
  
  return (
    <div className="u-body u-xl-mode" data-lang="en">
      {/* Header (sec-e78f) */}
      <Header />
      
      {/* Hero Section (sec-f09e) */}
      <HeroSection />

      {/* About Section (carousel_407f) */}
      <AboutSection />

      {/* Amenities Section (amenities) */}
      <AmenitiesSection />

      {/* Book Your Stay Section (book) - This is the original "Book Your Stay" marketing section */}
      {/* Since the Rooms section also has booking, this can be renamed or merged. I'm keeping it separate for structure. */}
      <section className="u-align-center u-clearfix u-container-align-center u-white u-section-4" id="book">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-14 u-layout-wrap u-layout-wrap-1">
            {/* The existing content of section 4 is placed here to maintain the layout */}
            <div className="u-layout" style={{}}>
              <div className="u-layout-row" style={{}}>
                <div className="u-align-center u-container-align-center-xl u-container-style u-layout-cell u-left-cell u-palette-1-light-3 u-radius u-shape-round u-size-30 u-size-xs-60 u-layout-cell-1" src="">
                  <div className="u-container-layout u-container-layout-1">
                    <h2 className="u-align-center u-custom-font u-text u-text-1">Book Your Stay</h2>
                    <p className="u-align-center u-text u-text-2"> Escape to tranquility at Ram Bagicha Guest House in Andhra
                      Pradesh. Nestled amidst lush greenery, our charming guest house offers a serene retreat from the
                      bustling world. Experience the warmth of authentic Andhra hospitality in our comfortable and elegantly
                      designed rooms or cottages. Indulge in delectable local cuisine at our on-site restaurant, unwind by
                      the swimming pool, or rejuvenate with a soothing spa treatment. Explore the vibrant culture and
                      breathtaking landscapes of Andhra Pradesh, with our guest house serving as the perfect base for your
                      adventures. Whether you seek a peaceful getaway or an exciting exploration, Ram Bagicha Guest House
                      promises a memorable stay. Book your stay today and discover the magic of Andhra Pradesh. </p>
                    <a href="tel:07878033812"
                      className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius u-btn-1">book
                      now </a>
                  </div>
                </div>
                <div
                  className="u-align-center u-container-align-center u-container-style u-image u-image-round u-layout-cell u-radius u-right-cell u-size-30 u-size-xs-60 u-image-1"
                  src="" data-image-width="1360" data-image-height="1020">
                  <div className="u-container-layout u-valign-middle u-container-layout-2" src=""></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section (carousel_1c8b) */}
      <RoomsSection />

      {/* Testimonials Section (testimonials) */}
      <TestimonialsSection />

      {/* Contact & Map Section (map) */}
      <ContactMapSection />

      {/* Footer (sec-1dbe) */}
      <Footer />

      {/* Fixed Contact Buttons */}
      <FixedContactButtons />
    </div>
  );
}

export default App;