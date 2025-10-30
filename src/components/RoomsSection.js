import React from 'react';
import NonAc from '../images/101.webp'
import Ac from '../images/102.webp'
import Family from '../images/103.webp'

function RoomsSection() {
  const rooms = [
    { name: 'Non- Ac Room', image: NonAc },
    { name: 'Ac Room', image: Ac },
    { name: 'Family Stay', image: Family },
  ];
  
  const whatsappNumber = "8739943076"; // Your WhatsApp number

  return (
    <section className="u-align-center u-clearfix u-container-align-center u-palette-1-base u-section-5" id="carousel_1c8b">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-custom-font u-text u-text-1">Rooms</h2>
        <div className="u-expanded-width u-list u-list-1">
          <div className="u-repeater u-repeater-1">
            {rooms.map((room, index) => {
              // Custom WhatsApp message for each room
              const message = `I am interested in booking the ${room.name}. Please share the availability and booking process.`;
              const whatsappLink = `https://wa.me/+91${whatsappNumber}?text=${encodeURIComponent(message)}`;

              return (
                <div key={room.name} className={`u-align-center u-border-2 u-border-grey-75 u-container-style u-list-item u-palette-1-light-3 u-radius-50 u-repeater-item u-shape-round u-list-item-${index + 1}`}>
                  <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-container-layout-1">
                    <img alt={room.name} className="custom-expanded u-image u-image-round u-radius u-image-1" data-image-width="1360" data-image-height="1020" src={room.image} />
                    <p className="u-align-center u-custom-font u-font-merriweather u-text u-text-2">{room.name}</p>
                    
                    {/* BOOK NOW Button with WhatsApp Redirect */}
                    <a href={whatsappLink} 
                      className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius u-btn-1"
                      target="_blank" rel="noopener noreferrer" // Added for security and new tab
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomsSection;