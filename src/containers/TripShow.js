import React, { Component } from 'react';
import TripDetails from '../components/TripDetails';
import TripUsers from '../components/TripUsers';

const tripsUrl = 'http://localhost:3000/trips/'

class TripShow extends Component {

  state = {
    trip: null,
    trip_country: null
  }

  async componentDidMount () {
    const response = await fetch(tripsUrl + this.props.tripId)
    const trip = await response.json()
    await this.setState({trip})
    fetch('https://restcountries.eu/rest/v2/name' + `/${this.state.trip.country.toLowerCase()}`)
      .then(res => res.json())
      .then(trip_country => this.setState({trip_country}))
  }

  updateTripDates = trip => {this.setState({trip})}

  render() {
    return (
      <div className='trip-show'>
        {this.state.trip && this.state.trip_country && <TripDetails trip_country={this.state.trip_country[0]} trip={this.state.trip} updateTripDates={this.updateTripDates} selectTrip={this.props.selectTrip} />}
        {this.state.trip && this.state.trip_country && <TripUsers trip={this.state.trip}/>}
      </div>
    );
  }

}

export default TripShow;
