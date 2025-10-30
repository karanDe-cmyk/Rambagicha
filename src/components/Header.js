import React from 'react';

function Header() {
  // Navigation links array for easier mapping
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Book Your Stay', href: '#book' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Find Us On Map', href: '#map' },
  ];

  return (
    <header className="u-clearfix u-header u-header" id="sec-e78f">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h6 className="u-custom-font u-text u-text-1"> Ram Bagicha Guest House</h6>
        
        {/* Main Navigation Menu */}
        <nav className="u-menu u-menu-one-level u-offcanvas u-menu-1">
          {/* Menu Collapse/Hamburger Icon */}
          <div className="menu-collapse" style={{ fontSize: '1.125rem', letterSpacing: '0px', fontWeight: 700 }}>
            {/* The actual HTML structure for the hamburger menu needs complex state management in React 
                or a dedicated UI library, so I'm simplifying the toggle element. */}
            <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-hamburger-link u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base u-hamburger-link-1" href="#">
                <svg className="u-svg-link" viewBox="0 0 24 24"><use xlinkHref="#menu-hamburger"></use></svg>
                <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg"><g><rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect></g></svg>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="u-custom-menu u-nav-container">
            <ul className="u-nav u-unstyled u-nav-1">
              {navLinks.map((link) => (
                <li className="u-nav-item" key={link.name}>
                  <a
                    className="u-border-2 u-border-grey-75 u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-1-base"
                    href={link.href}
                    style={{ padding: '9px 7px' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mobile/Collapsed Navigation (Offcanvas) - Requires React State for functionality, only structure is converted */}
          <div className="u-custom-menu u-nav-container-collapse">
            <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div className="u-inner-container-layout u-sidenav-overflow">
                <div className="u-menu-close"></div>
                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                  {navLinks.map((link) => (
                    <li className="u-nav-item" key={`mobile-${link.name}`}>
                      <a className="u-button-style u-nav-link" href={link.href}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;