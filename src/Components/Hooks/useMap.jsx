import { useState } from "react";



const useMap = (Location) => {

  let temLocation = Location;

  const nolocation = {
    latitude
      :
      23.461888,
    longitude
      :
      91.1638528
  }

  if (!Location) {
    console.log("tem location")
    temLocation = nolocation
  }

  const [myLocation, setmyLocation] = useState(temLocation);



  return {
    myLocation
  }

}

export default useMap;