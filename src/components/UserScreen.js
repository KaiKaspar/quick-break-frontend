import React, { Component } from 'react';

import Dashboard from '../containers/Dashboard';
import TripShow from '../containers/TripShow';

class UserScreen extends Component {

  state = {
    selectedTrip: null
  }

  selectTrip = selectedTrip => {this.setState({selectedTrip})}

  render() {
    return (
      <React.Fragment>
        {
          this.state.selectedTrip
          ? <TripShow tripId={this.state.selectedTrip.id} />
          : <Dashboard user={this.props.user} selectTrip={this.selectTrip}/>
        }
      </React.Fragment>
    );
  }

}

export default UserScreen;
