import React, { Component } from 'react';

import Dashboard from '../containers/Dashboard';

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
          ? <div></div>
          : <Dashboard user={this.props.user} selectTrip={this.selectTrip}/>
        }
      </React.Fragment>
    );
  }

}

export default UserScreen;
