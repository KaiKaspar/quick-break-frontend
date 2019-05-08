import React, { Component } from 'react';
import Calendar from './Calendar';
import TripName from './TripName';

class TripDetails extends Component {

  render() {
    return (
      <div className="trip-show-item">
        <TripName />
        <br></br>
        <Calendar />
      </div>
    );
  }

}

export default TripDetails;
