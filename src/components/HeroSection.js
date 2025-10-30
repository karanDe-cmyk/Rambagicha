import React from 'react';
// You'll need to make sure the images are in your public folder or imported correctly.
// E.g., import whatsappIcon from '../images/3799866-0aa42a1c.png';
import HeadImgae from '../images/rb8.webp';
import WhatsAppImage from '../images/3799866-0aa42a1c.png'
import MailImage from '../images/2099199-390ae0a7.png'

function HeroSection() {
  return (
    <section className="u-clearfix u-image u-section-1" id="sec-f09e" data-image-width="1360" data-image-height="634" 
      // Style to set background image. Replace the path with the actual image path in your React project.
      style={{backgroundImage: {HeadImgae}}}>
      <div className="u-clearfix u-sheet u-valign-bottom-lg u-valign-bottom-md u-valign-bottom-sm u-valign-bottom-xs u-sheet-1">
        <div className="u-container-style u-expanded-width u-gradient u-group u-radius u-shape-round u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <h3 className="u-align-center u-custom-font u-font-merriweather u-text u-text-default u-text-1">Welcome To</h3>
            <h2 className="u-align-center u-custom-font u-text u-text-2"> Ram Bagicha Guest House</h2>
            
            {/* Call Now Button */}
            <a href="tel:07878033812"
              className="u-border-none u-btn u-btn-round u-button-style u-hover-palette-1-light-2 u-palette-1-base u-radius u-btn-1">
              <span className="u-icon">
                {/* SVG for Phone Icon - Converted to React JSX */}
                <svg className="u-svg-content" viewBox="0 0 513.64 513.64" x="0px" y="0px" style={{ width: '1em', height: '1em' }}>
                  <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72 c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68 c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44 l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"></path>
                </svg>
              </span> Call now
            </a>
            
            {/* WhatsApp Now Button */}
            <a href="https://wa.me/+917878033812"
              className="u-border-none u-btn u-btn-round u-button-style u-hover-palette-1-light-2 u-palette-1-base u-radius u-btn-2">
              <span className="u-file-icon u-icon u-text-white">
                {/* Image tag for WhatsApp icon - Adjust src path */}
                <img src={WhatsAppImage} alt="WhatsApp" />
              </span> WhatsApp now
            </a>
            
            {/* Mail Now Button */}
            <a href="mailto:contact@rambagichaguesthousetirumala.com"
              className="u-border-none u-btn u-btn-round u-button-style u-hover-palette-1-light-2 u-palette-1-base u-radius u-btn-3">
              <span className="u-file-icon u-icon u-text-white">
                {/* Image tag for Mail icon - Adjust src path */}
                <img src={MailImage} alt="Mail" />
              </span> Mail Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;