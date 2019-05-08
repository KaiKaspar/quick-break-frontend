import React, { Component } from 'react';

class TripName extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.trip.name}</h1>
        <h2>{this.props.trip.location}</h2>
      </div>
    );
  }

}

export default TripName;
