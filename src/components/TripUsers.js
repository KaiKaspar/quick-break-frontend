import React, { Component } from 'react';

class TripUsers extends Component {

  render() {

    return (
      <div className="trip-show-item">
        <h2 style={{textDecoration: "underline"}}>Going:</h2>
        {this.props.trip.users.map(u => <h3>{u.name}</h3>)}
      </div>
    );
  }

}

export default TripUsers;
