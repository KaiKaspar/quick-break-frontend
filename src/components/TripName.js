import React, { Component } from 'react';

const TripName = ({trip}) => (
  <div>
    <h1>{trip.name}</h1>
    <h2>{trip.location}</h2>
  </div>
);

export default TripName;
