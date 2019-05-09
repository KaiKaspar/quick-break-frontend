import React, { Component } from 'react';
import TripDetails from '../components/TripDetails';
import TripUsers from '../components/TripUsers';

const tripsUrl = 'http://localhost:3000/trips/'

class TripShow extends Component {

  state = {
    trip: {users: [], month:null}
  }

  componentDidMount () {
    fetch(tripsUrl + this.props.tripId)
      .then(res => res.json())
      .then(trip => this.setState({trip}))
  }

  render() {
    return (
      <div className='trip-show'>
        <TripDetails trip={this.state.trip}/>
        <TripUsers trip={this.state.trip}/>
      </div>
    );
  }

}

export default TripShow;
