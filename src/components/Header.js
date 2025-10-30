import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Book Your Stay', href: '#book' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Find Us On Map', href: '#map' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <h6 className="header-title">Ram Bagicha Guest House</h6>
        
        <nav className="nav">
          {/* Hamburger Icon for Mobile */}
          <div className="hamburger-menu">
            <a 
              className="hamburger-link" 
              href="#"
              onClick={toggleMenu}
            >
              <svg className="hamburger-icon" viewBox="0 0 24 24">
                <rect y="1" width="24" height="2"></rect>
                <rect y="7" width="24" height="2"></rect>
                <rect y="13" width="24" height="2"></rect>
              </svg>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <a
                    className="nav-link"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mobile-nav-overlay">
              <div className="mobile-nav">
                <div className="mobile-nav-header">
                  <button className="close-button" onClick={toggleMenu}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <ul className="mobile-nav-list">
                  {navLinks.map((link) => (
                    <li className="mobile-nav-item" key={`mobile-${link.name}`}>
                      <a 
                        className="mobile-nav-link" 
                        href={link.href}
                        onClick={toggleMenu} 
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mobile-nav-backdrop" onClick={toggleMenu}></div>
            </div>
          )}
        </nav>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        /* Base Styles */
        .header {
          background-color: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          height: 70px;
        }

        .header-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin: 0;
        }

        /* Navigation */
        .nav {
          display: flex;
          align-items: center;
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: none;
        }

        .nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 1.5rem;
        }

        .nav-link {
          text-decoration: none;
          color: #2c3e50;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #3498db;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #3498db;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Hamburger Menu */
        .hamburger-menu {
          display: block;
        }

        .hamburger-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .hamburger-link:hover {
          background-color: #f8f9fa;
        }

        .hamburger-icon {
          width: 24px;
          height: 16px;
          fill: #2c3e50;
        }

        /* Mobile Navigation */
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1001;
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          right: 0;
          width: 280px;
          height: 100%;
          background-color: white;
          box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
          z-index: 1002;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.3s ease-out;
        }

        .mobile-nav-header {
          display: flex;
          justify-content: flex-end;
          padding: 1rem;
          border-bottom: 1px solid #eee;
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          color: #2c3e50;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .close-button:hover {
          background-color: #f8f9fa;
        }

        .mobile-nav-list {
          list-style: none;
          margin: 0;
          padding: 1rem 0;
          flex: 1;
        }

        .mobile-nav-item {
          border-bottom: 1px solid #f0f0f0;
        }

        .mobile-nav-link {
          display: block;
          padding: 1rem 1.5rem;
          text-decoration: none;
          color: #2c3e50;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .mobile-nav-link:hover {
          background-color: #f8f9fa;
          color: #3498db;
        }

        .mobile-nav-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1001;
        }

        /* Animation */
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        /* Tablet Styles */
        @media (min-width: 768px) {
          .header-container {
            padding: 0 2rem;
          }
          
          .header-title {
            font-size: 1.75rem;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .hamburger-menu {
            display: none;
          }
          
          .desktop-nav {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;