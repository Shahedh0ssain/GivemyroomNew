// import React, { useEffect } from 'react';

// const NearbyHotelsMap = () => {
    
//   useEffect(() => {
//     // Function to initialize the map
//     const initMap = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//           const userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };

//           // Create a map centered on the user's location
//           const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: userLocation,
//             zoom: 15 // Adjust the zoom level as needed
//           });

//           // Add a marker for the user's location
//           new window.google.maps.Marker({
//             position: userLocation,
//             map: map,
//             title: 'Your Location'
//           });

//           // Request nearby hotels using the Google Places API
//           const service = new window.google.maps.places.PlacesService(map);
//           service.nearbySearch({
//             location: userLocation,
//             radius: 1000, // Search within a 1 km radius (you can adjust this)
//             type: 'lodging' // Search for lodging (hotels)
//           }, function (results, status) {
//             if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//               for (let i = 0; i < results.length; i++) {
//                 createMarker(results[i]);
//               }
//             }
//           });

//           // Create markers for nearby hotels
//           function createMarker(place) {
//             const marker = new window.google.maps.Marker({
//               map: map,
//               position: place.geometry.location,
//               title: place.name
//             });
//           }
//         });
//       } else {
//         alert('Geolocation is not supported by your browser.');
//       }
//     };

//     // Load the Google Maps JavaScript API with your API key
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     // Clean up the script tag on component unmount
//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return (
//     <div id="map" style={{ height: '400px', width: '100%' }}>
//       {/* Map will be rendered here */}
//     </div>
//   );
// };

// export default NearbyHotelsMap;


import React from "react";


const mapComponent = () => {

    let islocation = true;

    // Replace 'YOUR_API_KEY' with your actual API key

    const apiKey = 'AIzaSyD0JoV7YKa9kV63QHVz7XG2Ij1on6SLjB8';

    // Make a request to find hotels near a location
    const location = { lat: 37.7749, lng: -122.4194 }; // Example coordinates for San Francisco
    const radius = 1000; // Search within a 1 km radius
    const type = 'lodging'; // Search for lodging (hotels)

    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=${radius}&type=${type}&key=${apiKey}`;

    // fetch(apiUrl)
    //     .then(response => response.json())
    //     .then(data => {
    //         // Process the data, which will contain information about nearby hotels
    //         console.log(data);

    //         // Example: Log names and addresses of nearby hotels
    //         data.results.forEach(hotel => {
    //             console.log(`Name: ${hotel.name}, Address: ${hotel.vicinity}`);
    //         });
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });

    //     let islocation = true;


        // Create a new map instance
        if (window.google && window.google.maps) {
            // Create a new map instance
            // setisLoading(true);
            if (islocation) {
                const map = new window.google.maps.Map(document.getElementById('map'), {
                    center: { lat: -34.397, lng: 150.644 },
                    // center: { lat: islocation.latitude, lng: islocation.longitude },
                    zoom: 30,
                });

                // Optionally, you can add markers, polygons, etc.

                const marker = new window.google.maps.Marker({
                    position: { lat: -34.397, lng: 150.644 },
                    // position: { lat: islocation.latitude, lng: islocation.longitude },
                    map: map,
                    title: 'Hello World!',
                });
                marker.setMap(map);
                // setisLoading(false);
            } else {
                console.log("islocation error");
                // setisLoading(false);
            }
        } else {
            console.error('Google Maps API not loaded.');
            // setisLoading(false);
        }
  


    return (
        <div id="map" >
            {/* <div className="d-flex justify-content-center" id="map" >
                <div className='pt-5 ' style={{ width: '500px', height: '400px' }}>
                    <img className='' src="images/map.png" alt="Girl in a jacket" ></img>
                </div>
            </div> */}
        </div>
    );
};

export default mapComponent;
