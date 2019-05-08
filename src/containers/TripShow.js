import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import TripDetails from '../components/TripDetails';
import TripUsers from '../components/TripUsers';

class TripShow extends Component {

  render() {
    return (
      <div className='trip-show'>
        <TripDetails trip={this.props.trip}/>
        <TripUsers trip={this.props.trip}/>
      </div>
    )
  }

}

export default TripShow;
