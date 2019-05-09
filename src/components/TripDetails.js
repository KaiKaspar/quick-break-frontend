import React, { Component } from 'react';
import Calendar from './Calendar';
import TripName from './TripName';

class TripDetails extends Component {

  render() {

    return (
      <div className="trip-show-item">
        <TripName trip={this.props.trip}/>
        <div id='calendar-container'>
          <Calendar trip={this.props.trip} updateTripDates={this.props.updateTripDates}/>
        </div>
        <button className='ui button' onClick={() => this.props.selectTrip(null)}>Back to dashboard</button>
      </div>
    );
  }

}

export default TripDetails;
