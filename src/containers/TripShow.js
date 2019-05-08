import React, { Component } from 'react';
import TripDetails from '../components/TripDetails';
import TripUsers from '../components/TripUsers';

const TripShow = ({trip}) => (
  <div className='trip-show'>
    <TripDetails trip={trip}/>
    <TripUsers trip={trip}/>
  </div>
)

export default TripShow;
