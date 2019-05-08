import React, { Component } from 'react';
import Calendar from './Calendar';
import TripName from './TripName';

class TripDetails extends Component {

  render() {
    debugger
    return (
      <div className="trip-show-item">
        <TripName trip={this.props.trip}/>
        <br></br>

        <Calendar month={this.props.trip.month}/>

      </div>
    );
  }

}

export default TripDetails;
