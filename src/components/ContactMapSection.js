import React from 'react';
// Import images if not in public folder
import locationIcon from '../images/1865269.png';
import Phone from "../images/4213179.png"
import Whatsapp from "../images/3799943.png";
import Email from "../images/542740.png"

function ContactMapSection() {
  // Use a simplified email address since the original used Cloudflare protection
  const emailAddress = "contact@rambagichaguesthousetirumala.com";
  const phoneNumber = "+91 8739943076";
  const whatsappNumber = "8739943076";
  const address = "Sannidhi St, Tirumala, Tirupati, Andhra Pradesh 517504";
  
  return (
    <section className="u-clearfix u-palette-1-base u-section-7" id="map">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-custom-font u-text u-text-default u-text-1">Find Us On Map</h2>
        <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-28 u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-col">
              <div className="u-size-30">
                <div className="u-layout-col">
                  {/* Map Cell */}
                  <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                    <div className="u-container-layout u-valign-top u-container-layout-1">
                      <div className="u-expanded u-grey-light-2 u-map">
                        <div className="embed-responsive">
                          {/* The original iframe URL is complex, keeping the structure but noting the source change. 
                              In a real React app, you'd use a modern map library (like react-google-maps) or a valid embed URL. */}
                          <iframe 
                            className="embed-responsive-item"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5628849551567!2d79.3511118!3d13.6843229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2ca9d91b506d5%3A0x3a5505fcd30d329!2sRam%20Bagicha%20Guest%20House%203!5e0!3m2!1sen!2sin!4v1736418226031!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ram Bagicha Guest House Location"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-size-30">
                <div className="u-layout-row">
                  {/* Contact Form Cell (Converted to a dummy form structure) */}
                  <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                    <div className="u-border-2 u-border-white u-container-layout u-valign-top-md u-container-layout-2">
                      <div className="custom-expanded u-border-3 u-border-white u-expanded-width-lg u-expanded-width-xl u-form u-form-1">
                        <form className="u-clearfix u-form-spacing-0 u-form-vertical u-inner-form" style={{ padding: '10px' }}>
                          <div className="u-form-group u-form-name">
                            <label htmlFor="name-d57c" className="u-label">Name</label>
                            <input type="text" placeholder="Enter your Name" id="name-d57c" name="name" className="u-input u-input-rectangle" required="" />
                          </div>
                          <div className="u-form-email u-form-group">
                            <label htmlFor="email-d57c" className="u-label">Email</label>
                            <input type="email" placeholder="Enter a valid email address" id="email-d57c" name="email" className="u-input u-input-rectangle" required="" />
                          </div>
                          <div className="u-form-group u-form-message">
                            <label htmlFor="message-d57c" className="u-label">Message</label>
                            <textarea placeholder="Enter your message" rows="4" cols="50" id="message-d57c" name="message" className="u-input u-input-rectangle" required=""></textarea>
                          </div>
                          <div className="u-align-center u-form-group u-form-submit">
                            <button type="submit" className="u-btn u-btn-submit u-button-style">Submit</button>
                            {/* Hidden input removed in React form, Submit button handles the action */}
                          </div>
                          {/* Message divs for success/error removed as they need state management */}
                        </form>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info Cell */}
                  <div className="u-container-style u-layout-cell u-palette-1-light-3 u-size-30 u-layout-cell-3">
                    <div className="u-container-layout u-valign-top u-container-layout-3">
                      <h3 className="u-custom-font u-text u-text-2">Ram Bagicha Guest House, Tirupati, Andhra Pradesh</h3>
                      
                      {/* Address */}
                      <p className="u-align-left u-text u-text-body-color u-text-3">
                        <span className="u-file-icon u-icon u-icon-1"><img src={locationIcon} alt="Location" /></span> {address}
                      </p>
                      
                      {/* Phone */}
                      <p className="u-align-left u-custom-font u-text u-text-palette-1-base u-text-4">
                        <a className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-2" href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                          <span className="u-file-icon u-icon"><img src={Phone} alt="Phone" /></span> {phoneNumber}
                        </a>
                      </p>
                      
                      {/* WhatsApp */}
                      <p className="u-align-left u-custom-font u-text u-text-palette-1-base u-text-5">
                        <a className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-3" href={`https://wa.me/+91${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                          <span className="u-file-icon u-icon"><img src={Whatsapp} alt="WhatsApp" /></span> {phoneNumber}
                        </a>
                      </p>
                      
                      {/* Email */}
                      <p className="u-align-left u-custom-font u-text u-text-palette-1-base u-text-6">
                        <a className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4" href={`mailto:${emailAddress}`}>
                          <span className="u-file-icon u-icon"><img src={Email} alt="Email" /></span> {emailAddress}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMapSection;