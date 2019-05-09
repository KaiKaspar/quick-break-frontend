import React, { Component } from 'react';
import TripDetails from '../components/TripDetails';
import TripUsers from '../components/TripUsers';

const tripsUrl = 'http://localhost:3000/trips/'

class TripShow extends Component {

  state = {
    trip: null
  }

  componentDidMount () {
    fetch(tripsUrl + this.props.tripId)
      .then(res => res.json())
      .then(trip => this.setState({trip}))
  }

  updateTripDates = trip => {this.setState({trip})}

  render() {
    return (
      <div className='trip-show'>
        {this.state.trip && <TripDetails trip={this.state.trip} updateTripDates={this.updateTripDates} selectTrip={this.props.selectTrip} />}
        {this.state.trip && <TripUsers trip={this.state.trip}/>}
      </div>
    );
  }

}

export default TripShow;
