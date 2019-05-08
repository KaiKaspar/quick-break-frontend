import React, { Component } from 'react';
import Calendar from './Calendar';
import TripName from './TripName';

class TripDetails extends Component {

  render() {
    return (
      <div className="trip-show-item">
        <TripName trip={this.props.trip}/>
        <div id='calendar-container'>
          <Calendar month={this.props.trip.month}/>
        </div>

      </div>
    );
  }

}

export default TripDetails;
