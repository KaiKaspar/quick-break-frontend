import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Homepage from './Homepage';
import Dashboard from './Dashboard';

const baseUrl = 'http://localhost:3000/'
const loginUrl = baseUrl + 'login'

class MainContainer extends Component {

  state = {
    currentUser: {
  "id": 5,
  "name": "Max",
  "trips": [
    {
      "id": 11,
      "name": "Temples",
      "location": "India",
      "month": 10,
      "duration": 7,
      "trip_type": "adventure",
      "users": [
        "Max"
      ]
    },
    {
      "id": 12,
      "name": "Max test trip",
      "location": "Australia",
      "month": 7,
      "duration": 7,
      "trip_type": "beach",
      "users": [
        "Max"
      ]
    }
  ]
}
  }

  getCurrentUser = name => {
    fetch(loginUrl + `/${name}`)
      .then(res => res.json())
      .then(currentUser => this.setState({currentUser}))
  }

  render() {
    const {getCurrentUser} = this
    const {currentUser} = this.state

    const validUser = Object.keys(currentUser).length > 0 &&
    !Object.keys(currentUser).includes('error')

    return (
      <Router>
        <div className="MainContainer">
          <Route exact path='/' component={routerProps => <Homepage signIn={getCurrentUser} validUser={validUser} routerProps={routerProps} />} />
          <Route path='/dashboard' component={routerProps => <Dashboard user={this.state.currentUser} routerProps={routerProps} />} />
          {/*<Route path='/TripShow' component={() => <TripShow trip={this.props.trip} />} />*/}
        </div>
      </Router>
    )

  }
}

export default MainContainer;
