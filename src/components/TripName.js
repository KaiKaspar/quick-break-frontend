import React, { Component } from 'react';

const TripName = ({trip, trip_country}) => (
  <div>
    <img src={trip_country.flag} wrapped ui={false} width="200px"/>
    <h3>{trip.name}</h3>
      <p><strong>{trip.country}</strong></p>
      <p><strong>{trip.city}</strong></p>
      <div style={{textAlign: 'center'}}>
        <p><strong>Region: </strong>{trip_country.region}</p>
        <p><strong>Capital: </strong>{trip_country.capital}</p>
        <p><strong>Currency: </strong>{trip_country.currencies[0].name}</p>
        <p><strong>Language: </strong>{trip_country.languages[0].name}</p>
      </div>
  </div>
);

export default TripName;
