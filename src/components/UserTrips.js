import React, { Component } from 'react';
import Trip from './Trip';
import { Card } from 'semantic-ui-react';

class UserTrips extends Component {

  render() {
    const { trips, selectTrip } = this.props
    return (
      <div>
        <h1>Your Trips</h1>
        <Card.Group className='centered' >
        {trips.map(t => <Trip trip={t} key={t.id} selectTrip={selectTrip}/>)}
        </Card.Group>
      </div>
    );
  }

}

export default UserTrips;
