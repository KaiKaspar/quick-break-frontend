import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Homepage from './Homepage';
import UserScreen from '../components/UserScreen';

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
      <Router>
        <div className="MainContainer">
          <Route exact path='/' component={routerProps => <Homepage signIn={getCurrentUser} validUser={validUser} routerProps={routerProps} />} />
          <Route path='/user-screen' component={routerProps => <UserScreen user={this.state.currentUser} routerProps={routerProps} />} />
        </div>
      </Router>
    )
  }
}

export default MainContainer;
