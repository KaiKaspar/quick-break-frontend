import React, { Component } from 'react';
import Trip from './Trip';

class UserTrips extends Component {

  render() {
    const { trips } = this.props
    return (
      <div>
        {/*{trips.map(t => <Trip trip={t} key={t.id}/>)}*/}
        <h1>Your Trips</h1>
        <Trip />
      </div>
    );
  }

}

export default UserTrips;
