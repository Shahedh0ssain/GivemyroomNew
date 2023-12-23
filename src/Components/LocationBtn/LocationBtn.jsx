// LocatinBtn.js

import React, { useState } from 'react';

const LocatinBtn = ({ onLocationReceived }) => {

  const [isLocationAvailable, setLocationAvailable] = useState(false);

  const handleButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          setLocationAvailable(true);
          onLocationReceived(userLocation);

        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };


  return (

    <button className='bg-dark' onClick={handleButtonClick} disabled={isLocationAvailable}>
      {/* {isLocationAvailable ? 'Location Acquired' : 'Get My Location'} */}
      <i className='fa fa-map-marker bg-dark text-light ' ></i>
    </button>

  );
};

export default LocatinBtn;
