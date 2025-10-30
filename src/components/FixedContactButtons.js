import React from 'react';
import Phone from "../images/apple-phone.png";
import Whatsapp from "../images/external-whatsapp-social-media-justicon-flat-justicon.png"
import Email from "../images/apple-mail.png"

function FixedContactButtons() {
  const phoneNumber = "07878033812";
  const whatsappNumber = "+917878033812";
  const emailAddress = "contact@rambagichaguesthousetirumala.com";

  return (
    <>
      {/* The style block from the original HTML, converted to a global CSS file or CSS-in-JS is recommended. 
          For demonstration, I'm noting the styles here: */}
      <style>
        {`
          .contact-buttons {
            position: fixed;
            bottom: 30px;
            right: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            z-index: 1000; // Important for fixed elements
          }
          .contact-buttons a {
            text-decoration: none;
            text-align: center;
            transition: background-color 0.3s ease;
          }
        `}
      </style> 
     

      <div className="contact-buttons">
        {/* Phone Button */}
        <a href={`tel:${phoneNumber}`}>
          <img width="68" height="68" src={Phone} alt="phone" />
        </a>
        
        {/* WhatsApp Button */}
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <img width="78" height="78" src={Whatsapp} alt="whatsapp" />
        </a>
        
        {/* Email Button */}
        <a href={`mailto:${emailAddress}`}>
          <img width="78" height="78" src={Email} alt="circled-envelope" />
        </a>
      </div>
    </>
  );
}

export default FixedContactButtons;