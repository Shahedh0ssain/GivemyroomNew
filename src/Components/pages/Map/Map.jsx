import React, { useEffect, useState } from "react";
import SingleHotel from "../../SingleHotel/SingleHotel";
import useMap from "../../Hooks/useMap";



const Map = () => {

    const [hotels, setHotels] = useState([]);

    const { myLocation } = useMap();



    useEffect(() => {
        // function initMap() {
        // Your map initialization code here
        // Create a new map instance
        if (window.google && window.google.maps) {



            // setisLoading(true);
            if (myLocation) {
                // console.log("under map ", myLocation);

                const map = new window.google.maps.Map(document.getElementById('map'), {
                    // center: { lat: -34.397, lng: 150.644 },
                    center: { lat: myLocation.latitude, lng: myLocation.longitude },
                    zoom: 10,
                });

                // Optionally, you can add markers, polygons, etc.

                const marker = new window.google.maps.Marker({
                    // position: { lat: -34.397, lng: 150.644 },
                    position: { lat: myLocation.latitude, lng: myLocation.longitude },
                    map: map,
                    title: 'Hello World!',
                });
                marker.setMap(map);
                // setisLoading(false);


                // Create a marker for each hotel
                if (hotels) {
                    console.log("hotels data", hotels);

                    hotels.forEach(hotel => {
                        // Log the hotel object to the console for debugging
                        console.log(hotel.icon
                        );

                        // Create a marker for each hotel
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat: hotel.geometry.location.lat, lng: hotel.geometry
                                    .location.lng
                            },
                            map: map,
                            title: hotel.name, // Set the title to the hotel's name
                            // You can add more options here, such as icon, animation, etc.
                            icon: {
                                url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // Red marker icon
                                // Replace with the URL to your custom icon image
                                scaledSize: new window.google.maps.Size(70, 70),
                            },
                        });

                        // marker.setMap(map);

                        // Log any errors related to marker creation
                        if (!marker) {
                            console.error("Error creating marker:", hotel);
                        }
                    });
                }


                // Log any errors related to marker creation
                // if (!marker) {
                //     console.error("Error creating marker:", hotel);
                // }

                // Clean up the script and global function when the component unmounts
                // if (script && script.parentNode) {
                //     script.parentNode.removeChild(script);
                // }

                // Delete the global initMap function to avoid memory leaks
                // delete window.initMap;

            } else {
                console.log("islocation error", myLocation);
                // setisLoading(false);
            }
        } else {
            console.error('Google Maps API not loaded.');
            // setisLoading(false);
        }
        // }

        // initMap();

    }, [myLocation, hotels]);


    // useEffect(() => {
    //     // Function to initialize the map
    //     const initMap = () => {
    //         if (navigator.geolocation) {
    //             navigator.geolocation.getCurrentPosition(function (position) {

    //                 const userLocation = {
    //                     lat: position.coords.latitude,
    //                     lng: position.coords.longitude
    //                 };

    //                 // Create a map centered on the user's location
    //                 const map = new window.google.maps.Map(document.getElementById('map'), {
    //                     center: userLocation,
    //                     zoom: 15 // Adjust the zoom level as needed
    //                 });

    //                 // Add a marker for the user's location
    //                 new window.google.maps.Marker({
    //                     position: userLocation,
    //                     map: map,
    //                     title: 'Your Location'
    //                 });

    //                 // Request nearby hotels using the Google Places API
    //                 const service = new window.google.maps.places.PlacesService(map);
    //                 service.nearbySearch({
    //                     location: userLocation,
    //                     radius: 1000, // Search within a 1 km radius (you can adjust this)
    //                     type: 'lodging' // Search for lodging (hotels)
    //                 }, function (results, status) {
    //                     if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    //                         for (let i = 0; i < results.length; i++) {
    //                             createMarker(results[i]);
    //                         }
    //                     }
    //                 });

    //                 // Create markers for nearby hotels
    //                 function createMarker(place) {
    //                     const marker = new window.google.maps.Marker({
    //                         map: map,
    //                         position: place.geometry.location,
    //                         title: place.name
    //                     });
    //                 }
    //             });
    //         } else {
    //             alert('Geolocation is not supported by your browser.');
    //         }
    //     };

    //     // Load the Google Maps JavaScript API with your API key
    //     const script = document.createElement('script');
    //     script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    //     script.async = true;
    //     script.defer = true;
    //     document.head.appendChild(script);

    //     // Clean up the script tag on component unmount
    //     return () => {
    //         document.head.removeChild(script);
    //     };
    // }, []);

    // fatch all hotel data


    useEffect(() => {

        const fetchData = async () => {
            try {
                // const location = 'LATITUDE,LONGITUDE';
                // const radius = 1000;
                // const type = 'lodging';
                // const api_key = 'YOUR_API_KEY';

                // Update the API URL to point to your server or use the Google Maps API directly
                // const apiUrl = `http://localhost:4000/api/hotels?location=${location}&radius=${radius}&type=${type}&key=${api_key}`;
                const apiUrl = `http://localhost:5000/hotels`;

                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.results) {
                    setHotels(data.results);
                    // console.log('data', data.results);
                } else {
                    console.error(`Error: ${data.error_message || 'Unknown error'}`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [myLocation]);





    return (
        <section className="bg-img"> 
            <div className="container">
                <div className="pt-5 d-flex flex-column align-items-center">
                    {/* <h1 className="text-center border-0 py-2">Map page</h1> */}

                    <div id="map" className="rounded" style={{ width: '60%', height: '350px' }} >
                        <div className=''>
                            {/* //map rander */}
                        </div>

                    </div>
                </div>


                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2 py-5">
                    <SingleHotel></SingleHotel>
                    <SingleHotel></SingleHotel>
                    <SingleHotel></SingleHotel>
                    <SingleHotel></SingleHotel>
                    <SingleHotel></SingleHotel>
                    <SingleHotel></SingleHotel>
                </div>

                {/* <mapPlace></mapPlace> */}
            </div>
        </section>
    );
};

export default Map;