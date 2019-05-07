import React, { Component } from 'react';
import Calander from './Calander';
import TripName from './TripName';

class TripDetails extends Component {

  render() {
    return (
      <div className="trip-show-item">
        <TripName />
        <br></br>
        <Calander />
      </div>
    );
  }

}

export default TripDetails;
