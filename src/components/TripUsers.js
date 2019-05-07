import React, { Component } from 'react';
import User from './User';
import { Header } from 'semantic-ui-react'

class TripUsers extends Component {

  render() {
    return (
      <div className="trip-show-item">
        <h2 style={{textDecoration: "underline"}}>Guests</h2>
        <User />
      </div>
    );
  }

}

export default TripUsers;
