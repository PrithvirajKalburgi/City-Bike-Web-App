import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Map } from '../components/Map';

export const StationDetails = () => {
  // Use the useParams hook to get the username from the URL
  // username has to be applied as a named parameter in the route
  let { location } = useParams();
  // useLocation hook is used to grab the state from the input to object
  // You can grab each field in the object by using the same name as the variable name
  let { pathname } = useLocation();
  let { state } = useLocation();

  //used for testing, should probably move to main and then pass data down here
  //will need to create a utils js for getting the data from backend
  const [address, setAddress] = useState('Helsinki');
  const [started, setStarted] = useState(25);
  const [ended, setEnded] = useState(10);
  const [lat, setLat] = useState(13.9589211643);
  const [lng, setLng] = useState(100.585207659);

  return (
    <div className='Table-Journeys'>
      <div className='JourneyDiv-1'>
        <h1 className='HomeFront'>{location} Details</h1>
        {/* <p>station name: {state.stationname}</p> */}
        <div className='HomeFront1'>
          <p>address: {address}</p>
          <p>{started} Journeys Started Here </p>
          <p>{ended} Journeys Ended Here</p>
        </div>
      </div>

      <div className='Table-Journeys-11'>
        <div className=' JourneyDiv-3'>
          <Map lat={lat} lng={lng} />
        </div>
      </div>
    </div>
  );
};
