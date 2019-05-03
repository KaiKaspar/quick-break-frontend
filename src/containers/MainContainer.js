import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Homepage from './Homepage';

const baseUrl = 'http://localhost:3000/'
const loginUrl = baseUrl + '/login'

class MainContainer extends Component {

  state={
    currentUser: {}
  }

  getCurrentUser = name => {
    fetch(loginUrl + `/${name}`)
      .then(res => res.json())
      .then(currentUser => this.setState({currentUser}))
  }

  render() {
    const {getCurrentUser} = this

    return (
      <Router>
        <div className="MainContainer">
          <Route exact path='/' component={() => <Homepage signIn={getCurrentUser} />} />
        </div>
      </Router>
    );
  }

}

export default MainContainer;
