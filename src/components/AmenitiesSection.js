import React from 'react';
// Import images if they are stored locally and not in the public folder.
// E.g., import wifiIcon from '../images/448942.png';
import wifiIcon from '../images/448942.png'
import Childe from '../images/7583566.png'
import Parking from '../images/3420275.png'
import Pool from '../images/1925823.png'
import Fitness from '../images/4907150.png'
import Restaurant from '../images/8503966.png'

function AmenitiesSection() {
  const amenities = [
    { name: 'Free Wi-fi', icon: wifiIcon },
    { name: 'Child Friendly', icon: Childe },
    { name: 'Parking', icon: Parking },
    { name: 'Pool', icon: Pool },
    { name: 'Fitness Centre', icon: Fitness },
    { name: 'Restaurant', icon: Restaurant },
  ];

  // Divide into two groups for the two lists
  const list1 = amenities.slice(0, 3);
  const list2 = amenities.slice(3, 6);

  const renderAmenitiesList = (list) => (
    <div className="u-repeater u-repeater-1">
      {list.map((item, index) => (
        <div key={item.name} className={`u-container-style u-list-item u-palette-1-light-3 u-radius-50 u-repeater-item u-shape-round u-list-item-${index + 1}`}>
          <div className="u-container-layout u-similar-container u-container-layout-1">
            <span className="u-file-icon u-icon u-icon-1">
              <img src={item.icon} alt={item.name} />
            </span>
            <h3 className="u-align-center u-custom-font u-font-merriweather u-text u-text-2">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="u-clearfix u-palette-1-base u-valign-middle-md u-section-3" id="amenities">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-text u-text-1">Amenities</h2>
        
        {/* First List of Amenities */}
        <div className="u-expanded-width-lg u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
          {renderAmenitiesList(list1)}
        </div>
        
        {/* Second List of Amenities */}
        <div className="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-2">
          {renderAmenitiesList(list2)}
        </div>
      </div>
    </section>
  );
}

export default AmenitiesSection;