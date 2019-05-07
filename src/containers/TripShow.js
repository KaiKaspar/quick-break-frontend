import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import TripDetails from '../components/TripDetails';
import TripUsers from '../components/TripUsers';

class TripShow extends Component {

  render() {
    return (
      <div className='trip-show'>
        <TripDetails />
        <TripUsers />
      </div>
    )
  }

}

export default TripShow;
