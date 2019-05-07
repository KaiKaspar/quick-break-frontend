import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Homepage from './Homepage';
import Dashboard from './Dashboard';
import TripShow from './TripShow';

const baseUrl = 'http://localhost:3000/'
const loginUrl = baseUrl + 'login'

class MainContainer extends Component {

  state = {
    currentUser: {}
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
      <div className="MainContainer">
        <TripShow />
      </div>
    )

    {/*return (
      <Router>
        <div className="MainContainer">
          <Route exact path='/' component={() => <Homepage signIn={getCurrentUser} validUser={validUser} />} />
          <Route path='/dashboard' component={() => <Dashboard user={this.state.currentUser} />} />
        </div>
      </Router>
    )*/}

  }
}

export default MainContainer;
